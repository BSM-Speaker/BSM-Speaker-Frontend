import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledNav = styled.nav`
    width: 100%;
    height: 45px;
    border-bottom: 3px solid black;
`
const StyledLi = styled.li`
    list-style-type: none;
`
const StyledUl = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 5px;
    font-size: 25px;
    border: 2px solid white;
    &:hover{
        border-radius: 100px;
        border: 2px solid grey;
        color: grey;
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