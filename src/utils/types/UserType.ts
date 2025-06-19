export type UserType = {
    username: string;
    email: string;
    password: string;
    validatePassword: string;
    title: string;
    favoriteAnimal: string;
    favoriteMovie: MovieType;
}

type MovieType = {
    title: string;
    synopsis: string;
}