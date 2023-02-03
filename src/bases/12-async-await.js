// ASYNC AWAIT

const api = 'http://api.giphy.com/v1/gifs/random';
const apiKey = 'MitZ9uw5MyAv0KVdz518g3sEXoULcOzQ';

export const getGiphyGif = async () => {
  try {
    const response = await fetch(`${api}?api_key=${apiKey}`);
    const { data } = await response.json();
    const { url } = data.images.original;
    // console.log(url);
    return url;
  } catch (error) {
    console.log(error);
  }
};

// getGiphyGif();
