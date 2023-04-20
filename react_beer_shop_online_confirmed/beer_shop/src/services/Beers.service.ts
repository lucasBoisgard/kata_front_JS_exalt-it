import axios from 'axios';


export const GetBeers = async () => {
  try {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers`,
      {
        params: {}
      }
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}
export const GetBeer = async (id: string) => {
  try {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers/`+id,
      {
        params: { }
      }
    );
    return res.data[0] || {};
  } catch (err) {
    console.error(err)
    return err;
  }
}