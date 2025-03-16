import User from "#app/models/users.js";

try{
	const user = await User.findByPk(1); // ID
	console.log(user);

	const res = await user.update({ name: 'God' });
	console.log(res);
}
catch(e){
	console.log(e);
}