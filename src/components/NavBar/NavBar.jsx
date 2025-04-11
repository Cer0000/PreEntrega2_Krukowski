import CartWidget from "../CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav>
                <Link to='/'>
                    <h1>Brand</h1>
                </Link>
                <ul>
                    <NavLink to='/category/electronics'>
                        <li>Electronics</li>
                    </NavLink>
                    <NavLink to='/category/jewelery'>
                        <li>Jewelery</li>
                    </NavLink>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </>
    )
}
export default NavBar