import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: 6px;
  }
`;



const NavBar = () => {
    return (
        <>
            <nav>
                <h1>Brand</h1>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li>
                        <IconButton>
                            <ShoppingCartIcon className='Cart' fontSize="large" />
                            <CartBadge badgeContent={1} color="primary" overlap="circular" />
                        </IconButton>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default NavBar