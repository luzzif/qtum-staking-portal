# QTUM staking portal

A small React portal to check a full node's staking-related basic info.

For now, the following info is shown (please note the info is only relative to the addresses that *you* decide by setting environment variables below):

- Total wallet balance
- Total QTUMs gained from staking
- Total fiat currency gained from staking

Really simple, but it gets the job done.
If you'd like to integrate more info, kindly submit a PR.

## How to use it

Simply build the source code through `yarn build` and publish it somewhere, making sure to populate the following environment variables:

-   `REACT_APP_ADDRESSES`: a list of addresses, sperated by a semicolon, to check out for balances and staking gains.
-   `REACT_APP_INITIAL_AMOUNT`: the initial amount of QTUM that was put into the wallet to bootstrap the staking process (used to calculate the net staking gains).
-   `REACT_APP_CRYPTO_COMPARE_API_KEY`: an API key to access CryptoCompare's REST API. Get one for free [here](https://min-api.cryptocompare.com/)

You're set, enjoy!
