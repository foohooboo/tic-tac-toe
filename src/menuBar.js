import React from 'react';
import './menuBar.css';

function MenuBar(props) {
    // const menuItems = props.menuItems.map(item => {
    //     <li><a href={item.address}>{item.name}</a></li>
    // });

    const menuItems = () => (
        <div>
            <ul>
                {props.menuItems.map(item => <li key={name}><a href = {item.address}> {item.name} </a> </li>)}
            </ul>
        </div>
    );

    return(
            {menuItems}
    );
}

export default MenuBar