import React, {useState} from "react";
import SidebarItem from "./Component/SidebarItem";
import ProductItem from "./Component/ProductItem";

export default function App() {

    const [click, setClick] = useState();

    return(
        <div className="main-app-container">
            <div className="dropdown-list" onClick={() => setClick(!click)}>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
            {click ? <div className="div-item"><SidebarItem /></div> : null}
            <div className="main-sidebar">
                <SidebarItem />
            </div>
            <div className="main-product">
                <ProductItem />
            </div>
        </div>
    )
}