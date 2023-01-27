// FETCH API

const apiKey = "MitZ9uw5MyAv0KVdz518g3sEXoULcOzQ";

const getGiphyGif = fetch(
  `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

getGiphyGif
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    console.log(url);

    // const img = document.createElement("img");
    // img.src = url;

    // document.body.append(img);
  });
