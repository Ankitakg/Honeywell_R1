import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import axios from "axios";


const ProductDetail = () => {

const [myproduct, setSingleProduct] = useState([])
    const {productId} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(json=>setSingleProduct({json}))
        
    }, [productId])

    //console.log(product);

    return (
        <div>
         <div className = "product_detail" key={myproduct.id} > 
        <img className = "imgCss" src ={myproduct.image} alt="img"/>
        <div className="title">{myproduct.title}</div>
        <div className="Category">Category -- {myproduct.category}</div>
            <div className="ratingbox">
                <span className="rating">Rating -- {myproduct.rating}</span>
                <span className="ratingCount">Total Reviews -- {myproduct.rating}</span>
            </div>   
        </div> 
        </div>
    )
}

export default ProductDetail;
