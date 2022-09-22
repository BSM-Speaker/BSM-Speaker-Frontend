import styled from "styled-components"
import axios from 'axios'
import { useRecoilState } from "recoil";
import { loginState } from "../state";
function logout(setLogin) {
    axios.delete('/api/user/logout')
    .then(()=>{})
    .catch((err)=>console.log(err));
    localStorage.removeItem('user');
    setLogin(null);
}
const Contain = styled.div`
    position: absolute;
    width:300px;
    height:200px;
    top: 3px;
    right: 3px;
    border: 3px solid black;
    background-color: skyblue;
    border-radius: 20px;
`
const User_info = styled.div`
    margin: 10px;
`
const Btn_logout = styled.div`
    position: absolute;
    border-radius: 20px;
    right: 0px;
    bottom: 0px;
    text-align: center;
    width: 90px;
    height: 20px;
    background-color: white;
    border: solid 2px black;
`
export function Modal(props) {
    const [login, setLogin] = useRecoilState(loginState)
    return (
        <Contain onClick={()=>{props.setModal(false)}}>
            <User_info>
                nickname : {login.nickname}
            </User_info>
            <Btn_logout onClick={()=>{logout(setLogin)}}>logout</Btn_logout>
        </Contain>
    )
}