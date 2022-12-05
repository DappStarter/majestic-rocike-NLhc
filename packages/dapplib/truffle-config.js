require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remind evil gloom ensure sun gesture'; 
let testAccounts = [
"0x253308c2f28a2eb02181d1483ec1e22b08748d6af06949826af6a39093801f50",
"0x7487a4e370f702e774cc1a7e8afa9d84140543aaf239154ab27c71da85fb8172",
"0xb59597685bbc779f97580e8fcb7b4184c99feceb9ebbeecd01da2262b2c03ee8",
"0x13d8a602a66bbc3aeacef3ef73f21e107e62798391dd9b6e2565e59308118023",
"0xf143d869fc02a39fad25cf39c3421c6c3db45c65258847731004c3d44978e594",
"0xba877c4d326ac3c08c551a32c42ab600606360bc5dafa25a34362bea62ecf231",
"0xa04a1391637be82da7821f6544c951b41506019e9144427ed5e45e8e39c6d7f5",
"0x48f9dfe9c050173e67836740fac7e0d9581b690808f0c65101102673ad55a0ba",
"0x59fad4fa3fca7350101f6f4b3784c4e544ab83ca509fca8547092dcd8e354109",
"0x3d24cb5207bb67ee25b1186628a8181a9e1172ccfd907a4c444b769f8417486a"
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

