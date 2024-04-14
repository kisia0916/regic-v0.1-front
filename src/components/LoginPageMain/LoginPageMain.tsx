import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import LoginButtonMain from "./LoginButton/LoginButtonMain";

function LoginPageMain(){
    return(
        <GoogleOAuthProvider clientId="199921114218-f89uudjipama2ha02csjjgk8la86vji2.apps.googleusercontent.com">
            <LoginButtonMain/>
        </GoogleOAuthProvider>
    )
}

export default LoginPageMain