import styled from "styled-components";
const StyledHeader = styled.header `
    position: absolute;
    width: 100%;
    height: 80.66px;
    background: #D9D9D9;
`
const Logo = styled.div `
    box-sizing: border-box;
    position: absolute;
    width: 60px;
    height: 28px;
    left: 30.28px;
    top: 27px;
    background: url(./image/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const Btn_login = styled.div`
    position: absolute;
    width: 45.3px;
    height: 22.38px;
    right: 20px;
    top: 30.85px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 39px;
    display: flex;
    align-items: center;
    letter-spacing: -0.017em;
    color: #000000;
`
function Header() {
    return (
        <StyledHeader>
            <Logo/>
            <Btn_login>로그인</Btn_login>
        </StyledHeader>
    )
}

export default Header;