import { USER_SIGN_OUT, USER_SIGN_IN } from "./AuthType";


export const userSignIn =(user)=>({
    payload: user,
    type: USER_SIGN_IN,
})
    


export const userSignOut =()=>({

    type: USER_SIGN_OUT,
})
    