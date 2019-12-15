const loadImages = (urlArray, callback) => {
  let imageArray = [];

  for (let url of urlArray) {

    let newImage = new Image();
    newImage.src = url;
    imageArray.push(newImage)

    newImage.onload = () => {
      if ( imageArray.every(image => image.complete ) ) {
        console.log('::: all images are loaded')
        callback()
      }
    }
  }

}

export { loadImages }