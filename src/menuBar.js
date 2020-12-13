import React from 'react';
import './menuBar.css';

function MenuBar(props) {
    const menuItems = props.menuItems.map(item => {
        <li><a href={item.address}>{item.name}</a></li>
    });

    return(
        <ul>
            {menuItems}
        </ul>
    );
}

export default MenuBar