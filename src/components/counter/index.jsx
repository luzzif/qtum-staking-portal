import { PropTypes } from "prop-types";
import React, { memo } from "react";
import CountAnimation from "react-count-animation";
import "./styles.css";

export const Counter = memo(({ number, decimals }) => (
    <span className="counter">
        <CountAnimation
            start={1}
            count={number}
            duration={1000}
            decimals={decimals}
            animation="up"
        />
    </span>
));

Counter.propTypes = {
    number: PropTypes.number,
    decimals: PropTypes.number
}

Counter.defaultProps = {
    decimals: 2
}