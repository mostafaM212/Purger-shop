import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {

    return(
        <div 
            className="fixed h-full left-0  top-0  bg-white lg:hidden
                         py-8  px-8 flex flex-col justify-between">
            <div className="mt-12">
                 <Logo className="w-1/4"/>
            </div>
            <div className="h-1/2 flex flex-col  justify-around mb-4 ">
                  <NavigationItems style=" text-xl" />
            </div>
        </div>
    )

} 

export default SideDrawer ;