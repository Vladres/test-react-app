const initialState = {
    products: JSON.parse(localStorage.getItem('products'))
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            localStorage.setItem('products', JSON.stringify(state.products))
            return { ...state, products: [action.payload] };
        case 'ADD_PRODUCT':
            localStorage.setItem('products', JSON.stringify([...state.products, action.payload]))
            return { ...state, products: [...state.products, action.payload] };
        case 'DELETE_PRODUCT':
            localStorage.setItem('products', JSON.stringify(state.products.filter(item => item.id !== action.payload.id)))
            return { ...state, products: state.products.filter(item => item.id !== action.payload.id) };
        case 'EDIT_PRODUCT':
            localStorage.setItem('products', JSON.stringify(state.products.map(x => (x.id === action.payload.id) ? action.payload : x)))
            return { ...state, products: state.products.map(x => (x.id === action.payload.id) ? action.payload : x)};
        default:
            return state;
    }
}


