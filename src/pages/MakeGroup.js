import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled, { StyledComponent } from "styled-components";
import { mgState } from "../state";
const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0px;
  justify-content: space-around;
  width: calc(100% - 100px);
  height: 100%;
  font-size: 2rem;
`;
const DesInputBox = styled.textarea`
  width: 80%;
  height: 350px;
  font-size: 23px;
  border-radius: 20px;
  padding: 5px;
  resize: none;
`;
const NameInputBox = styled.input`
  width: 80%;
  height: 60px;
  font-size: 23px;
  border-radius: 20px;
  padding: 5px;
`;
const Submit = styled.div`
  margin-top: 20px;
  width: 50%;
  border-radius: 100px;
  text-align: center;
  line-height: 50px;
  border: solid black 2px;
  cursor: pointer;
`;
function MakeGroup() {
  const [name, setName] = useState("그룹이름을 입력해주세요");
  const [des, setDes] = useState(
    "그룹설명을 입력해주세요 \n ex)목적, 규칙 등등"
  );
  const [mg, setmg] = useRecoilState(mgState);
  return (
    <Contain>
      <div style={{ "font-size": "60px" }}>그룹생성</div>
      <NameInputBox
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      ></NameInputBox>
      <br />
      <DesInputBox
        onChange={(e) => {
          setDes(e.target.value);
        }}
        value={des}
      ></DesInputBox>
      <Submit
        onClick={() => {
          axios
            .post("/api/group", {
              name: name,
              description: des,
            })
            .then(() => {
              setmg(!mg);
            })
            .catch((err) => {
              alert("그룹이름이 중복되었거나 올바르지 않습니다.");
            });
        }}
      >
        생성
      </Submit>
    </Contain>
  );
}

export default MakeGroup;
