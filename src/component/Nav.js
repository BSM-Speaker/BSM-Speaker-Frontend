import styled from "styled-components";
import { Link } from "react-router-dom";
import { subscribe } from "../util/WebPush";

const StyledNav = styled.nav`
  width: 100%;
  height: 45px;
  background-color: #bbdeeb;
`;
const StyledLi = styled.li`
  list-style-type: none;
`;
const StyledUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5px;
  font-size: 25px;
  &:hover {
    border-radius: 100px;
    color: grey;
  }
`;
const StyledSpan = styled.span`
  text-decoration: none;
  color: black;
  padding: 5px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    border-radius: 100px;
    color: grey;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/InviteCode">그룹가입</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/MakeGroup">그룹생성</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledSpan onClick={subscribe}>알림 등록</StyledSpan>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
export default Nav;
