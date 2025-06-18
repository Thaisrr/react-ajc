import type {ButtonHTMLAttributes, JSX} from "react";
import '../styles/MonSuperBouton.css';
export const Child1 = (props : {message: string}) => (
    <p>Message : {props.message}</p>
);

export type Child2Props = {title: string, author: string}
export const Child2 = ({title, author}: Child2Props) => {

    return (
        <>
            <article>
                <h3>{title}</h3>
                <p>-- By {author}</p>
            </article>
        </>
    )
}

export type Book = {title: string, author: string}
export type Child3Props = {book: Book }
export const Child3 = ({book} : Child3Props) => (
    <article>
        <h3>{book.title}</h3>
        <p>-- {book.author}</p>
    </article>
)

export type ButtonProp = {
    children: JSX.Element | string
    color?: 'default' | 'danger',
    level?: 'primary' | 'secondary' | 'tertiary',
} & ButtonHTMLAttributes<HTMLButtonElement>


export const MonSuperBouton = (
    {
        children,
        level = 'primary',
        color ='default',
        className,
        ...otherProps
    } : ButtonProp) => {
    return (
        <button className={`${level} ${color} ${className}`} {...otherProps}>{children}</button>
    )
}