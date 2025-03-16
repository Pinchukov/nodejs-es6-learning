import Role from "#app/models/roles.js";

try{
	const role = await Role.findByPk(1); // ID
	console.log(role);

	const res = await role.update({ name: 'God' });
	console.log(res);
}
catch(e){
	console.log(e);
}