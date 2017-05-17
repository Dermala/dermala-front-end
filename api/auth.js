import axios from 'axios';

export default {
    register(registrationData){
        return axios
            .post('https://dermala-api.herokuapp.com/api/register', registrationData) 
            .then(response => response.data);
    },
    
    login(email, password) {
        return axios
            .post('https://dermala-api.herokuapp.com/api/login', { email, password }) 
            .then(response => {
                AsyncStorage.setItem('authToken', response.data.token);
            return response.data.token;
        });
    },
    
    getUserPosts() {
        return axios
            .get('https://dermala-api.herokuapp.com/api/photo') 
            .then(response => response.data);
    },    
};
