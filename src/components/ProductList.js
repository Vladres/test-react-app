import React from 'react'

import { connect } from 'react-redux'
import Product from './Product'

function ProductList({ products, filter }) {

    const sortedProducts = products.sort((a, b) => { return a.priority - b.priority });

    sortedProducts.sort((a, b) => {
        if (a.priority === b.priority) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        } else
            return 0;
    });

    console.log(filter);
    if (filter != null) {
        if (filter[0])
            sortedProducts.sort((a, b) => { return a.availability - b.availability });
        else
            sortedProducts.sort((a, b) => { return b.availability - a.availability });
    }

    return (
        <div className="w-100">
            {sortedProducts.map(value => {
                return <Product product={value} key={value.id} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state.products, filter: state.filters.filter }
}


export default connect(mapStateToProps, null)(ProductList)