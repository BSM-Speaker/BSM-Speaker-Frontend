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
  left: 50%;
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
  background-color: red;
`;
export default function InputModal(props) {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
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
        <InputForm></InputForm>
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
