import User from "#app/models/users.js";

try{
	const user = await User.findByPk(1);
	console.log(user);
}
catch(e){
	console.log(e);
}