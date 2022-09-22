import {
    RecoilRoot,
    atom,
    selector,
    userRecoilState,
    useRecoilValue,

} from "recoil"
export const loginState = atom({
    key: 'login',
    default: null,
})
