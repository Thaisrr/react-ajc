import {useLogin} from "../utils/hooks/useLogin.ts";
import {useForm} from "react-hook-form";
import type {UserType} from "../utils/types/UserType.ts";

const Login = () => {

    const {login} = useLogin();
    const {register, handleSubmit, formState: {errors}} = useForm<Pick<UserType, 'email' | 'password'>>();

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(login)}>
                <div>
                    <label>
                        Email :
                        <input {...register('email', {required: 'Veuillez entrer un email'})}/>
                    </label>
                    <small>{errors.email?.message}</small>
                </div>
                <div>
                    <label>
                        Password :
                        <input {...register('password', {required: 'Veuillez entrer votre mot de passe'})} />
                    </label>
                    <small>{errors.password?.message}</small>
                </div>
                <p>
                    <button>Login</button>
                </p>
            </form>
        </>
    )
}

export default Login;