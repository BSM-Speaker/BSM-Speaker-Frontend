import styled from "styled-components"

const StyledClubListItem = styled.div `
    width: 50px;
    height: 50px;
    left: 37.85px;
    top: 182.13px;
    background: #BA2828;
`
const StyledLi = styled.li`
    text-align: center;
    margin-top: 30px;
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