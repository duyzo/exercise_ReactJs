import { atom } from "recoil";

const LoginAtom = atom({
    key:'LoginAtom',
    default: {
        username: '',
        loginStatus: false
    }
})

export default LoginAtom;