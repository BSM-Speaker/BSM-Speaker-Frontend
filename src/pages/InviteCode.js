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
    height: 100%;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 70%;
`
const SubmitBtn = styled.button`
    margin-top: 20px;
    width: 50%;
    height: 30px;
    border-radius: 100px;
`
function InviteCode() {
    return (
        <StyledSection>
            <h2>초대코드 입력</h2>
            <StyledForm>
            <InputBox type="text"></InputBox>
            <br/>
            <SubmitBtn>전송</SubmitBtn>
            </StyledForm>
        </StyledSection>
    )
}


export default InviteCode;