import React from 'react';


const BreadTop = props => {
    return (
            <div className=" flex justify-center mb-1">
                <div className="bg-yellow-700 w-1/2 xl:w-1/4 rounded-t-full h-16 flex justify-around items-center">
                        <div className="bg-white w-4 h-2 rounded-t-full shadow-lg"></div>
                        <div className="bg-white w-4 h-2 rounded-t-full"></div>
                        <div className="bg-white w-4 h-2 rounded-t-full"></div>
                </div>
            </div>
    )
}

export default BreadTop ;