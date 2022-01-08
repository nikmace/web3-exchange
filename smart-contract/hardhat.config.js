// https://eth-ropsten.alchemyapi.io/v2/OVvSEPx_oIfa2vsjxNIfWeeOvSw4ttUi

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/OVvSEPx_oIfa2vsjxNIfWeeOvSw4ttUi',
      accounts: ['def4b89802d193d55ea37c37aba07d0c5f3ba406cb16052be19395957789f065']
    }
  }
}