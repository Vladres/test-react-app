import React from 'react'

import { connect } from 'react-redux'
import Product from './Product'

function ProductList({ products }) {
    return (
        <div className="w-100">
            {products.map(value => {
                return <Product product={value} key={value.id} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.products
}


export default connect(mapStateToProps, null)(ProductList)