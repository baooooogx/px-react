const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// set views
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'src')));

app.use(require('./server/routes'));

app.listen('3000', (error) => {
    if (error) console.log(error);

    console.info('Express is listening on port 3000');
});
