import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledHeader = styled.header `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80.66px;
    background: #7494B3;
`
const Logo = styled.div `
    margin-left: 20px;
    box-sizing: border-box;
    width: 60px;
    height: 28px;
    left: 30.28px;
    top: 27px;
    background: url(./image/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const StyledLogin = styled.a`
    margin-right: 20px;
    text-decoration: none;
    font-size: 25px;
    color: black;
    padding: 8px;
    &:hover{
        border-radius: 100px;
        background-color: #D4F4FF;
        color: #7494B3;
    }
`

const UserMenu = styled.div`
    margin-right: 20px;
`
function Header() {
    const [a,b] = useState(localStorage.getItem('user'))
    return (
        <StyledHeader>
            <Link to={"/"}><Logo/></Link>
            {a == null ? <StyledLogin
                href="https://auth.bssm.kro.kr/oauth?clientId=66f68ad9&redirectURI=http://localhost:3000/oauth"
                >로그인</StyledLogin> : <UserMenu onClick={()=>{
                    localStorage.removeItem('user');
                    b(null);
                }}>
                    로그아웃    
                </UserMenu>}
        </StyledHeader>
    )
}

export default Header;