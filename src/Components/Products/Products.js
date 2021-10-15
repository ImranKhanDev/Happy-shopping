import React from 'react';
import './Products.css'
const Products = (props) => {
      const{name,img,category,price,stock}=props.product;
    // console.log(props.product);
    return (
        <div className="col-md-6 mb-4">
            
            <div class="cols-mb-3">
  <div class="col">
    <div class="card">
      <img src={img} class="card-img-top img-thumbnail w-75%" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{category}.</p>
        <h3 class="card-text"><b>price $ : {price}</b>.</h3>
        <h4>stock : {stock}</h4>
        <button 
        onClick={ ()=>props.handleAddProduct(props.product)}
        className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
 
</div>

        </div>
    );
};

export default Products;