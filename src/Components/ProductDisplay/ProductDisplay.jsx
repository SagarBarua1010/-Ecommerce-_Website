import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart}= useContext(ShopContext);
    return (
        <div className='productdisplay'>
          <div className="Productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            </div>
            <div className="Productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-price-description">
                Single jersey is a common type of knitted fabric used in the production of t-shirts, tops, and 
                other lightweight garments. It is a knitted fabric that is made using a single set of needles on 
                a circular knitting machine.
                </div>
                <div className="productdisplay-right-sizes">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><samp>Category :</samp>Women ,T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><samp>Tags :</samp>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;