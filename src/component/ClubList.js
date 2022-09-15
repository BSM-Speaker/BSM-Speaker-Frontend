import styled from "styled-components";
import ClubListItem from "./ClubListItem";
const clublist = [
    {
        id: 1,
        name: "club1",
    },
    {
        id: 2,
        name: "club2",
    },
]
const StyledClubList = styled.div`
    width: 100px;
    height: 100%;
    background: #7486AE;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`
const StyledUl = styled.ul `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    list-style:none;
    
`
function Clublist() {
    return (
        <StyledClubList>
            <StyledUl>
                    {
                        clublist.map((club,_)=>{
                            return <ClubListItem name={club.name} id={club.id}/>
                        })
                    } 
            </StyledUl>
        </StyledClubList>
    )
}

export default Clublist