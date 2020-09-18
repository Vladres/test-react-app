import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox } from '@material-ui/core';
import { deleteProduct } from '../Actions/product';
import { connect } from 'react-redux';
import { editProduct } from './../Actions/product';

function Product({ product, deleteProduct,editProduct }) {

    const [checked,setChecked] = useState(product.availability)

    const handleChange = (event) => {
        setChecked(event.target.checked);
        editProduct({...product,availability : !checked})
    };

    return (
        <div className="product card w-100 mb-2">
            <div className="d-flex card-body ">
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <div className=" flex-grow-1 align-items-center">
                    <h5 className="card-title">Name : {product.name}</h5>
                    <p>Priority : {product.priority}</p>
                </div>
                <IconButton onClick={() => deleteProduct(product)} className="btn-delete" aria-label="delete" color="secondary">
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    deleteProduct: product => dispatch(deleteProduct(product)),
    editProduct: product => dispatch(editProduct(product))
})

export default connect(null, mapDispatchToProps)(Product)
