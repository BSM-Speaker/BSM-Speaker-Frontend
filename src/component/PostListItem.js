import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Contain = styled.div`
  cursor: pointer;
  margin: 20px;
  font-size: 2rem;
  text-align: center;
  border-radius: 5px;
  border: solid 1px black;
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
