const router = require('express').Router();

router.post('/test', (req, res) => {
    res.send({name: 'bao', sex: 'female'});
});

module.exports = router;
