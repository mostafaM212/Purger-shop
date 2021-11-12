import React from 'react';


const BuildControl = props => {

    return(
        <div className="flex justify-center p-2">
            <div className="font-bold text-xl">{props.label}</div>
            <button className="bg-yellow-500 mx-4 text-2xl w-12 hover:bg-green-200"
                    onClick={()=>props.removeIngredient(props.type)}
                    disabled={props.disabledInfo}
            >-</button>
            <button className="bg-yellow-500 mx-4 text-2xl w-12 hover:bg-green-200"
                    onClick={()=>props.addIngredient(props.type)}
            >+</button>
        </div>
    )
}

export default BuildControl ;