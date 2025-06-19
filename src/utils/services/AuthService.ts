import type {UserType} from "../types/UserType.ts";

const url = import.meta.env.VITE_API_URL;

export const login = async (user: Pick<UserType, 'email' | 'password'>) => {
   try {
       const response = await fetch(`${url}login`, {
           method: 'POST',
           body: JSON.stringify(user),
           headers: {
               'x-api-key': 'reqres-free-v1',
               'Content-Type': 'application/json',
           }
       });
       if(!response.ok) {throw await response.text()}
       const {token} = await response.json() as {token: string};
       localStorage.setItem('token', token);
       return token;
   } catch (e) {
       return e;
   }
}

export const logout = () => localStorage.removeItem('token');

export const isLogged = () => !!localStorage.getItem('token');

export const getToken = () => localStorage.getItem('token');