const initState = {
    loadingPhoto: false,
}

const albumReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PHOTO_PENDING': 
            return { ...state, loadingPhoto: true};
        case 'FETCH_PHOTO_FULFILLED':
            return { ...state, loadingPhoto: false, photos: action.payload };

        default: 
            return state
    }
}

export default albumReducer;