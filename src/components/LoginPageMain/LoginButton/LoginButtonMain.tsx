import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useEffect, useState } from "react";

function LoginButtonMain(){
    const [userToken,setUserToken] = useState("")
    useEffect(()=>{
        console.log(userToken)
        if (userToken){
            axios.get('https://www.googleapis.com/oauth2/v2/userinfo',{
                headers:{
                    Authorization: `Bearer ${userToken}`
                }
            }).then((res:any)=>{
                console.log(res.data)
            }).catch(()=>{})
        }
    },[userToken])
    const login = useGoogleLogin({
        onSuccess:(res)=>setUserToken(res.access_token),
    })
    return (
        <button onClick={()=>login()}>singin with google</button>
    )
}

export default LoginButtonMain