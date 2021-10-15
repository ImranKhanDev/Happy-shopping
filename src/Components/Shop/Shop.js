import React from 'react';
import { useState,useEffect } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Shop = () => {
    // this state is for Product
    const[products,setProducts]=useState([])
    
    // this state is for Cart
    // cart e product rakhar state
    const [cart,setCart]=useState([])
    const handleAddProduct=(product)=> {
        const newCart=[...cart,product]
        console.log(newCart);
        setCart(newCart);
       }

 useEffect(()=>{
 fetch('/productsData.json')
 .then(res=> res.json())
 .then(data=> setProducts(data))
 },[])   
//jekanei state sekhanei event handler declare korbo



    return (
        <div>
            {/* <h2>This from SHOP JS</h2> */}
        <div className="row">
            <div className="col-md-9">
                
                {/* akhane products gulo boshbe */}
               <div className="row">
                   {
                    products.length>0 &&
                    products.map(product=><Products
                      key={product.key}
                      handleAddProduct={handleAddProduct}
                        product={product}
                       >

                       </Products>)
                   }
               {/* <Products></Products>            */}
               
               </div>         
           
            </div>
            <div className="col-md-3">
                {/* ekhane cart hobe */}

                <Cart
                cart={cart}>

                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;