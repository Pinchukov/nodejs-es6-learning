import Post from "#app/models/posts.js";

try{
	const post = await Post.findByPk(1);
	console.log(role);

	const res = await post.destroy();
	console.log(res);
}
catch(e){
	console.log(e);
}