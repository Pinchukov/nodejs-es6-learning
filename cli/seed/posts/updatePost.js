import Post from "#app/models/posts.js";

try{
	const post = await Post.findByPk(5); // ID
	console.log(post);

	const res = await post.update({ userId: '2' });
	console.log(res);
}
catch(e){
	console.log(e);
}