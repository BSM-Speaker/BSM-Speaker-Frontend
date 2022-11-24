import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import InputModal from "../component/InputModal";
import PostListItem from "../component/PostListItem";
const Btn_write = styled.button`
  border: 0px;
  border: solid black 2px;
  font-size: 20px;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  color: black;
  background-color: white;
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
const Btn_setting = styled.div`
  line-height: 50px;
  text-align: center;
  border: 0px;
  border: solid black 2px;
  font-size: 20px;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  a {
    color: black;
    text-decoration-line: none;
  }
`;
const Post = styled.div`
  overflow: auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fcf9f8;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 20px;
  border: solid grey 1px;
  border-radius: 10px;
`;
const Empty = styled.div`
  text-align: center;
  font-size: 80px;
`;
const Header = styled.div`
  display: flex;
  gap: 20px;
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
      <Header>
        <Btn_setting>
          <Link to={`/GroupSetting/${id}`}>그룹관리</Link>
        </Btn_setting>
        <Btn_write
          onClick={() => {
            setInputModal(true);
          }}
        >
          글쓰기
        </Btn_write>
      </Header>
      {Input_Modal && (
        <InputModal setInputModal={setInputModal} re={re} setRe={setRe} />
      )}
      <Post>
        {!post.length ? (
          <Empty>첫 알림을 보내세요!</Empty>
        ) : (
          post.map((data) => {
            return <PostListItem data={data} />;
          })
        )}
      </Post>
    </Contain>
  );
}
