import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat ', type : 'meat'},

];

const BuildControls = props => {

    return(
            <div className="mt-4 bg-yellow-600 p-3 flex flex-col justify-center">
                {controls.map((ctrl , index) => {
                return (
                    <BuildControl label={ctrl.label} type={ctrl.type} key={index}
                                    addIngredient={props.addIngredient}
                                    removeIngredient={props.removeIngredient}
                                    disabledInfo = {props.disabledInfo[ctrl]}
                    />
                )
            })}
            <button className="p-2 text-white rounded-lg bg-pink-700 hover:bg-pink-400"
                    disabled={props.totalPrice <= 0}
                    onClick={props.orderEvent}
            >Order Now </button>
            </div>
    )
}


export default React.memo(BuildControls) ;