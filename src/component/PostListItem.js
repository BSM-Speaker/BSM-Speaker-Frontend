import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Contain = styled.div`
  cursor: pointer;
  height: 50px;
  margin: 20px;
  font-size: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: beige;
  border: 2px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function PostListItem(props) {
  const [des, setDes] = useState(false);
  const content = (
    <>
      <div style={{ color: "blue" }}>{props.data.user.nickname}</div> :{" "}
      {props.data.content}
    </>
  );
  return (
    <Contain
      onClick={() => {
        setDes(!des);
      }}
    >
      {des ? content : props.data.title}
    </Contain>
  );
}

export default PostListItem;
