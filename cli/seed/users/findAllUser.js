import User from "#app/models/users.js";

try{
	const user = await User.findAll({
		/* where: {cls
			id: 1
		} */
		order: [
			[ 'createdAt', 'ASC' ]
		]
	});
	console.log(user);
}
catch(e){
	console.log(e);
}