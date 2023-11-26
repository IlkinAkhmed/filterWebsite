import React, { useState } from 'react'
import "./index.css"
import { Slider } from "@mui/material"

const Filter = ({ filterProducts, filterBrands, filterColor, filterSize }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [sizeOpen, setsizeOpen] = useState(false)
    const [brandOpen, setBrandOpen] = useState(false)
    const [colourOpen, setColourOpen] = useState(false)
    const { category, handleCategoryChange } = filterProducts;
    const { brand, handleBrandChange } = filterBrands;
    const { color, handleColorChange } = filterColor;
    const { size, handleSizeChange } = filterSize;

    const [sliderValue, setSliderValue] = useState(50);


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    function OpenCategory() {
        setCategoryOpen(!categoryOpen)
        setsizeOpen(false)
        setBrandOpen(false)
        setColourOpen(false)
    }
    function OpenSize() {
        setCategoryOpen(false)
        setsizeOpen(!sizeOpen)
        setBrandOpen(false)
        setColourOpen(false)
    }
    function OpenBrand() {
        setCategoryOpen(false)
        setsizeOpen(false)
        setColourOpen(false)
        setBrandOpen(!brandOpen)
    }
    function OpenColour() {
        setCategoryOpen(false)
        setsizeOpen(false)
        setColourOpen(!colourOpen)
        setBrandOpen(false)
    }

    const handleChange = (newValue) => {
        setSliderValue(newValue);
    };
    return (
        <>
            <div className="filter-part">
                <ul >
                    <li className='categories' ><p onClick={OpenCategory}>Category</p><i className={`fa-solid ${categoryOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        <ul className={`category-types ${categoryOpen ? 'open-category' : ''}`}>
                            <li > <input type="checkbox" onChange={(e) => handleCategoryChange('Dresses', e.target)} /> Dresses </li>
                            <li > <input type="checkbox" onChange={(e) => handleCategoryChange('T-Shirts', e.target)} /> T-shirts  </li>
                            <li > <input type="checkbox" onChange={(e) => handleCategoryChange('Bags', e.target)} /> Bags  </li>
                            <li > <input type="checkbox" onChange={(e) => handleCategoryChange('Jackets', e.target)} /> Jackets  </li>
                            <li > <input type="checkbox" onChange={(e) => handleCategoryChange('Shoes', e.target)} /> Shoes  </li>
                            <li > <input type="checkbox" onChange={(e) => handleCategoryChange('Jeans', e.target)} /> Jeans  </li>
                        </ul>
                    </li>
                    <li className='categories' ><p onClick={OpenSize}>Size</p><i className={`fa-solid ${sizeOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        <ul className={`category-types ${sizeOpen ? 'open-category' : ''}`}>
                            <li > <input type="checkbox" onChange={(e) => handleSizeChange('XS', e.target)}  /> XS </li>
                            <li > <input type="checkbox" onChange={(e) => handleSizeChange('S', e.target)}  /> S  </li>
                            <li > <input type="checkbox" onChange={(e) => handleSizeChange('M', e.target)}  /> M  </li>
                            <li > <input type="checkbox" onChange={(e) => handleSizeChange('L', e.target)}  /> L  </li>
                            <li > <input type="checkbox" onChange={(e) => handleSizeChange('XL', e.target)}  /> XL  </li>
                            <li > <input type="checkbox" onChange={(e) => handleSizeChange('XXL', e.target)}  /> XXL  </li>
                        </ul>
                    </li>
                    <li className='categories' ><p onClick={OpenColour}>Colour</p><i className={`fa-solid ${colourOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        <ul className={`category-types ${colourOpen ? 'open-category' : ''}`}>
                            <input className="color-checkbox red" type="checkbox" onChange={(e) => handleColorChange('Red', e.target)} />
                            <input className="color-checkbox brown" type="checkbox" onChange={(e) => handleColorChange('Brown', e.target)} />
                            <input className="color-checkbox beige" type="checkbox" onChange={(e) => handleColorChange('Beige', e.target)} />
                            <input className="color-checkbox yellow" type="checkbox" onChange={(e) => handleColorChange('Yellow', e.target)} />
                            <input className="color-checkbox khaki" type="checkbox" onChange={(e) => handleColorChange('Khaki', e.target)} />
                            <input className="color-checkbox blue" type="checkbox" onChange={(e) => handleColorChange('Blue', e.target)} />
                            <input className="color-checkbox orange" type="checkbox" onChange={(e) => handleColorChange('Orange', e.target)} />
                            <input className="color-checkbox black" type="checkbox" onChange={(e) => handleColorChange('Black', e.target)} />
                        </ul>
                    </li>
                    <li className='categories brand' ><p onClick={OpenBrand}>Brand</p><i className={`fa-solid ${brandOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        <ul className={`category-types ${brandOpen ? 'open-category' : ''}`}>
                            <li > <input type="checkbox" onChange={(e) => handleBrandChange('River Island', e.target)} /> River Island </li>
                            <li > <input type="checkbox" onChange={(e) => handleBrandChange('Geox', e.target)} /> Geox  </li>
                            <li > <input type="checkbox" onChange={(e) => handleBrandChange('New Balance', e.target)} /> New Balance  </li>
                            <li > <input type="checkbox" onChange={(e) => handleBrandChange('UGG', e.target)} /> UGG  </li>
                            <li > <input type="checkbox" onChange={(e) => handleBrandChange('F&F', e.target)} /> F&F  </li>
                            <li > <input type="checkbox" onChange={(e) => handleBrandChange('Nike', e.target)} /> Nike  </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Filter