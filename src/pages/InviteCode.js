import { useState } from "react";
import styled, { StyledComponent } from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
const Contain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 0px;
    justify-content: space-around;
    width: calc(100% - 100px);
    height: 100%;
    font-size: 2rem;
`
const InputBox = styled.input`
    width: 70%;
    height: 100px;
    border-radius: 30px;
    border: solid black 1px;
    font-size: 90px;
`
const Submit = styled.div`
    width: 20%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: solid black 2px;
    line-height: 50px;
    cursor: pointer;
`
const Form = styled.div`
    margin: 20px;
    display: inline-flex;
    justify-content: center;
    border: solid black 2px;
`
function InviteCode() {
    const [code, setCode] = useState("");
    return (
        <Contain>
            <div style={{"font-size":"60px"}}>초대코드 입력</div>
            <Form>
            <InputBox type="text" onChange={(e)=>{setCode(e.target.value)}}></InputBox>
            <br/>
            <Submit onClick={()=>{
                axios.post('/api/group/join',{
                    "groupId": code
                })
                .then(()=>{
                    alert('가입이 완료되었습니다. ')
                })
                .catch((err)=>{
                    alert('잘못된코드입니다.')
                })
            }}>전송</Submit>
            </Form>
        </Contain>
    )
}


export default InviteCode;