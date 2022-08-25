import styled from "styled-components";

const StyledNav = styled.nav`
    position: absolute;
    width: 100%;
    height: 40px;
    top: 80.66px;
    background: rgba(209, 209, 209, 0.14);
`
const StyledLi = styled.li`
    margin-top: 7px;
    list-style-type: none;
    font-family: 'Inter'
    font-style: normal;
    font-weight: 1000;
    font-size: 15px;
    line-height: 30px;
`
const StyledUl = styled.ul`
    position: absolute; 
    left: 10px;
    display: flex;
    gap: 10px;
`
function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    그룹가입
                </StyledLi>
                <StyledLi>
                    그룹생성
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
export default Nav;