import React , {Component}  from 'react';
import Aux from "../../hoc/Auxalary";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css'


class Layout extends Component{
    
    state = {
        showSideBar : false 
    }

    toggleEventHandler =()=>{

        this.setState((prevState , props)=>{
            return {
                showSideBar : !prevState.showSideBar
            }
        })
    }

    render(){
        let {children}= this.props
        return(
            <Aux>
                <button className="bg-green-500 text-bold fixed top-0 right-0 p-2 rounded-lg
                                    text-2xl hover:bg-green-300 phoneOnly open"
                        onClick={this.toggleEventHandler}                                      
                        >
                            <strong className="">-</strong>
                            <strong className="">-</strong>
                            <strong className="">-</strong>
                        </button>
                
                {
                    this.state.showSideBar && <SideDrawer />
                }
                <Toolbar />
                <main className="mt-20">
                    {children}
                </main>
            </Aux>
        )
    }
}
 
export default Layout;