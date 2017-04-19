const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const config = require('./config/sequelize')
const index = require('./routes/index');
const user =require('./routes/user');

app.use(bodyParser());
app.use(async (ctx, next)=>{
	console.log(`${ctx.request.method} ${ctx.request.url}`);
	await next();
});

app.use(async (ctx, next)=>{
	const start = new Date().getTime();
	await next();
	const ms = new Date().getTime() - start;
	console.log(`Time: ${ms}ms`);
});

router.use(index.routes());
router.use(user.routes())
app.use(router.routes())

app.listen(3000);
console.log('koa runs at 3000......')
