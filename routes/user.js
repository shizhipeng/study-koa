const router = require('koa-router')();
const userCtrl = require('../controllers/user');

router.post('/sign', userCtrl.sign);

module.exports = router;