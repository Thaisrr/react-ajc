import type {JSX} from "react";
import {isLogged} from "../services/AuthService.ts";
import {Navigate} from "react-router-dom";

const AuthGuard = ({children} : {children: JSX.Element}) => {
    if(isLogged()) return children;
    return <Navigate to='/login' replace />
}

export default AuthGuard;