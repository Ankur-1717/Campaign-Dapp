import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8718B1b4B2D6e9878eB1969C91a92588bEd77379'
);

export default instance; 