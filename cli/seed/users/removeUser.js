import User from "#app/models/users.js";

try{
	const user = await User.findByPk(1);
	console.log(user);

	const res = await user.destroy();
	console.log(res);
}
catch(e){
	console.log(e);
}