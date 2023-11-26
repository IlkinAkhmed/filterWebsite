import React, { useState } from 'react'
import "./index.css"
import Filter from '../Filter'
import Cards from '../Cards'
import useFetch from '../../Hooks/UseFetch'

function Shop() {
    const { data ,SortByName,SortByPrice } = useFetch('http://localhost:3000/product')
    const [category, setCategory] = useState('All')
    const [brand, setBrand] = useState('All')
    const [size, setSize] = useState('All')
    const [color, setColor] = useState('All')


    function handleColorChange(productBrand, checkbox) {
        if (checkbox.checked) {
            setColor(productBrand)
        } else { setColor('All') }
    }

    function handleSizeChange(productBrand, checkbox) {
        if (checkbox.checked) {
            setSize(productBrand)
        } else { setSize('All') }
    }

    function handleBrandChange(productBrand, checkbox) {
        if (checkbox.checked) {
            setBrand(productBrand)
        } else { setBrand('All') }
    }


    function handleCategoryChange(productCategory, checkbox) {
        if (checkbox.checked) {
            setCategory(productCategory)
        } else { setCategory('All') }
    }



    return (
        <>
            <section>
                <div className="header">
                    <h1>Our Products</h1>
                    <p>Shopping</p>
                </div>
                <div className="container">
                    <div className="head-of-shop">
                        <div className="filters">
                            <p>Filters:</p>
                            <p>Clean All </p>
                        </div>
                        <div className="showing">
                            <p>Showing <span>9 of 56</span> Products</p>
                        </div>
                        <div className="sort">
                            <p>Sort By:</p>
                            <button onClick={SortByName} className='sortOptions'>Name</button>
                            <button onClick={SortByPrice} className='sortOptions'>Price</button>
                        </div>
                    </div>
                    <div className="products">
                        <Filter filterProducts={{ category, handleCategoryChange }} filterBrands={{ brand, handleBrandChange }} filterColor={{ color, handleColorChange }} filterSize={{ size, handleSizeChange }} />
                        <Cards filterProducts={{ category, handleCategoryChange }} filterBrands={{ brand, handleBrandChange }} filterColor={{ color, handleColorChange }} filterSize={{ size, handleSizeChange }} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop