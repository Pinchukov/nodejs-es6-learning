import Post from "#app/models/posts.js";
import Roles from "#app/models/roles.js";

export default async function contacts(_req, resp){
	const posts = await Post.findAll({
		limit: 2,
		order: [[ 'createdAt',  'DESC', ]],
		include: [ Roles, ], // Присовокупили таблицу Roles
		//exclude: [], // ??
	});

    //console.log(JSON.stringify(posts))

	//resp.end(JSON.stringify(posts, null, " "));
	resp.json(posts)
}	