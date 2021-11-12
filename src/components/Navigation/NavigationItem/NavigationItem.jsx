import React from 'react';

const NavigationItem = props => {

    return(
        <li className="flex h-full justify-center hover:bg-green-400 p-4 active:bg-red-500 ml-2">
            <a href={props.link}>{props.children}</a>
        </li>
    )
}

export default NavigationItem ;