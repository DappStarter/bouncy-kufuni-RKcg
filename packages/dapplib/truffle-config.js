require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name remember stereo solid hover end army genius'; 
let testAccounts = [
"0x91908cf2b70985fcf0749012769cc7ff377668a760ead73bd3b9919a5f4d9e81",
"0x75492c3cf3c254240bf43219cef24c1a645acf75be6380dbe787d7aff22f3777",
"0xefd39c0bd6a8e817ffc9402045ee92cf91237ea496de0b2e07406960fa1b0970",
"0x712cc6aac66d689d69d9a9e23a3bbfdf87a870a3133073056f2f2e044b88517d",
"0xa205486a45561f122688b2d7da1b290ad17cfffbd8d48e62242ec8e10e9cea57",
"0x7c8255d78fdb1650e282b1cf7ef147301efddba5930e5d68b2fa131580253c51",
"0x2c5dcd1cd27c4359415b89296a0a793041b5dfdb95e4060f046607f50cc13c4f",
"0x0d55fcd96278c3d7b3c7fe8181c7ba28b38916be25ddb8d262839572081bcdc6",
"0x147f4eb0d5e16f5b28e7944fb0c485b1b5581329c9988ab6cb8754de855941ac",
"0x84da47ff763abac4be9fd683f4fb7068744a9c3a3bf95a6730f0cf00a14779bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

