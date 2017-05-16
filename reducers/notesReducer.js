const initState = {
    checked: false
};

const notesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHECKED':
            return { ...state, checked: true };
        case 'UNCHECKED':
            return { ...state, checked: false };
        
        default:
            return state;
    }
};

export default notesReducer;