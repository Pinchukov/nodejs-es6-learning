import Users from "#app/models/users.js";

export default async function login(_req, resp) {

	const login = 'admin';

	const user = await Users.scope('auth').findOne({ where: { login } });

	//console.log("pass: ", user)
	//resp.end("pass: ", posts);

	resp.json(user)
}