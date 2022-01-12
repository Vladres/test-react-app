import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';

import { Checkbox, Menu, MenuItem } from '@material-ui/core';
import { deleteProduct } from '../Actions/product';
import { connect } from 'react-redux';
import { editProduct } from './../Actions/product';
import EditProductDialog from './EditProductDialog';

function Product({ product, deleteProduct, editProduct }) {

    const [checked, setChecked] = useState(product.availability)
    const [isOpenMenu, setMenu] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const openMenu = (event) => {
        setMenu(event.currentTarget);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
        editProduct({ ...product, availability: !checked })
    };

    const closeEditDialog = newProduct => {
        setMenu(false);
        if (newProduct != null)
            editProduct({ ...newProduct, changed: [...product.changed, new Date().toString()] })

        setOpen(false)
    }

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
                    <p>Last changed in {product.changed[product.changed.length - 1]}</p>
                </div>

                <IconButton
                    aria-controls="simple-menu"
                    onClick={openMenu}
                    className="icon-btn"
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={isOpenMenu}
                    keepMounted
                    open={Boolean(isOpenMenu)}
                    onClose={() => setMenu(false)}
                >
                    <MenuItem onClick={() => setOpen(true)} >
                        <EditIcon /> Edit
                    </MenuItem>
                    <MenuItem onClick={() => deleteProduct(product)} className="icon-btn" aria-label="delete" color="secondary">
                        <DeleteIcon /> Delete
                    </MenuItem>
                </Menu>

                <EditProductDialog selectedValue={product}
                    open={open} onClose={(product) => closeEditDialog(product)} />
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    deleteProduct: product => dispatch(deleteProduct(product)),
    editProduct: product => dispatch(editProduct(product))
})

export default connect(null, mapDispatchToProps)(Product)
