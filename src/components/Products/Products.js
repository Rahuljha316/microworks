import React from "react";
import typewriter from '../../assets/main/typewriter.svg'

const productArray = [
    {
        image: typewriter,
        description: "Vintage Typewriter to post awesome stories about UI design and webdev.",
        price: '$49.50',
        shippingDetails: "Eligible for Shipping To Mars or somewhere else",
        rating: 1,

    },
]

const Products = () => {
    
    return(
        <div className="main">
            {productArray.map((product)=> 
            <div>
                <img src={product.image} />
                <div>{product.description}</div>
                <div>{product.price}</div>
                <div>{product.shippingDetails}</div>
                <div>{product.rating}</div>
                
            </div> 
            
            )}
        
        </div>

    )
}

export default Products;