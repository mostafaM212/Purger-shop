import React from 'react';

const Model = props => {

    return  props.buying ? (
        <div className=" absolute  right-10 w-full bottom-10 flex justify-center opacity-75">  
        <div className="border-2  bg-yellow-200 w-64 h-64 flex flex-col items-center">
             <p className="text-xl italic">total price : {props.totalPrice}$</p>
             <p className="text-xl italic">Have an delecious burger </p>
             <p className="text-xl italic ">Enjoy Eating </p>
             <button onClick={props.buyNow} 
                     className="text-4xl bg-green-500 p-8 mt-4 rounded-lg hover:bg-green-200 "
             >Buy Now</button>
           
        </div>
    </div>
       ) : null ;
}


export default Model ;