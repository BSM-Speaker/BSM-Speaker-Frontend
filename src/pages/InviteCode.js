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
    width: 80%;
    height: 100px;
    font-size: 100px;
`
const Submit = styled.div`
    width: 50%;
    height: 50px;
    border-radius: 100px;
    text-align: center;
    border: solid black 4px;
    cursor: pointer;
`
function InviteCode() {
    const [code, setCode] = useState("");
    return (
        <Contain>
            <div style={{"font-size":"70px"}}>초대코드 입력</div>
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
        </Contain>
    )
}


export default InviteCode;