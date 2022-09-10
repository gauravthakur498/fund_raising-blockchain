import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa41E155A4A022ffe1688B1F9a923B425ca3087db'
);

export default instance;
