import React from 'react';
import './menuBar.css';

function MenuBar(props) {
    const menuItems = props.menuItems.map((item, address) = () => {
        <li><a href={address}>{item}</a></li>
    });
    return(
            <ul>
                {menuItems}
            </ul>
    );
}

export default MenuBar