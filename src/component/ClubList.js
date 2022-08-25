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
    position: absolute;
    width: 100px;
    height: calc(100% - 130.65px);
    left: 0px;
    top: 121.01px;
    background: #D9D9D9;
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