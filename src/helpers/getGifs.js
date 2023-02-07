export const getGifs = async (category) => {
  const api = 'api.giphy.com/v1/gifs/search';
  const apiKey = 'MitZ9uw5MyAv0KVdz518g3sEXoULcOzQ';
  const limit = 5;
  const url = `https://${api}?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gif = data.map((i) => ({
    id: i.id,
    title: i.title,
    url: i.images.downsized_medium.url,
  }));

  return gif;
};
