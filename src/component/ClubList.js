import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilState } from "recoil";
import styled from "styled-components";
import { loginState, mgState } from "../state";
import ClubListItem from "./ClubListItem";
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
    const [clublist, setClublist] = useState([]);
    const [login, localStorage] = useRecoilState(loginState);
    const [mg, setmg] = useRecoilState(mgState);
    useEffect(()=>{
        if(login != null) {
            const resData = [];
            axios.get('/api/group')
            .then((res)=>{
                res.data.map((data)=>{
                    resData.push(data)
                })
                setClublist(resData);
            })
        }
    }, [mg, login])
    
    return (
        <StyledClubList>
            {login == null ? 
                 '로그인을 해주세요'
                 :
                <StyledUl>
                {
                    clublist.map((club,idx)=>{
                        return <ClubListItem name={club.name} id={club.id} key={idx}/>
                    })
                } 
                </StyledUl>
            }
            
        </StyledClubList>
    )
}

export default Clublist