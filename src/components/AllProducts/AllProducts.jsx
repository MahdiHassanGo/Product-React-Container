import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";


const AllProducts = () => {
    const [products,setProducts] =useState([]);


useEffect(()=>{
    fetch('./coffees.json')
    .then(res => res.json())
    .then(data => setProducts(data.products))
})

    return (
        <div>
            <h2>All products</h2>
            {products.map((p)=> <SingleProduct key={p.id} product={p}></SingleProduct>)}
        </div>
    );
};

export default AllProducts;