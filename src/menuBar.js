import React from 'react';
import './menuBar.css';

/**
 * 
 * @param {Array()} props Array of items to be displayed in a horizontal nav bar.
 * props item format: {name: "someName", address: "someLink", rightAlign: boolean, dropDown: boolean}.
 * rightAlign and dropDown are optional attributes
 */
function MenuBar(props) {
    const menuItems = props.menuItems.map(item => {
        if (item.rightAlign){
            var additionalStyles = {float: "right"};
        }
        
        return (<li style={additionalStyles} key={item.name}><a href={item.address}>{item.name}</a></li>);
    });

    return(
        <ul>
            {menuItems}
        </ul>
    );
}

export default MenuBar