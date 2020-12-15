import React from 'react';
import './dropdown.css';

/**
 * @description given a list of dropdownItems, a link, and a name, returns an on-hover dropdown navigation menu
 * @param {Array()} props array of objects to be displayed as a vertical, dropdown nav
 * props item format: dropdownItems = [{name: "title", link: "URL"}]; name = "dropdownTitle"; link = "optionalLinkForHead"
 */
function Dropdown(props){
    const dropdownItems = props.dropdownItems.map(item => {
        return(
            <li key={item.name}>
                <a href={item.link}>{item.name}</a>
            </li>
        );
    });
    
    return(
        <div className='dropdown'>
            <a href={props.link}>{props.name}</a>
            <div className='dropdown-content'>
                <ul>
                    {dropdownItems}   
                </ul>
            </div>
        </div>
    );
}

export default Dropdown