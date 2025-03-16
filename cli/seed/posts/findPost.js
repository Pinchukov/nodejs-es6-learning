import Post from "#app/models/posts";

try{
	const post = await Post.findByPk(1);
	console.log(post);
}
catch(e){
	console.log(e);
}