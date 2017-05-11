import axios from 'axios';

export default {
    register(registrationData){
        return axios
            .post('https://', registrationData) 
            .then(response => response.data);
    },
    
    login(email, password) {
        return axios
            .post('https://', { email, password }) 
            .then(response => response.data);
    },
    
    getUserPosts() {
        return axios
            .post('https://') 
            .then(response => response.data);
    },    
};
