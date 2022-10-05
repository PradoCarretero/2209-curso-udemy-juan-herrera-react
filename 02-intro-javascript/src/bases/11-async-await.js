const getImage = async () => {
  try {
    const apiKey = "mw0xXCCsail1ixqRVuxG2NvWz0KJ5uQp";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    console.log(data);
    const { url } = await data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del error
    console.error(error);
  }
};

getImage().then();
