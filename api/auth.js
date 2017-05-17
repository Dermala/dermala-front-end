import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default {
    register(registrationData){
        return axios
            .post('https://dermala-api.herokuapp.com/api/users/register', registrationData) 
            .then(response => response.data);
    },
    
    login(email, password) {
        return axios
            .post('https://dermala-api.herokuapp.com/api/users/login', { email, password }) 
            .then(response => {
                console.log('GOT TOKEN FROM LOGIN: ' + response.data.token);
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
