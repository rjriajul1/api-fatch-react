import { use } from "react"
import Post from './post'

export default function Posts ({posts}){
    const friendsPosts = use(posts);
    return(
        <div className="border">
            <p>Posts:{friendsPosts.length} </p>
            {
                friendsPosts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}