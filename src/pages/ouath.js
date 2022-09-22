import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { useRecoilState } from 'recoil';
import { loginState } from '../state';
function Oauth() {
    const location = useLocation();
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const [login, setLogin] = useRecoilState(loginState);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(query.code);
        (
            async function() {
                await axios.post(`api/user/oauth/bsm?code=${query.code}`,{ withCredentials: true })
                .then((res) => {
                }).catch((err) => {
                    console.log(err)
                });
                await axios.get("api/user",{ withCredentials: true })
                .then((res)=> {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    setLogin({
                        "userCode":res.data.userCode,
                        "nickname":res.data.nickname
                    })
                }).catch(err=>{
                    console.log(err);
                })
            }
        )();
        navigate('/');
    }, [])
    return (
        <>
        </>
    )
}

export default Oauth;