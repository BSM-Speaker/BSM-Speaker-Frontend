import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledNav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #D4F4FF;
`
const StyledLi = styled.li`
    list-style-type: none;
`
const StyledUl = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 8px;
    font-size: 25px;
    &:hover{
        border-radius: 100px;
        background-color: #7494B3;
        color: #D4F4FF;
    }
`
function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/InviteCode">
                    그룹가입</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/MakeGroup">
                        그룹생성</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
export default Nav;