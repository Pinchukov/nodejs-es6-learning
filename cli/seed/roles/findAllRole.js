import Role from "#app/models/roles.js";

try{
	const role = await Role.findAll({
		/* where: {cls
			id: 1
		} */
		order: [
			[ 'createdAt', 'ASC' ]
		]
	});
	console.log(role);
}
catch(e){
	console.log(e);
}