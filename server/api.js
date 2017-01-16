const router = require('express').Router();

router.get('/data/index', (req, res) => {
    res.send({name: 'bao', sex: 'female'});
});

module.exports = router;
