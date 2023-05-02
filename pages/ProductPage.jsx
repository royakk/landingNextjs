import React from 'react'
import  product from '../styles/detaileProduct.module.css';
import {ProductData} from '../src/Data/detailProduct.data';
import Zoom from '../src/components/detailProduct/zoom';
const DetailProducts = () => {
  return (
    <div  className="container">
		<div>
			<div>
				<div className={product.main} >
					<div className="col-md-8">
						
						<Zoom/>
					</div>
					<div className="details col-md-8">
						<h3 className="product-title">men's shoes fashion</h3>
						
						<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						{ProductData.map((item) => (
						<h4 className="price">current price: <span>{item.price}</span></h4>
						))}
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							
						</h5>
						<h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default DetailProducts
