const initialAuthState = {
    registering: false,
    user: undefined,

    firstName: '',
    lastName: '',
    email: '',
    password: ''
};

const registerReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case 'REGISTER_PENDING':
            return { ...state, registering: true };
        case 'REGISTER_FULFILLED':
            return { ...state, registering: false, user: action.payload };

        default:
            return state;
    }
};

export default registerReducer;