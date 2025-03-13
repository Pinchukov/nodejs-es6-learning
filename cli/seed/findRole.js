import Role from "#app/models/roles.js";

try{
	const role = await Role.findByPk(1);
	console.log(role);
}
catch(e){
	console.log(e);
}