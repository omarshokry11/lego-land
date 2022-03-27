import React from "react";
import {Image} from "react-bootstrap";
import HeaderProduct from "./HeaderProduct";
import ProductItemBlock from "./ProductItemBlock";

import "./Style/ProductItem.scss";

export default function ProductItem() {
    return(
        <div className="main-product-item-container">
            <HeaderProduct />
            <div className="main-product-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2>Catalog</h2>
                        </div>
                        <div className="col-md-7 col-12">
                           <div className="search">
                               <span className="img"><Image src="/icons/search-solid.svg" /></span>
                               <input type="text" placeholder="Search among 100+ products" />
                           </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="select-item">
                                <span className="img"><Image src="/icons/bars-solid.svg" /></span>
                                <p>Popular</p>
                                <span className="arrow"><Image src="/icons/angle-down-solid.svg" /></span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="filter-item">
                                <span>Transport <Image src="/icons/times-solid.svg" /></span>
                                <span>Older than 12 years <Image src="/icons/times-solid.svg" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductItemBlock />
            </div>
            <div className="page-number">
                <button className="prev">Previous</button>
                <span><small>01</small></span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
                <button>Next</button>
            </div>
        </div>
    )
}