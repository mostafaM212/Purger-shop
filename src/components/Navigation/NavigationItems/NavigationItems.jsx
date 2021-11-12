import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';


const NavigationItems = (props)=>{

    return(
        <ul className={props.style}>
           <NavigationItem link="/">Link</NavigationItem>
           <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )

}

export default NavigationItems ;