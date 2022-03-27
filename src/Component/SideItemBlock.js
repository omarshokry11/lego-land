import React, {useState} from "react";
import {Image} from "react-bootstrap";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import "./Style/SideItemBlock.scss";

function valuetext(value) {
    return `${value} $`;
}

export default function SideItemBlock() {

    const [value, setValue] = useState([200, 900]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const items = [
        {id: 1, className: "item theme", title: "Theme", img: "/icons/angle-up-solid.svg", themes: [{id: 1, name: "Space (44)", them: "space"},
                {id: 2, name: "Ninja (44)", them: "ninja"},
                {id: 3, name: "Transport (44)", them: "trans"},
                {id: 4, name: "Buildings (44)", them: "build"},
                {id: 5, name: "Homes (44)", them: "home"},
                {id: 6, name: "Space (44)", them: "check"}]},
        {id: 2, className: "item age", title: "Age", img: "/icons/angle-up-solid.svg", ages: [{id: 1, name: "Up to year", age: "year"},
                {id: 2, name: "1 year - 2 years", age: "2year"},
                {id: 3, name: "3 year - 5 years", age: "5year"},
                {id: 4, name: "6 year - 10 years", age: "10year"},
                {id: 5, name: "Old than 12 years", age: "old than"}]},
        {id: 3, className: "item brand", title: "Brand", img: "/icons/angle-down-solid.svg"},
        {id: 4, className: "item brand", title: "Characters", img: "/icons/angle-down-solid.svg"},
        {id: 5, className: "item brand", title: "Stock availability", img: "/icons/angle-down-solid.svg"},
    ]

    return(
        <div className="main-side-item-block-container">
            <div className="price">
                <h5>Price</h5>
                <span className="price-item">From: <strong>{value[0]}</strong> $</span>
                <span className="price-item">Up to: <strong>{value[1]}</strong> $</span>
                <Box sx={{ width: 250 }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        max= {1000}
                        min={100}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Box>
            </div>
            {items.map((item) => <div className={item.className} key={item.id}>
                <h5>{item.title} <Image src={item.img} /></h5>
                {item.themes ? <ul key={item.id}>
                    {item.themes.map((them) => <li key={them.id}>
                        <input id={them.them} className="check-box" type="checkbox" />
                        <label htmlFor={them.them}>{them.name}</label>
                    </li>)}
                </ul> : null}
                {item.ages ? <ul key={item.id}>
                    {item.ages.map((age) => <li key={age.id}>
                        <input id={age.age} className="check-box" type="checkbox" />
                        <label htmlFor={age.age}>{age.name}</label>
                    </li>)}
                </ul> : null}
            </div>)}
            <button>APPLY FILTER</button>
            <div className="delete">
                <Image src="/icons/trash-alt-regular.svg" />
            </div>
        </div>
    )
}