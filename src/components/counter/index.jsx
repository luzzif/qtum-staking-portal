import React, { memo } from "react";
import CountAnimation from "react-count-animation";
import "./styles.css";

export const Counter = memo(({ number }) => (
    <span className="counter">
        <CountAnimation
            start={1}
            count={number}
            duration={1000}
            decimals={2}
            animation="up"
        />
    </span>
));
