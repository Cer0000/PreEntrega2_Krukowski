import CartWidget from "../CartWidget"

const NavBar = () => {
    return (
        <>
            <nav>
                <h1>Brand</h1>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default NavBar