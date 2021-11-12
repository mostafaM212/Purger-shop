import React from 'react';
//components
import propTypes from 'prop-types' ;
import Cheese from './Ingredients/Cheese';
import BreadTop from './Ingredients/BreadTop';
import BreadBottom from './Ingredients/BreadBottom';
import Meat from './Ingredients/Meat';
import Bacon from './Ingredients/Bacon';
import Salad from './Ingredients/Salad';

const BurgerIngredient = props =>{

    let ingredient = null ;
    
    switch(props.type){
        case('bread-bottom'):
            ingredient  =   <BreadBottom /> ;
            break ;
        case('bread-top'):    
            ingredient  =  <BreadTop /> ;
            break ;
        case('meat'):
            ingredient  =   <Meat /> ;
            break  ;
        case('cheese'):
            ingredient  =  <Cheese /> ;
            break  ;
        case('bacon'):
            ingredient  =  <Bacon /> ;
            break  ;
        case('salad'):
            ingredient  =   <Salad /> ;
            break  ;
        default :
             ingredient = null ;
            
    }
    
    return (ingredient) ;
} 
BurgerIngredient.propTypes = {

    type : propTypes.string.isRequired
}

export default BurgerIngredient ;