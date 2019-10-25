import React, { useEffect, memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddressInfo } from "../../actions/address-info";
import { INITIAL_AMOUNT, ADDRESSES, FIAT_CURRENCY } from "../../env";
import Spinner from "react-md-spinner";
import {
    getQtumFromSatoshis,
    getSatothisFromQtum
} from "../../utils/conversions";
import { getBlockchainInfo } from "../../actions/blockchain-info";
import { getPrice } from "../../actions/prices";
import { Counter } from "../../components/counter";

import "./styles.css";
import "react-count-animation/dist/count.min.css";

export const App = memo(() => {
    const addressInfo = useSelector(state => state.addressInfo);
    const loadings = useSelector(state => state.loadings.amount);
    const price = useSelector(state => state.prices);
    const netStakeWeight = useSelector(
        state => state.blockchainInfo.netStakeWeight
    );
    const dispatch = useDispatch();

    const [totalBalance, setTotalBalance] = useState(0);
    const [gainedBalance, setGainedBalance] = useState(0);
    const [gainedEuros, setGainedEuros] = useState(0);
    const [totalStakedBlocks, setTotalStakedBlocks] = useState(0);
    const [expectedBlockTime, setExpectedBlockTime] = useState(0);

    useEffect(() => {
        dispatch(getPrice());
        dispatch(getBlockchainInfo());
        ADDRESSES.forEach(address => {
            dispatch(getAddressInfo(address));
        });
    }, [dispatch]);

    useEffect(() => {
        if (addressInfo) {
            const totalBalance = getQtumFromSatoshis(
                Object.values(addressInfo).reduce(
                    (totalBalance, info) => (totalBalance += info.balance),
                    0
                )
            );
            const totalStakedBlocks = Object.values(addressInfo).reduce(
                (totalBlocks, info) => (totalBlocks += info.blocksMined),
                0
            );
            const expectedBlockTime =
                netStakeWeight / (getSatothisFromQtum(totalBalance) * 675);

            setTotalBalance(totalBalance);
            setGainedBalance(totalBalance - INITIAL_AMOUNT);
            setTotalStakedBlocks(totalStakedBlocks);
            setExpectedBlockTime(expectedBlockTime);
        }
    }, [addressInfo, netStakeWeight]);

    useEffect(() => {
        if (gainedBalance && price) {
            setGainedEuros(gainedBalance * price);
        }
    }, [gainedBalance, price]);

    return (
        <div className="container">
            {loadings > 0 || !totalBalance || !gainedBalance || !gainedEuros ? (
                <Spinner singleColor="#fff" size={52} />
            ) : (
                <>
                    <div className="quantity">
                        <Counter number={totalBalance} /> QTUM
                    </div>
                    <div className="gained">
                        <Counter number={gainedBalance} /> QTUM (
                        {<Counter number={gainedEuros} />} {FIAT_CURRENCY}){" "}
                        gained from staking
                    </div>
                    <div className="stakedBlocks">
                        <Counter number={totalStakedBlocks} decimals={0} />{" "}
                        staked blocks
                    </div>
                    <div className="expectBlockTime">
                        <Counter number={expectedBlockTime} decimals={2} /> days
                        of average block time
                    </div>
                </>
            )}
        </div>
    );
});
