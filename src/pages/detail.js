import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import InputModal from "../component/InputModal";
import PostListItem from "../component/PostListItem";
const Btn_write = styled.button`
  border: 0px;
  background-color: grey;
  font-size: 20px;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color: black;
  cursor: pointer;
`;
const Contain = styled.div`
  padding: 10px;
  width: calc(100% - 100px);
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  overflow: auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 20px;
  border: solid grey 3px;
  border-radius: 20px;
`;
const Empty = styled.div`
  text-align: center;
  font-size: 100px;
`;
export function Detail() {
  const [post, setPost] = useState([]);
  const [re, setRe] = useState(false);
  const { id } = useParams();
  const [Input_Modal, setInputModal] = useState(false);
  useEffect(() => {
    const resData = [];
    axios
      .get(`/api/post?groupId=${id}&limit=10`)
      .then((res) => {
        res.data.map((data, idx) => {
          resData.push(data);
        });
        setPost(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [re, id]);
  return (
    <Contain>
      <Btn_write
        onClick={() => {
          setInputModal(true);
        }}
      >
        글쓰기
      </Btn_write>
      {Input_Modal && (
        <InputModal setInputModal={setInputModal} re={re} setRe={setRe} />
      )}
      <Post>
        {!post.length ? (
          <Empty>글을 써주세요~!</Empty>
        ) : (
          post.map((data) => {
            return <PostListItem data={data} />;
          })
        )}
      </Post>
    </Contain>
  );
}
