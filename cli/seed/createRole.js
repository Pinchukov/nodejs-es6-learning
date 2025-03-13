import Role from "#app/models/roles.js";

try{
	const role = await Role.create({
		name: "User",
	});
	console.log(role);
}
catch(e){
	console.log(e);
}