const initState = {
    loggingIn: false,
    email: '',
    password: ''
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return { ...state, loggingIn: true };
        case 'LOGIN_FULFILLED':
            return { ...state, loggingIn: false, token: action.payload };

        default:
            return state;
    }
};

export default reducer;