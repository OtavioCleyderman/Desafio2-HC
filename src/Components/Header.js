import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";
import './style.css'

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header-menu">
            <Button className="button-menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Acesse o Menu
            </Button>
            <Menu className="menu"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link on to="/" className="link active" onClick={handleClose}>Home</Link>
                <Link id="link-clients" on to="/clients" className="link" onClick={handleClose}>Clientes</Link>
                <Link id="link-products" to="/products" className="link" onClick={handleClose}>Produtos</Link>
            </Menu>
        </div>
    );
}