import{createAvatar} from './utils/createOffer.js';
import{createLocation} from './utils/createOffer.js';
import{createOffer} from './utils/createOffer.js';
import{SIMILAR_ADV_COUNT} from './utils/data.js';


const createAdvertisement = () => {
  const location = createLocation();
  const offer = createOffer();
  const author = createAvatar();

  return { author, offer, location };
};

const similaraAvertisement = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvertisement());

console.log(similaraAvertisement);
