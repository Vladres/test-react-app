import React from 'react'
import '../store/store'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { addProduct } from '../Actions/product';

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: '', products: this.props.products, priority: 1, availability: true };
        this.addProductEvent = this.addProductEvent.bind(this);
    }

    addProductEvent(e) {
        e.preventDefault();
        if (this.state.input) {
            this.props.addProduct({
                name: this.state.input,
                priority: this.state.priority,
                id: Date.now().toString(),
                availability: this.state.availability
            })
            this.setState({ input: '' })
        }
    }


    render() {
        return (
            <div className="d-flex w-100 mb-2 ">
                <form onSubmit={this.addProductEvent} className="d-flex flex-grow-1 align-items-center">
                    <input
                        className="d-flex align-items-center form-control mr-2 pb-8 add-input-text"
                        value={this.state.input}
                        onChange={(e) => this.setState({ input: e.target.value })}
                        placeholder="Product name..."
                        type="text"
                    />
                    <FormControl className="mr-2 select">
                        <InputLabel id="select-label">Priority</InputLabel>
                        <Select
                            labelId="select-label"
                            value={this.state.priority || 0}
                            onChange={(e) => this.setState({ priority: e.target.value })}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="mr-2 select">
                        <InputLabel id="select-label-availability">availability</InputLabel>
                        <Select
                            labelId="select-label-availability"
                            value={this.state.availability}
                            onChange={(e) => this.setState({ availability: e.target.value })}
                        >
                            <MenuItem value={false}>ran out</MenuItem>
                            <MenuItem value={true}>have</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={this.addProductEvent}
                        startIcon={<SaveIcon />}>
                        Add
                </Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.products
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: product => dispatch(addProduct(product))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)