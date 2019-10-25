import Decimal from "decimal.js";

export const getQtumFromSatoshis = satoshis =>
    new Decimal(satoshis).dividedBy(100000000).toNumber();

export const getSatothisFromQtum = qtum =>
    new Decimal(qtum).mul(100000000).toNumber();