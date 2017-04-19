var init =  async (ctx, next)=>{
	console.log(ctx)
	ctx.response.body = 
	`<h1>Koa Application</h1>`;
	await next();
}
var index = async (ctx, next)=>{
	console.log(ctx)
	ctx.response.body = 
	`<h1>Index</h1>
	<form action='/sign' method='post'>
		<p>Name: <input name='name' value='koa'></p>
		<p>Passwd: <input name='passwd' type='password'></p>
		<p><input type='submit' value='Submit'></p>
	</form>`;
	await next();
}
module.exports = {
	init: init,
	index: index
}