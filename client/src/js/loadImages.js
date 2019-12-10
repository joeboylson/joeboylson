const loadImages = (urlArray, callback, loadingContainer) => {

  let imageArray = [];
  let statusBar = loadingContainer.firstElementChild;

  for (let url of urlArray) {

    let newImage = new Image();
    newImage.src = url;
    imageArray.push(newImage)

    let statusItemWrapper = document.createElement('div');
    statusItemWrapper.classList.add('status-item-wrapper');
    statusItemWrapper.classList.add('fade-up-in');

    let statusItem = document.createElement('p');
    let statusString = `Loading Image: "${url}"`
    statusItem.innerHTML = `${statusString}${'&nbsp;'.repeat(statusString.length%2)}`;
    statusItem.classList.add('status-item');

    let statusResult = document.createElement('p');
    statusResult.innerHTML = ``;
    statusResult.classList.add('status-result');

    statusItemWrapper.appendChild(statusItem);
    statusItemWrapper.appendChild(statusResult);
    loadingContainer.appendChild(statusItemWrapper);

    newImage.onload = () => {

      statusResult.innerHTML = `Complete`;

      let loadedImagesCount = imageArray.filter(image => image.complete).length;
      statusBar.style.transform = `scaleX(${loadedImagesCount/imageArray.length})`

      if ( imageArray.every(image => image.complete ) ) {

        let statusItemWrapper = document.createElement('div');
        statusItemWrapper.classList.add('status-item-wrapper');
        statusItemWrapper.classList.add('fade-up-in');
    
        let statusItem = document.createElement('p');
        let statusString = `All Images Loaded`
        statusItem.innerHTML = `${statusString}${'&nbsp;'.repeat(statusString.length%2)}`;
        statusItem.classList.add('status-item');

        statusItemWrapper.appendChild(statusItem);
        loadingContainer.appendChild(statusItemWrapper);

        setTimeout( () => {
          for (let ele of document.getElementsByClassName('status-item-wrapper')) {
            ele.style.display = 'none';
          }
          callback()
        }, 1000 )
      }
    }
  }

}

export { loadImages }