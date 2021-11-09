import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    console.log(posts)
    const addpost = posts.map(post=>{
        return <Article key ={post.id} title={post.title} preview={post.preview} date={post.date}/>
   })
return(
    <main>
        {addpost}
    </main>
)
}

export default  ArticleList 