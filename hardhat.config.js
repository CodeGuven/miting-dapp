require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/MP2v7trYC6JzXUo7mDXrBmJqLgAvGyos",
      accounts: [`1a03902f51aeea314d3c37ea0161a714ff0eb9264ebd1542c4e943e49bd525de`],
    },
  },
  etherscan: {
    apiKey: "66RE5HNVH9WDRBUAY1MBW2SYGBIKB8SHCB"
  },
};

// 0xEDC7d6c55C7e7517AAAa44C15Fe75142B1304F13
