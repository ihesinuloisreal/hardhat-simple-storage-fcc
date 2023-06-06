require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("hardhat-gas-reporter")
// require("@nomiclabs/hardhat-etherscan")
const SAPOLIA_RPC_URL = process.env.RPC_URL_SAPOLIA
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sapolia: {
            url: SAPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
    },
    solidity: "0.8.8",
    gasReporter: {
        enabled: true,
        // currency: "USD",
        // outputFile: "gas-report.txt",
        // noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
}
