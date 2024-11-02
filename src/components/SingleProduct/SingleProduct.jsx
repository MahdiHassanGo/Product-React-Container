import './SingleProduct.css'
const SingleProduct = ({product}) => {
    const {id,name,image,price,category} =product;
    return (
        <div className='card'>
           <img className='img' src={image} alt="" />
       <h2>{name}</h2>
       <p>{category}</p>
       <div className='price'>
        <p>$ {product.price}</p>
        <button onClick={()=>handleSelectedProduct(product)}>Add to Cart</button>
        
       </div>
        </div>
    );
};

export default SingleProduct;