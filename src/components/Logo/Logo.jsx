import React from 'react';
import BurgerLogo from "../../assets/images/burger-logo.png";

const Logo = (props)=>{

    return(
        <div className="opacity-75 w-16 h-16 flex justify-center ">
            <img src={BurgerLogo} alt="" srcset="" className="m-2"/>
        </div>
    )
}

export default Logo ;