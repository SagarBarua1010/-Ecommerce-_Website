import React from 'react';
import './DescriptionBox.css';
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>The fabric is stretchable and has good recovery, 
                    meaning it can stretch and then regain its original shape. 
                    It is comfortable to wear due to its softness and flexibility. 
                    Single jersey fabric also has a tendency to curl at the edges, 
                    especially when cut, which is why it is often used with finished 
                    hems or bound edges to prevent curling.</p>
                    <p>Furthermore, jersey fabric can be made from various fibers, including cotton, 
                        polyester, viscose, or blends of these fibers. The choice of fiber affects the 
                        characteristics of the fabric, 
                        such as its drape, texture, and moisture-wicking properties.</p>

            </div>
        </div>
    );
};

export default DescriptionBox;