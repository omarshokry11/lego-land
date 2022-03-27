import React from "react";
import {Image} from "react-bootstrap";

import "./Style/ProductItemBlock.scss";

export default function ProductItemBlock() {

    const productItems = [
        {id: 1, img: "/product/product-2.jpg", code: "10521", name: "Big blue lego jeep collection <<Brutal>>", price: "400 $", priceMark: "600 $"},
        {id: 2, img: "/product/product-3.jpg", code: "10521", name: "Big blue lego jeep collection <<Brutal>>", price: "400 $", priceMark: "600 $"},
        {id: 3, img: "/product/product-1.jpg", code: "10521", name: "Big blue lego jeep collection <<Brutal>>", price: "400 $", priceMark: "600 $"},
    ]

    return(
        <div className="main-product-item-block-container">
            <div className="container-fluid">
                <div className="row">
                    {productItems.map((item) => <div className="col-md-4 col-12" key={item.id}>
                        <div className="product-item">
                            <div className="product-img">
                                <div className="icon-heart">
                                    <Image src="/icons/heart-regular.svg" />
                                </div>
                                <Image src={item.img} />
                            </div>
                            <div className="product-details">
                                <p>Vendor code: {item.code}</p>
                                <h6>{item.name}</h6>
                                <h5>
                                    <p>Price: </p>
                                    <strong>{item.price}</strong>
                                    <small><strike>{item.priceMark}</strike></small>
                                    <div className="icon">
                                        <Image src="/icons/shopping-cart-solid.svg" />
                                    </div>
                                </h5>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}