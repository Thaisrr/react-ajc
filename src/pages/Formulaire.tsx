import {useForm} from "react-hook-form";
import type {UserType} from "../utils/types/UserType.ts";

const Formulaire = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<UserType>();

    const save = (user: UserType) => {
        console.log(user);
    }

    return (
        <>
            <h1>React Hook Form</h1>

            <form onSubmit={handleSubmit(save)}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input id='username' {...register('username', {required: true, minLength: 2})}/>
                    {errors?.username?.type === 'required' && <p>Le username est obligatoire</p>}
                    {errors?.username?.type === 'minLength' && <p>Le username est trop court</p>}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' {...register('email', {
                        required: 'Email obligatoire',
                        pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Format d'email invalide"}
                    })}/>
                    <p>{errors.email?.message}</p>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Formulaire;