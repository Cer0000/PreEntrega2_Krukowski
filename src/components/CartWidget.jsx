import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: 6px;
  }
`;

const CartWidget = () => {
    return (
      <Link to="/cart">
        <IconButton>
            <ShoppingCartIcon className='Cart' fontSize="large" />
            <CartBadge badgeContent={1} color="primary" overlap="circular" />
        </IconButton>
      </Link>
    )
}

export default CartWidget