import React from "react";
import {Image} from "react-bootstrap";
import SideItemBlock from "./SideItemBlock";

import "./Style/SidebarItem.scss";

export default function SidebarItem() {
    return(
        <div className="main-sidebar-item-container">
            <div className="logo">
                <div className="logo-img">
                    <span> </span>
                </div>
                <div className="logo-details">
                    <h4>LEGO LAND</h4>
                    <p>RED BRICK</p>
                </div>
            </div>
            <div className="name-page">
                <Image src="/icons/home-solid.svg" />
                <strong>Main Page ></strong>
                <span>Catalog</span>
            </div>
            <SideItemBlock />
        </div>
    )
}