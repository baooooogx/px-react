const router = require('express').Router();

router.post('/data/test', (req, res) => {
    res.send({name: 'bao', sex: 'female'});
});

module.exports = router;
