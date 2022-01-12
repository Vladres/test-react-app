import React ,{useState} from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogContent, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function EditProductDialog({ onClose, selectedValue, open }) {

    const [name, setName] = useState(selectedValue.name)
    const [priority, setPriority] = useState(selectedValue.priority)
    const [availability, setAvailability] = useState(selectedValue.availability)

    const closeDialog = () => {
        const result = {...selectedValue , availability,priority,name}
        onClose(result)
    }

    return (
        <Dialog onClose={() => onClose(selectedValue)}
            aria-labelledby="simple-dialog-title" open={open}
            className="edit-dialog m-5"
        >
            <DialogTitle id="simple-dialog-title">
                {selectedValue.name}
            </DialogTitle>
            <DialogContent>
                <form onSubmit={closeDialog} className="d-flex flex-grow-1 align-items-center">
                    <input
                        className=" form-control mr-2 pb-8"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Product name..."
                        type="text"
                    />
                    <FormControl className="mr-2 select">
                        <InputLabel id="select-label">Priority</InputLabel>
                        <Select
                            labelId="select-label"
                            value={priority || 1}
                            onChange={(e) => setPriority(e.target.value )}
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
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                        >
                            <MenuItem value={false}>ran out</MenuItem>
                            <MenuItem value={true}>have</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose(null)} color="primary">
                    Close
                </Button>
                <Button onClick={closeDialog} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditProductDialog
