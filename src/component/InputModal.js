import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;
const Contain = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 10%;
  width: 80%;
  height: 500px;
  background-color: #a3bad6;
`;
const Header = styled.div`
  width: 100%;
  height: 40px;
  text-align: right;
  line-height: 40px;
  padding: 0px 10px;
  font-size: 40px;
`;
const Btn_Write = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: #bbdeeb;
`;
const InputForm = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 4px;
`;
const InputDes = styled.textarea`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 80%;
  font-size: 1.5rem;
`;
const Input_title = styled.input`
  font-size: 3.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  height: 15%;
`;
export default function InputModal(props) {
  const [title, setTitle] = useState("제목을 입력해주세요!");
  const [des, setDes] = useState("내용을 입력해주세요!");
  const { id } = useParams();
  return (
    <Background>
      <Contain>
        <Header>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.setInputModal(false);
            }}
          >
            X
          </div>
        </Header>
        <InputForm>
          <Input_title
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <InputDes
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
          />
        </InputForm>
        <Btn_Write>
          {() => {
            axios
              .post("/api/post", {
                title: title,
                content: des,
                groupId: id,
              })
              .then(() => {
                props.setRe(!props.re);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          글쓰기
        </Btn_Write>
      </Contain>
    </Background>
  );
}
