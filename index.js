const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

let projects = []

app.use( express.static(`${__dirname}/client/build`) );

fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {

        if ( (/^assignment/i).test(file) ) {
            app.use(`/${file}`, express.static(`${__dirname}/${file}`));
            projects.push(file)
        }

    });
});

app.get('/', (req, res) => res.sendFile( `${__dirname}/client/build/index.html`));
app.get('/projects', (req, res) => res.send(projects));

const initialize = async() => {
    console.log('::: initializing')
}


initialize().then( () => {
    app.listen(port, () => console.log(`::: ${port}`))
})