import Post from "#app/models/posts";

try{
	const post = await Post.findAll({
		/* where: {cls
			id: 1
		} */
		order: [
			[ 'createdAt', 'ASC' ]
		]
	});
	console.log(post);
}
catch(e){
	console.log(e);
}