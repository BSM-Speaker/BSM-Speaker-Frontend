import styled from "styled-components";
import { Link } from "react-router-dom";
import { subscribe } from "../util/WebPush";

const StyledNav = styled.nav`
  width: 100%;
  height: 45px;
  border: solid 1px black;
`;
const StyledLi = styled(Link)`
  list-style-type: none;
  border: solid 1px black;
  height: 100%;
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 20px;
  &:hover {
    background-color: #fcf9f8;
    color: grey;
  }
`;
const StyledUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledSpan = styled.span`
  text-decoration: none;
  color: black;
  padding: 5px;
  font-size: 20px;
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
        <StyledLi to="/invite">그룹가입</StyledLi>
        <StyledLi to="/makegroup">그룹생성</StyledLi>
        <StyledLi
          onClick={() => {
            alert("완료!");
          }}
        >
          <StyledSpan onClick={subscribe}>알림 등록</StyledSpan>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
export default Nav;
