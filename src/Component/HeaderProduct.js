import React from "react";
import {Image} from "react-bootstrap";

import "./Style/HeaderProduct.scss";

export default function HeaderProduct() {

    const header = [
        {id: 1, item: [{id: 1, title: "Toys", small: "HOT", class: "span-1"}, {id: 2, title: "Catalog", img: "/icons/server-solid.svg"}]},
        {id: 2, item: [{id: 1, title: "Characters"}, {id: 2, title: "Brand"}]},
        {id: 3, item: [{id: 1, title: "ENG", icon: "/icons/angle-down-solid.svg", img: "/icons/globe-solid.svg"}, {id: 2, title: "Alexander", img: "/icons/user-regular.svg"}]},
    ]

    return(
        <div className="main-header-product-container">
            <div className="main-header">
                {header.map((head) => <div className="header-item" key={head.id}>
                    {head.item.map((item) => <span className={item.class} key={item.id}>{item.img ? <Image className="img-icon" src={item.img} /> : null} {item.title}
                        {item.small ?  <small>HOT<span> </span></small> : <Image src={item.icon} />}</span>)
                    }
                </div>)}
            </div>
            <div className="item-bar-container">
                <div className="item-bar">
                    <span className="icon"><Image src="/icons/random-solid.svg" /></span>
                    <span>Compare Products</span>
                    <span><Image src="/icons/long-arrow-alt-right-solid.svg" /></span>
                </div>
                <div className="item-bar">
                    <span className="icon"><Image src="/icons/heart-regular.svg" /></span>
                    <span>Wish List - Empty</span>
                    <span><Image src="/icons/long-arrow-alt-right-solid.svg" /></span>
                </div>
                <div className="item-bar">
                    <span className="icon"><Image src="/icons/shopping-cart-solid.svg" /></span>
                    <span>2 Products - $1000</span>
                    <span><Image src="/icons/long-arrow-alt-right-solid.svg" /></span>
                </div>
            </div>
        </div>
    )
}