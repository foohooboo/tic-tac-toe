import React from 'react';
import Dropdown from './dropdown.js';
import './menuBar.css';

/**
 * @description Given a list of menuItems, builds and returns a horizontal nav 
 * @param {Array()} props Array of items to be displayed in a horizontal nav bar.
 * props item format: menuItems = {name: "someName", address: "URL", active: boolean, rightAlign: boolean, dropDown: boolean}.
 * active, rightAlign and dropDown are optional attributes
 */
function MenuBar(props) {
    const menuItems = props.menuItems.map(item => {
        if (item.rightAlign){
            var additionalStyles = {float: "right"};
        }
        
        if (item.dropdown){
            return (
                <li key={item.name}>
                    <Dropdown dropdownItems={item.dropdownItems} link={item.address} name={item.name}/>
                </li>
            );
        }
        else{
            return (
                <li 
                className={(item.active ? 'active' : null)}
                style={additionalStyles} 
                key={item.name}>
                <a href={item.address}>{item.name}</a></li>
            );
        }
    });

    return(
        <ul>
            {menuItems}
        </ul>
    );
}

export default MenuBar