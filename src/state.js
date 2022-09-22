import {
    RecoilRoot,
    atom,
    selector,
    userRecoilState,
    useRecoilValue,

} from "recoil"
export const loginState = atom({
    key: 'login',
    default: JSON.parse(localStorage.getItem('user'))
})
export const mgState = atom({
    key: 'mg',
    default: true
})