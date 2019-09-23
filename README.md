# QTUM staking portal

A small React portal to check a full node's staking-related basic info.

## How to use it

Simply build the source code through `yarn build` and publish it somewhare, making sure to populate the following environment variables:

-   `REACT_APP_QTUM_API_ENDPOINT`: QTUM's public API endpoint (`https://qtum.info/api/`)
-   `REACT_APP_ADDRESSES`: a list of addresses, sperated by a semicolon, to check out for balances and staking gains.
-   `REACT_APP_INITIAL_AMOUNT`: the initial amount of QTUM that was put into the wallet to bootstrap the staking process (used to calculate the net staking gains).
-   `REACT_APP_COIN_API_ENDPOINT`: CoinApi's endpoint (`https://rest.coinapi.io/`)
-   `REACT_APP_COIN_API_KEY`: an API key to access CoinApi's REST APIs. Get one for free [here](https://www.coinapi.io/pricing?apikey)

You're set, enjoy!
