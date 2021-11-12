import React, { Component } from 'react';
import Aux from "../../hoc/Auxalary";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import PurchasePage from '../Burger/PurchasePage/PurchasePage';
import Model from '../UI/Model/Model';


const INGREDIENTS_PRICES =  {
    salad : 0.5 ,
    bacon : 0.7 ,
    cheese :0.4 ,
    meat : 1.3
}
class BurgerBuilder extends Component {
    state = { 
        ingredients : {
            salad : 0 ,
            bacon : 0 ,
            cheese :0 ,
            meat : 0
        },
        totalPrice : 0 ,
        purchasable : false ,
        buying : false 
     }
     /**
      * 
      */
     BackEventHandeler = ()=>{
        this.setState({
            purchasable : false
        })
     }
     OrderEventHandelr =()=>{
        this.setState({
            purchasable : true
        })
     }
     /**
      * 
      * @param {type} type 
      */
     addIngredientHandler = (type)=>{
        
        let {ingredients , totalPrice} = this.state ;
        ingredients[type]++;
        totalPrice += ingredients[type] * INGREDIENTS_PRICES[type] ;
        
        this.setState({ingredients , totalPrice})
     }
     /**
      * 
      */
     buyNowHandeler =()=>{
        
        alert('you will recieve your order in 5 minates thanks for buying from us')
        this.setState({
            ingredients : {
                salad : 0 ,
                bacon : 0 ,
                cheese :0 ,
                meat : 0
            },
            totalPrice : 0 ,
            purchasable : false ,
            buying : false
        })
     }
     enableBuyingHandeler = ()=>{
        
        this.setState({
            buying : true
        })
     }
     /**
      * 
      * @param {type} type 
      */
     removeIngredientHandler = (type)=>{
        let {ingredients , totalPrice} = this.state ;
        totalPrice -= ingredients[type] * INGREDIENTS_PRICES[type] ;
        if(ingredients[type] <=  0 && totalPrice <= 0   ){
            
            alert('Please add some Ingredients before removing it') ;
            
        }else{
            ingredients[type]--
            
            this.setState({ingredients , totalPrice})
        }
    }
    /**
     * 
     * @returns jsx
     */
    render() { 
        let {ingredients , totalPrice , purchasable , buying} = this.state ;

        let disabledInfo = {...this.state.ingredients };
        

        for (let key in disabledInfo) {
            
            disabledInfo[key] = disabledInfo[key] >= 0
        }
        
        return ( 
            <Aux>
                
                <Burger ingredients = {ingredients} />
                <Model  totalPrice = {totalPrice} buying={buying}
                        buyNow={this.buyNowHandeler}
                />
                {
                    !purchasable ? (
                         <div className="mt-32 static">
                                <div className="flex justify-center">
                                <p className="font-bold italic text-lg">total price : </p>
                                <p className="font-bold italic text-lg text-green-500 ml-2">{totalPrice}$</p>
                                </div>
                                <BuildControls addIngredient={this.addIngredientHandler}
                                                removeIngredient={this.removeIngredientHandler}
                                                disabledInfo = {disabledInfo}
                                                totalPrice={totalPrice}
                                                orderEvent={this.OrderEventHandelr}
                                />
                      </div>
                    ) :(
                        <PurchasePage orders={ingredients}
                                      totalPrice={totalPrice}
                                      backEvent={this.BackEventHandeler}
                                      buyNow = {this.enableBuyingHandeler}
                        />
                    )
                }
            </Aux>
         );
    }
}
 
export default BurgerBuilder;