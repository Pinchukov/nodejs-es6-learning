import Post from "#app/models/posts.js";

try{
	const post = await Post.create({
		title: "",
		shortText: ``,
		longText: ``,
		img: "#",
		//releId: "6"
	});
	console.log(post);
}
catch(e){
	console.log(e);
}