import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SortIcon from '@material-ui/icons/Sort';
import { connect } from 'react-redux';
import { setFilters } from './../Actions/filters';

function Header({setFilters}) {

    const [isHeaderMenuOpen, setHeaderMenu] = React.useState(null);

    return (
        <AppBar position="static" >
            <Toolbar className="d-flex justify-content-between">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon /> Grocery list
                </IconButton>

                <IconButton  color="inherit" aria-controls="header-menu" onClick={(e) => setHeaderMenu(e.currentTarget)}>
                     Sort <SortIcon />
                </IconButton>
                <Menu
                    id="header-menu"
                    anchorEl={isHeaderMenuOpen}
                    keepMounted
                    open={Boolean(isHeaderMenuOpen)}
                    onClose={() => setHeaderMenu(null)}
                >
                    <MenuItem onClick={(e) => setFilters(null)}>
                            
                    </MenuItem>
                    <MenuItem onClick={(e) => {setFilters(true); setHeaderMenu(null)} }>
                        <ArrowUpwardIcon />  availability
                    </MenuItem>
                    <MenuItem onClick={(e) => { setFilters(false); setHeaderMenu(null)} }>
                        <ArrowDownwardIcon /> availability
                    </MenuItem>
                </Menu>


            </Toolbar>
        </AppBar>
    )
}
const mapDispatchToProps = (dispatch) => ({
    setFilters: filters => dispatch(setFilters(filters))
})

export default connect(null, mapDispatchToProps)(Header)
