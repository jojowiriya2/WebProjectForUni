require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = "PhOZOwrxTGqQtTeS0J-N6LITMzAIKid5";

const GOERLI_PRIVATE_KEY = "9a51da7d74a1e75ea473c2ef02602c60cbb9d7d53e3aee94b864361db8ce3f2d";

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PhOZOwrxTGqQtTeS0J-N6LITMzAIKid5',
      accounts: ['9a51da7d74a1e75ea473c2ef02602c60cbb9d7d53e3aee94b864361db8ce3f2d'],
    },
  },
};

