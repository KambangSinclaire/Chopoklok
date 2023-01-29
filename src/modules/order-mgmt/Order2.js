import React from "react";

import productImg from '../../assets/Images/product_02.1.jpg';

import { Link } from "react-router-dom";
const ProductCard = () => {
    return <div className="product_item">
<div className="product_img">
    <img src={productImg} alt="product_img"/>
</div>

<div className="product_content">
    <h5> <Link>Burger</Link></h5>
    <div>
        <span className="product_price">$24.00</span>
        <button>Add to cart</button>
    </div>
</div>
    </div>
}
