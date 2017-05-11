import authApi from '../api/auth';

export function login(email, password) {
    return {
        type: 'LOGIN',
        payload: authApi.login(email, password)
    };
}

export function register(registration) {
    return {
        type: 'REGISTER',
        payload: authApi.register(registration)
    };
}


