import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { UserInfoContext } from "../../../App";
import { Navigate } from "react-router-dom";

function LoginButtonMain(){
    const [userToken,setUserToken] = useState("")
    const [loginState,setLoginState] = useState<boolean>(false)
    const [cookie,setCookie] = useCookies()
    const userInfoContext = useContext(UserInfoContext)
    useEffect(()=>{
        console.log(userToken)
        if (userToken){
            axios.get('https://www.googleapis.com/oauth2/v2/userinfo',{
                headers:{
                    Authorization: `Bearer ${userToken}`
                }
            }).then((res:any)=>{
                console.log(res.data)
                axios.post("http://localhost:5000/user/userdata/createuser",{
                    accesstoken:userToken
                }).then((res)=>{
                    console.log(res.data)
                    if (res.data.status === "newUser"){
                        //ユーザー認証
                        setCookie("email",res.data.data.mail)
                        setCookie("userId",res.data.data.userId)
                        setCookie("pass",res.data.data.pass)
                        setCookie("icon",res.data.data.picture)
                        setCookie("userName",res.data.data.userName)
                        userInfoContext?.setData({
                            userId:res.data.data.userId,
                            userName:res.data.data.userName,
                            pass:res.data.data.pass,
                            email:res.data.data.mail
                        })
                        setLoginState(true)
                    }else if (res.data.status === "already"){
                        console.log("hello")
                        setCookie("email",res.data.data.mail)
                        setCookie("userId",res.data.data.userId)
                        setCookie("pass",res.data.data.pass)
                        setCookie("icon",res.data.data.picture)
                        setCookie("userName",res.data.data.userName)
                        userInfoContext?.setData({
                            userId:res.data.data.userId,
                            userName:res.data.data.userName,
                            pass:res.data.data.pass,
                            email:res.data.data.email
                        })
                        setLoginState(true)
                    }
                }).catch((error)=>{console.log(error)})
            }).catch(()=>{})
        }
    },[userToken])
    const login = useGoogleLogin({
        onSuccess:(res)=>setUserToken(res.access_token),
    })
    return (
        <>
            <button onClick={()=>login()}>singin with google</button>
            {loginState?<Navigate replace to="/dashboard"/>:<></>}
        </>
    )
}

export default LoginButtonMain