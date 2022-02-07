require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeyby: {
      url: `${process.env.ALCHEMY_RINKEYBY_URL}`,
      accounts: [`${process.env.RINKEYBY_PRIVATE_KEY}`],
    } 
  }
};