const apiKey = "mw0xXCCsail1ixqRVuxG2NvWz0KJ5uQp";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original; //se escribe ({data}) y {url} porque uso desestructuración y accesodirectamente
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
