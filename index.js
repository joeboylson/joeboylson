const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// CLIENT
app.use( express.static(`${__dirname}/client/build`) );
app.use( express.static(`${__dirname}/public`) );

app.get('/*', (req, res) => res.sendFile( `${__dirname}/client/build/index.html`));


// DOWNLOADABLE FILES
app.listen(port, () => console.log(`::: ${port}`))