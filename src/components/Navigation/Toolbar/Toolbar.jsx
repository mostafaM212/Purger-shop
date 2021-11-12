import  "./Toolbar.css" ;
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';



const Toolbar = props =>{
    
    return(
        <header className="fixed w-full h-16 top-0 left-0 bg-red-900  flex justify-between px-20 py-0
                           border-2 items-center text-xl font-bold italic opacity-75 
                           DesktopOnly

        " >
            <div className="">MENU</div>
            <div className=""><Logo/></div>
            <nav>
                <NavigationItems style="flex justify-between h-full" />
            </nav>
        </header>
    )
}

export default Toolbar ;