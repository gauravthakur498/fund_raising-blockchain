const HDWalletProvider = require('truffle-hdwallet-provider');

const Web3 = require('web3');
const compiledFactory = require('../etherum/build/CampaignFactory.json');


const provider = new HDWalletProvider(
    "place pig jazz little buzz kite brick gown junk spray human drink",
    "https://ropsten.infura.io/v3/e5a37c99b8094a81954c7b005691ec16"
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attemping to deploy from accounts ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ gas:'1000000',from: accounts[0] });

    console.log('Contract deploy to ', result.options.address);
};

deploy();