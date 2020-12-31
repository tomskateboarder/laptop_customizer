import React, { Component } from 'react';
import CartContents from './CartContents';
import Items from './Items';
import Total from './Total';


class Cart extends Component {
    render() {
        
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartContents selected={this.props.selected}/>
                <Total selected={this.props.selected}/>
            </section>
            
        )
    }
}

export default Cart;