const router = require('express').Router();

var tableData = require('../mockup/table');
var tableData1 = require('../mockup/table1');

router.post('/test', (req, res) => {
    var params = req.body;

    if (params.params === '1') {
        res.send(tableData);
    }
    else {
        res.send(tableData1);
    }

});

module.exports = router;
