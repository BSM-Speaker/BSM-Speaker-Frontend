import styled from "styled-components"

const StyledClubListItem = styled.div `
    width: 100%;
    height: 71%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const StyledLi = styled.li`
    width: 60px;
    height: 60px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    background-color: greenyellow;
    border-radius: 50%;
`
function ClubListItem(props) {
    return(
        <StyledLi>
            <StyledClubListItem>
                {props.name}
            </StyledClubListItem>
        </StyledLi>
    )
}
export default ClubListItem