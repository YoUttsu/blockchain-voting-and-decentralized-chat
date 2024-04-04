require("@nomicfoundation/hardhat-toolbox");
const INFURA_API_KEY = "ccb00a10b96b458dbddae55ad62c8831";
const SEPOLIA_PRIVATE_KEY = `a8ba548cecd8d54fb15abc5ba0712b5ed87e5aa8a1b7a7988b81d8949dd08368`;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
