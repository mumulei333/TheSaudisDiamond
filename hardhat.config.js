
/* global ethers task */
require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const balance = await ethers.provider.getBalance(taskArgs.account);

    console.log(ethers.utils.formatEther(balance), "ETH");
  });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "697e7d0e4ae24cc89a321ca8c1452747";

// Replace this private key with your Goerli account private key.
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key.
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "04549d2d08300efc939348f81336fefe99693a1328f4f3b3306f9833eeeeeeee";
const RINKEBY_PRIVATE_KEY = "04549d2d08300efc939348f81336fefe99693a1328f4f3b3306f9833eeeeeeee";


/**
 * @type import('hardhat/config').HardhatUserConfig 
 */
module.exports = {

  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://goerli.infura.io/v3/" + ALCHEMY_API_KEY,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    rinkeby: {
      url: "https://goerli.infura.io/v3/697e7d0e4ae24cc89a321ca8c1452747",
      accounts: [RINKEBY_PRIVATE_KEY]
    }
  },

  solidity: '0.8.6',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
