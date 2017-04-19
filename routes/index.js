const router = require('koa-router')();
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.init);

router.get('/index',indexCtrl.index);

module.exports = router;