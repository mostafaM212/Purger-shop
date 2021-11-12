import React from 'react';
import classes from "./Burger.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import propTypes from "prop-types";

const Burger = props => {
    let TransformedIngredients = Object.keys(props.ingredients).map(ingKey =>{
        return  [...Array( props.ingredients[ingKey])].map((_ , index)=>{
            return <BurgerIngredient type={ingKey} key={ingKey +index} />
        }) ;
    }).reduce((arr ,el )=>{
        
        return arr.concat(el)
    } , [])
    
    
    if(TransformedIngredients.length === 0){
        TransformedIngredients = <div className="flex justify-center">
            <p className="text-pink-500 text-xl font-bold italic">
            Please Choose some ingredients
        </p>
        </div>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {
                TransformedIngredients
            }
            <BurgerIngredient type="bread-bottom"/>

        </div>
    )
}
Burger.propTypes = {
    ingredients : propTypes.object.isRequired
}

export default React.memo(Burger) ;