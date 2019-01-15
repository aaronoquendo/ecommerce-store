import React, { Component } from 'react';
import '../../css/product.css';

class ProductPage extends Component {
  constructor(props){
    super(props)
    this.state = {price: 20}
  }
  render() {

    return (
      <div className="product-container container">
         <div className="row">
            <div className="product-images-wrapper col-xs-12 col-sm-7 col-md-7 col-lg-7 .col-xl-7">
               <div className="product-images">

                  <img
                     className="main-img" src="https://cdn.karmaloopassets.com/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/d/3/d3bf8e8fff414325c43fb02ad1cabbb4.jpg"/>
                  <div className="other-images">
                     <img src="https://cdn.karmaloopassets.com/media/catalog/product/cache/thumbnail/88x110/beff4985b56e3afdbeabfc89641a4582/a/a/aabd633d5b85697ef0db62520566bf77.jpg"/>
                     <img src="https://cdn.karmaloopassets.com/media/catalog/product/cache/thumbnail/88x110/beff4985b56e3afdbeabfc89641a4582/7/4/74e806b71c5fc1c433c04b1c48fabe6e.jpg"/>
                  </div>
               </div>
            </div>
            <div className="product-information-wrapper col-xs-12 col-sm-7 col-md-5 col-lg-5 .col-xl-5">
               <div className="product-brand">
                  <a href="#">
                  <span>Alexander Wang</span>
                  </a>
               </div>
               <div className="product-title">
                  <h4>Basic Graphic Black Tee</h4>
               </div>
               <div className="product-price-sku">
                  <div className="product-price">$20</div>
                  <div className="product-sku">SKU#: SD1009__GREY</div>
               </div>
               <div className="colors-box-wrapper">
                 <span>Size</span>
                 <div className="colors">
                   <select>
                     <option value="small">White</option>
                     <option value="med">Black</option>
                     <option value="large">Red</option>
                     <option value="extralarge">Green</option>
                   </select>
                 </div>
               </div>
               <div className="sizes-box-wrapper">
                 <span>Size</span>
                 <div className="sizes">
                   <select>
                     <option value="small">S</option>
                     <option value="med">M</option>
                     <option value="large">L</option>
                     <option value="extralarge">XL</option>
                   </select>
                 </div>
               </div>
               <div class="fieldset">
                  <div class="field qty">
                     <label class="label" for="qty"><span>Quantity</span></label>
                     <div class="control">
                       <span class="qty-minus">-</span>
                       <input type="number" value="1s"/>
                       <span class="qty-plus">+
                     </span>
                   </div>
                  </div>
                  <div class="actions">
                    <button type="submit">
                      <span>Add to Cart</span>
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  }
}

export default ProductPage;
