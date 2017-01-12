const router = require('express').Router();

router.use('/data/index', (req, res) => {
    res.send({name: 'bao', sex: 'female'});
});

module.exports = router;
