import axios from "axios";
import { useState } from "react";
import styled, { StyledComponent } from "styled-components";

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
    height: 10%;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 70%;
`
const Submit = styled.div`
    margin-top: 20px;
    width: 50%;
    height: 50px;
    border-radius: 100px;
    text-align: center;
    border: solid black 4px;
`
function MakeGroup() {
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    return (
        <StyledSection>
            <h2>그룹생성</h2>
            그룹이름
            <InputBox type="text" onChange={(e)=>{setName(e.target.value)}}></InputBox>
            <br/>
            설명
            <InputBox type="text" onChange={(e)=>{setDes(e.target.value)}}></InputBox>
            <Submit onClick={()=>{
                axios.post('/api/group',
                {
                    "name": name,
                    "description": des
                })
                .catch(err=>{alert("그룹이름이 중복되었거나 올바르지 않습니다.")})
            }}>생성!</Submit>
        </StyledSection>
    )
}


export default MakeGroup;