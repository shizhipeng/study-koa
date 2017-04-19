const router = require('koa-router')();
const userCtrl = require('../controllers/user');

router.post('/sign', userCtrl.sign);
router.del('/user',userCtrl.delete);

module.exports = router;