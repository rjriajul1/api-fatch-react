export default function Post ({post}){
    console.log(post);
    return(
        <div className="border">
            <h3>Title: {post.title} </h3>
        </div>
    )
}