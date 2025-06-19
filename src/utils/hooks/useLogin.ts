import type {UserType} from "../types/UserType.ts";
import {login, logout} from "../services/AuthService.ts";
import {useAlert} from "./useAlert.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "./useStore.ts";
import {setUser, unsetUser} from "../../store/UserSlice.ts";

export const useLogin = () => {

    const createAlerte = useAlert();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loginFunc = async (user: Pick<UserType, 'email' | 'password'>) => {
        try {
            const token = await login(user);
            createAlerte({text: 'Welcome Back !', level: 'success'});
            dispatch(setUser(token as string));
            navigate('/');
        } catch (error) {
            const e = error as Error;
            createAlerte({text: e?.message, level: 'error'});
        }
    }

    const logoutFunc = () => {
        logout();
        dispatch(unsetUser());
        navigate('/login');
    }

    return {login: loginFunc, logout: logoutFunc};
}