import React from 'react';


const PurchasePage = props => {

    let {orders , totalPrice}= props
    

    let orderList = Object.keys(orders).map((type , index)=>{
                        return orders[type] >0 ? (
                            <ul className="font-bold italic flex justify-center" key={index}>
                                
                                <li className="">
                                    <p className="capitalize">{type} : 
                                        <span className="pl-2">{orders[type]}</span>
                                    </p>
                                </li>
                            
                            <p className="pl-2"></p>
                        </ul>
                        ) : null
                    })
    return(
        <div className="flex flex-col justify-center mt-32 bg-yellow-700 p-8">
            <p className="text-xl flex justify-center">Your order is </p>
            <p className="font-bold italic flex justify-center ">total price : <span className="pl-2">{totalPrice} $</span></p>
            <p className="italic text-lg flex justify-center capitalize">A delicious burger with following ingredients :</p>
            {
                orderList
            }
            <div className="flex justify-center">
                <button className="bg-pink-700 hover:bg-red-400 font-bold px-10 py-4 text-lg rounded-lg"
                        onClick={props.backEvent}
                >Back</button>
                <button className="bg-green-700 ml-4 hover:bg-red-400 font-bold px-10 py-4 text-lg rounded-lg"
                        onClick={props.buyNow}
                >Buy Now</button>
            </div>
        </div>
    )
}

export default React.memo(PurchasePage);