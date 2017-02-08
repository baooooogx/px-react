const router = require('express').Router();

router.post('/test', (req, res) => {
	let params = req.body;
	console.log(params);

    res.send([
    	{key: 'bao', value: 'female', others: '什么'},
    	{key: 'a', value: '1', others: '随便吧'},
    	{key: 'bb', value: '22', others: '哦哦好的'},
    	{key: 'ccc', value: '333', others: '(⊙o⊙)嗯'}
    ]);
});

module.exports = router;
