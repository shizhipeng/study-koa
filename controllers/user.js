var userModel = require('../models/user');
module.exports = {
	sign: async (ctx, next)=>{
		console.log(ctx);
		ctx.response.body = 
		`<h1>Hello, Welcome to Koa, ${ctx.request.body.name}</h1>`;
		//console.log(ctx.request.body, userModel);
		
		(async ()=>{
			var user = {
				name : ctx.request.body.name,
				passwd : ctx.request.body.passwd
			};
			var createdUser = await userModel.create(user);
			console.log('createdUser: ', createdUser.dataValues);
			var logs = await userModel.findAll();
			//console.log(logs)
			for(var i=0; i<logs.length;i++){
				console.log(logs[i].dataValues)
			}
		})();
	},

	delete: async (ctx, next)=>{
		(async ()=>{
			var id = ctx.request.query.id;
			//await userModel.destroy({where: {
			//	id:id
			//}});
			var res = {
				name: 'nimeia',
				uid:'aaaaaa'
			}
			ctx.response.body=res;
		})();
	},
};