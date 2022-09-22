import { useState } from "react";
import styled, { StyledComponent } from "styled-components";
import axios from "axios";
const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 100px);
    height: calc(100% - 80px);
    font-size: 2rem;
    margin-top: 80px;
`
const InputBox = styled.input`
    width: 80%;
    height: 100px;
    font-size: 100px;
`
const Submit = styled.div`
    margin-top: 20px;
    width: 50%;
    height: 50px;
    border-radius: 100px;
    text-align: center;
    border: solid black 4px;
`
function InviteCode() {
    const [code, setCode] = useState("");
    return (
        <StyledSection>
            <h2>초대코드 입력</h2>
            <InputBox type="text" onChange={(e)=>{setCode(e.target.value)}}></InputBox>
            <br/>
            <Submit onClick={()=>{
                axios.post('/api/group/join',{
                    "groupId": code
                })
                .then(()=>{
                    alert('가입이 완료되었습니다.')
                })
                .catch((err)=>{
                    alert('잘못된코드입니다.')
                })
            }}>전송</Submit>
        </StyledSection>
    )
}


export default InviteCode;