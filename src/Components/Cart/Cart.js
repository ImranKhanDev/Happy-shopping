import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{cart}=props ||{}

// reduce method
const totalReducer =(prevValue,currentValue)=>prevValue+currentValue.price;
const total = cart.reduce(totalReducer,0).toFixed(2)
const tax = (0.1*total).toFixed(2);
const totalPrice = parseFloat(total+tax).toFixed(2);

 console.log(total);
    return (
        <div>
            {/* <h3>THIS hello from Cart</h3>
             */}
             <h2><i class="fas fa-cart-plus fa-1x"> Cart :  {cart.length}</i></h2>
            <h2>Price : {total}</h2>
            <h2>Tax : {tax}</h2>
            <h3>Total price : {totalPrice}</h3>

   <ul>
       {
           cart.map(product=> <li>{product.name}</li>
           )
       }
   </ul>
        </div>
    );
};

export default Cart;