import User from "#app/models/users.js";

try{
	const user = await User.findByPk(5); // ID
	console.log(user);

	const res = await user.update({ 
		fullName: 'Paul Thomas Mann',
	});
	console.log(res);
}
catch(e){
	console.log(e);
}