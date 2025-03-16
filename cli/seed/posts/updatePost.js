import Post from "#app/models/posts.js";

try{
	const post = await Post.findByPk(2); // ID
	console.log(post);

	const res = await post.update({ roleId: '4' });
	console.log(res);
}
catch(e){
	console.log(e);
}