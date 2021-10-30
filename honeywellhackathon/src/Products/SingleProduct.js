import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

 const SingleProduct = ({product}) => {


    return (  
        <Link to={`/product/${product.id}`} >
        <div className = "product_detail" key={product.id} > 
        <img className = "imgCss" src = {product.image} alt="img"/>
        <div className="title">{product.title}</div>
        <div className="Category">Category -- {product.category}</div>
            <div className="ratingbox">
                <span className="rating">Rating -- {product.rating.rate}</span>
                <span className="ratingCount">Total Reviews -- {product.rating.count}</span>
            </div>   
        </div>
        </Link>  
    )
}

export default SingleProduct;