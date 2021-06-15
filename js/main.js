import{createAdvertisement} from './utils/createAdvertisement.js';
import{SIMILAR_ADV_COUNT} from './utils/data.js';


const similaraAvertisement = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvertisement());

similaraAvertisement;

