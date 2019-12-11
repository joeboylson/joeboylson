const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const path = require('path');
const request = require('request')

let downloadableFiles = {};

const setDownloadableFiles = (folder) => {

  fs.readdir(folder, (error, items) => {
    
    for( let item of items) {
      let itemPath = path.join(folder, item)
      
      if ( fs.lstatSync(itemPath).isDirectory() ) {
        setDownloadableFiles(itemPath)
      }
      else {
        downloadableFiles[item] = itemPath
      }
    }

  })
  
}

setDownloadableFiles('public')

// CLIENT
app.use( express.static(`${__dirname}/client/build`) );
app.use( express.static(`${__dirname}/public`) );

app.get('/download', (req, res) => {
  if (req.query.file && Object.keys(downloadableFiles).includes(req.query.file)) {
    return res.download( downloadableFiles[req.query.file] )
  }
  return res.redirect('/')
})

app.get('/*', (req, res) => {
  
  if (process.env.NODE_ENV == 'production') {
    request(`https://maker.ifttt.com/trigger/website_trigger/with/key/${process.env.IFTTT_WEBHOOK_KEY}`)
  }
  
  res.sendFile( `${__dirname}/client/build/index.html`)
});

app.listen(port, () => console.log(`::: ${port}`))