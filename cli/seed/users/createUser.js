import User from "#app/models/users.js";

try{
	const user = await User.create({
		login: "user5",
		password: "111",
		fullName: "user5 user5 user5",
		avatar: "#",
		roleId: "4",
	});
	console.log(user);
}
catch(e){
	console.log(e);
}