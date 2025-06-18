import {NavLink, Outlet} from "react-router-dom";

const HooksIndex = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to=''>Les classes components</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default HooksIndex;