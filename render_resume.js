const path = require('path');
const HTML5ToPDF  = require('html5-to-pdf');


const filename = path.join(__dirname, `public/resume.pdf`);

const renderResume = async () => {

  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "public/resume.html"),
    outputPath: path.join(filename)
  })
  
  await html5ToPDF.start()
  await html5ToPDF.build()
  await html5ToPDF.close()
  console.log(`::: created ${filename}`)
}

renderResume()