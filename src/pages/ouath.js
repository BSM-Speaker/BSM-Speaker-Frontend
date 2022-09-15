import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
function Oauth() {
    const location = useLocation();
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    useEffect(() => {
        console.log(query);
    }, [ location ])
    return (
        <>
        fd
        </>
    )
}

export default Oauth;