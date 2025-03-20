import User from "#app/models/users.js";

try{
	const user = await User.create({
		login: "admin",
		password: "111",
		fullName: "admin admin admin",
		avatar: "#",
		roleId: "2",
	});
	console.log(user);
}
catch(e){
	console.log(e);
}