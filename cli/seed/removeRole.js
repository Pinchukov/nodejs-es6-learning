import Role from "#app/models/roles.js";

try{
	const role = await Role.findByPk(1);
	console.log(role);

	const res = await role.destroy();
	console.log(res);
}
catch(e){
	console.log(e);
}