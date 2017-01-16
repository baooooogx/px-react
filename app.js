const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// set views
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'src')));

// 设置跨域访问，方便开发
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(require('./server/api'));

app.listen('3000', (error) => {
    if (error) console.log(error);

    console.info('Express is listening on port 3000');
});
