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

        case 'CHANGE_LOGIN_FIELD':
            return { ...state, [action.payload.key]: action.payload.value }

        default:
            return state;
    }
};

export default reducer;