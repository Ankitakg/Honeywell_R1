import React,{useState,useEffect} from 'react';
import SingleProduct from './SingleProduct';
import '../index.css';
import axios from "axios";


const Product = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });
          console.log({response});
       setProducts(response.data);
      };

    useEffect(() => {
        fetchProducts();
    }, [])


    return (
        <div>
          <div className="parent">
          {products.map((pro , id) =>(
              <SingleProduct product = {pro} key={id+1}/>
          ))}  
        </div>
       
       
        </div>
    )
}
export default Product;
