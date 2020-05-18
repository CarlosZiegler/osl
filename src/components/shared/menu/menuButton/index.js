import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import btnMenu from '../../../../assets/MenuButton.svg'

import './style.css'


export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }



    return (

        <div>
            <Button color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <img src={btnMenu} alt="Open Menu" />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><a href="/#products" className="menu-item"> Produkte</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="/#services" className="menu-item">Leistungen</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="/#news" className="menu-item">Aktuelles</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="/#jobs" className="menu-item">Arbeiten bei OSL</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="/#team" className="menu-item">Unsere Team</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="/#contact" className="menu-item">Kontakt</a></MenuItem>
            </Menu>
        </div>
    );
}