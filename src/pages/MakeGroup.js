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
const SubmitBtn = styled.button`
    margin-top: 20px;
    width: 50%;
    height: 30px;
    border-radius: 100px;
`
function MakeGroup() {
    return (
        <StyledSection>
            <h2>그룹생성</h2>
            <StyledForm>
                그룹이름
                <InputBox type="text"></InputBox>
            <br/>
                설명
            <InputBox type="text"></InputBox>
            <SubmitBtn>전송</SubmitBtn>
            </StyledForm>
        </StyledSection>
    )
}


export default MakeGroup;