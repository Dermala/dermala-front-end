import axios from 'axios';

export default {
    async getAllPhotos() {
        return AsyncStorage
            .getItem('authToken')
            .then(token => axios
                .get('https://dermala-api.herokuapp.com/api/photo', {
                    headers: {
                        'Authorization': `JWT ${token}`
                    }
                })
            )
            .then(response => {
                console.log('Did it work?', response.data);
                return response.data;
            });
    },

    async addPhoto(photo) {
        return AsyncStorage
            .getItem('authToken')
            .then(token => {
                console.log('Hey look...', token);
                return axios
                .post('https://dermala-api.herokuapp.com/api/photo', {
                    headers: {
                        'Authorization': `JWT ${token}`
                    }
                }, photo)
            })
            .then(response => {
                console.log('Did it work?', response.data);
                return response.data;
            });
    },

    updatePhoto(photo) {
        return axios
            .put(`https://dermala-api.herokuapp.com/api/photo/${post._id}`, {
                headers: {
                    'Authorization': `JWT ${AsyncStorage.getItem('authToken')}`
                }
            }, photo);
    },

    deletePhoto(photo) {
        return axios
            .delete(`https://dermala-api.herokuapp.com/api/photo/${post._id}`, {
                headers: {
                    'Authorization': `JWT ${AsyncStorage.getItem('authToken')}`
                }
            });
    }
    
};