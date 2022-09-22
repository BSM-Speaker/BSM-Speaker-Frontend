import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostList from "../component/PostList";
import PostListItem from "../component/PostListItem";

export function Detail() {
    const [post, setPost] = useState([])
    const { id } = useParams();
    useEffect(()=>{
        const resData = []
        axios.get(`/api/post/${id}`)
        .then((res)=>{
            res.data.map((data)=>{
                alert(data)
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }) 
    return (
        <PostList>
            {
            post.map((data)=>{
                return <PostListItem data={data}/>
            })
            }
        </PostList>
    )
}