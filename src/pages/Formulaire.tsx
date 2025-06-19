import {useForm} from "react-hook-form";
import type {UserType} from "../utils/types/UserType.ts";

const Formulaire = () => {

    const {register, handleSubmit, formState: {errors}, watch, getValues} = useForm<UserType>();

    const watchPassword = watch('password');

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
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' {...register('password', {
                        validate: (value: string) => (value === 'password') || 'Le mot de passe doit être password'
                    })}/>
                    <p>{errors.password?.message}</p>
                    {watchPassword === 'password' && <p>Bravo ! </p>}
                </div>
                <div>
                    <label htmlFor='validatePassword'>Validate Password</label>
                    <input type='password' id='validatePassword' {...register('validatePassword', {
                        validate: (value: string) => (value === watchPassword) || 'Ne correspond pas au mot de passe.'
                    })} />
                    <p>{errors.validatePassword?.message}</p>
                </div>
                <div>
                    <label htmlFor='title' {...register('title')}>Titre</label>
                    <select id='title'>
                        <option value="empress">Impératrice</option>
                        <option value="jedi">Jedi</option>
                    </select>
                </div>
                <fieldset>
                    <legend>Animal préféré</legend>

                    <div>
                        <label>Requin Marteau
                            <input type='radio' value='shark' {...register('favoriteAnimal')}/>
                        </label>
                        <label>Mante Religieuse
                            <input type='radio' value='mantis' {...register('favoriteAnimal')}/>
                        </label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Film préféré</legend>

                    <div>
                        <label htmlFor='movieTitle'>Titre</label>
                        <input id='movieTitle' {...register('favoriteMovie.title', {
                            validate: (value: string) => {
                                if(getValues("favoriteMovie.synopsis") && !value) {
                                    return "Doit être renseigné si il y a un synopsis !"
                                }
                                return true
                            }
                        })}/>
                        <p>{errors.favoriteMovie?.title?.message}</p>
                    </div>
                    <div>
                        <label htmlFor='synopsis'>Synopsis</label>
                        <textarea id='synopsis' {...register('favoriteMovie.synopsis')}></textarea>
                    </div>
                </fieldset>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Formulaire;