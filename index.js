const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');


// DOWNLOADABLE FILES
let downloadableFiles = {};

const setDownloadableFiles = (folder) => {

  fs.readdir(folder, (error, items) => {

    for (let item of items) {
      let itemPath = path.join(folder, item)

      if (fs.lstatSync(itemPath).isDirectory()) {
        setDownloadableFiles(itemPath)
      } else {
        downloadableFiles[item] = itemPath
      }
    }

  })

}

setDownloadableFiles('public')

// SENDGRID
const getSendgridApiKey = () => {
  if (process.env.NODE_ENV !== 'production') {
    let config = require('./config')
    return config.SENDGRID_API_KEY;
  } else {
    return process.env.SENDGRID_API_KEY;
  }
}

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(getSendgridApiKey());

// CLIENT
app.use(express.static(`${__dirname}/client/build`));
app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.get('/download', (req, res) => {
  if (req.query.file && Object.keys(downloadableFiles).includes(req.query.file)) {
    return res.download(downloadableFiles[req.query.file])
  }
  return res.redirect('/')
})

app.post('/contact', async (req, res) => {

  if (req.body.name && req.body.email && req.body.message) {

    const msg = {
      to: 'joeboylson@gmail.com',
      from: req.body.email,
      subject: `New Message from Website`,
      text: `Name: ${req.body.name} \n Message: ${req.body.message}`,
    };

    try {
      await sgMail.send(msg);

      return res.send({
        success: true,
        errors: []
      })
    } catch (error) {
      return res.send({
        success: false,
        errors: [error]
      })
    }

  } else {
    return res.send({
      success: false,
      errors: ['Invalid inputs']
    })
  }

})

app.get('/cv', (req, res) => {
  const html = fs.readFileSync('./public/resume.html', 'utf8');
  const filename = path.join(__dirname, `public/export-${(new Date()).valueOf()}.pdf`)

  pdf.create(html, {
    format: 'Letter',
    width: `8.5in`,
    height: `11in`
  }).toFile(filename, (pdf_err, pdf_res) => {
    if (pdf_err) {
      res.send('there was an error')
    }
    res.sendFile(filename)
  });
})

app.get('/*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`));

app.listen(port, () => console.log(`::: ${port}`))