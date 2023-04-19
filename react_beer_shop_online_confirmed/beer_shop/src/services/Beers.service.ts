import axios from 'axios';


const Beers = async () => {
  try {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers`,
      {
        params: {
          page: 1,
          per_page: 80
        }
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return 0;
  }
}

export const GetBeers = async () => {
    return await Beers();
};