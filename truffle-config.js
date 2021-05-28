const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.RINKEBY_RPC_URL
        );
      },
      network_id: "4",
      skipDryRun: true,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6",
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  plugins: ["truffle-plugin-verify"],
};
