import Post from "#app/models/posts.js";
import Roles from "#app/models/roles.js";
import Users from "#app/models/users.js";

export default async function home(_req, resp){
	const posts = await Post.findAll({
		limit: 5,
		order: [[ 'createdAt',  'DESC', ]],
		include: [ Roles, Users ] // Присовокупили таблицу Roles
	});

    //console.log(JSON.stringify(posts))

	//resp.end(JSON.stringify(posts, null, " "));
	resp.json(posts)
}	