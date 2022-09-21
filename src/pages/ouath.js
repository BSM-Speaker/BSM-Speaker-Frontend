import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
function Oauth() {
    const location = useLocation();
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const navigate = useNavigate();
    useEffect(() => {
        console.log(query.code);
        axios.post(`api/user/oauth/bsm?code=${query.code}`,{ withCredentials: true })
        .then((res) => {
        }).catch((err) => {
            console.log(err)
        });
        axios.get("api/user",{ withCredentials: true })
        .then((res)=> {
            localStorage.setItem('user', JSON.stringify(res.data));
        }).catch(err=>{
            console.log(err);
        })
        navigate('/');
    }, [ location ])
    return (
        <>
        </>
    )
}

export default Oauth;