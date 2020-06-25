import Prismic from 'prismic-javascript';

const apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';
const cacheLife = 20 * 60 * 1000; // 20 mins
let ads: any[];
let lastFetch: number | null = null;

const getLatest = async () => {
  const api = await Prismic.getApi(apiURL);
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'docs_ad'),
    {}
  );
  ads = response.results;
  lastFetch = Date.now();
};

export const getAd = async () => {
  if (lastFetch === null || (Date.now() - lastFetch) > cacheLife) {
    await getLatest();
  }
  return chooseAdByWeight();
};

const chooseAdByWeight = () => {
  const weightList = []; // Just Checking...
  for (const ad of ads) {
    if (ad['data']) { // Safety
      if (!ad['data'].ad_weight) { ad['data'].ad_weight = 1; }
      for (let i = 0; i < ad['data'].ad_weight; i++) {
        weightList.push(ad);
      }
    }
  }
  // Probability Fun
  return weightList[Math.floor(Math.random() * weightList.length)]?.data || null;
};
