const initialState = {
    filter : null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER_PRODUCTS':
            return { ...state, filter: [action.payload] };
        
        default:
            return state;
    }
}


