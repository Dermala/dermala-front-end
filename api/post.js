import axios from 'axios';

export default {
    async getAllPosts(){
        return axios
            .get('https://')
            .then(response => response.data);
    },

    addPost(post) {
        return axios
            .get('https://')
            .then(response => response.data);
    },

    updatePost(post) {
        return axios
            .get('https://')
            .then(response => response.data);
    },

    deletePost(post) {
        return axios
            .delete('https://');
    }
    
};