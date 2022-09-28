import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components";
import PostListItem from "../component/PostListItem";
const Btn_write = styled.button`
    border: 0px;
    background-color: skyblue;
    font-size: 20px;
    width: 150px;
    height: 50px;
    border-radius: 10px;
`
const Contain = styled.div`
    padding: 10px;
    width: calc(100% - 100px);
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
`

const Post = styled.div`
    overflow: auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`
export function Detail() {
    const [post, setPost] = useState([])
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [re, setRe] = useState(false);
    const { id } = useParams();
    useEffect(()=>{
        const resData = []
        axios.get(`/api/post/${id}`)
        .then((res)=>{
            res.data.map((data, idx)=>{
                resData.push(data)
            })
            setPost(resData)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[re, id])
    return (
        <Contain>
        <Btn_write onClick={()=>{
            axios.post('/api/post', {
                "title": title,
                "content": des,
                "groupId": id
            })
            .then(()=>{setRe(!re)})
            .catch(err=>{console.log(err)})
        }}>글쓰기</Btn_write>
        제목
        <input onChange={(e)=>{setTitle(e.target.value)}}></input>
        내용
        <input onChange={(e)=>{setDes(e.target.value)}}></input>
        <Post>
            {
            post.map((data)=>{
                return <PostListItem data={data}/>
            })
            }
        </Post>
        </Contain>
    )
}