import {NavLink, Outlet} from "react-router-dom";

const HooksIndex = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to=''>Les classes components</NavLink>
                    </li>
                    <li>
                        <NavLink to='use-effect'>UseEffect</NavLink>
                    </li>
                    <li>
                        <NavLink to='memo'>Memo</NavLink>
                    </li>
                    <li>
                        <NavLink to='custom'>Custom</NavLink>
                    </li>
                    <li>
                        <NavLink to='reducer'>Reducer</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default HooksIndex;