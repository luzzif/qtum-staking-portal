import React, { useEffect, memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBalance } from "../../actions/balances";
import { INITIAL_AMOUNT, ADDRESSES } from "../../env";
import Spinner from "react-md-spinner";
import { getQtumFromSatoshis } from "../../utils/conversions";
import { getPrice } from "../../actions/prices";
import { Counter } from "../../components/counter";
import "./styles.css";
import "react-count-animation/dist/count.min.css";

export const App = memo(() => {
    const balances = useSelector(state => state.balances);
    const loadings = useSelector(state => state.loadings.amount);
    const price = useSelector(state => state.prices);
    const dispatch = useDispatch();

    const [totalBalance, setTotalBalance] = useState(0);
    const [gainedBalance, setGainedBalance] = useState(0);
    const [gainedEuros, setGainedEuros] = useState(0);

    useEffect(() => {
        dispatch(getPrice());
        ADDRESSES.forEach(address => {
            dispatch(getBalance(address));
        });
    }, [dispatch]);

    useEffect(() => {
        if (balances) {
            const totalBalance = getQtumFromSatoshis(
                Object.values(balances).reduce(
                    (totalBalance, balance) => (totalBalance += balance),
                    0
                )
            );
            setTotalBalance(totalBalance);
            setGainedBalance(totalBalance - INITIAL_AMOUNT);
        }
    }, [balances]);

    useEffect(() => {
        if (gainedBalance && price) {
            setGainedEuros(gainedBalance * price);
        }
    }, [gainedBalance, price]);

    return (
        <div className="container">
            {loadings > 0 || !totalBalance || !gainedBalance || !gainedEuros ? (
                <Spinner singleColor="#fff" />
            ) : (
                <>
                    <div className="quantity">
                        <Counter number={totalBalance} /> QTUM
                    </div>
                    <div className="gained">
                        <Counter number={gainedBalance} /> QTUM (
                        {<Counter number={gainedEuros} />} EUR) gained from
                        staking
                    </div>
                </>
            )}
        </div>
    );
});
