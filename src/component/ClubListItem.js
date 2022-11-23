import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledClubListItem = styled.div`
  width: 100%;
  height: 71%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
const StyledLi = styled.li`
  width: 60px;
  height: 60px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  background-color: beige;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 0px 0px 5px white;
  }
  border: ${(props) => props.isSelected && "solid 2px black"};
`;
function ClubListItem(props) {
  const navigate = useNavigate();
  let clubname = props.name;
  clubname = clubname.length > 4 ? clubname.substring(0, 5) + "..." : clubname;
  return (
    <StyledLi
      onClick={() => {
        navigate(`/detail/${props.id}`);
        props.setCurGroup(props.id);
      }}
      isSelected={props.isSelected}
    >
      <StyledClubListItem>{clubname}</StyledClubListItem>
    </StyledLi>
  );
}
export default ClubListItem;
