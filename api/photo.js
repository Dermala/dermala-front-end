import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default {
    getAllPhotos() {
        return AsyncStorage
            .getItem('authToken')
            .then(token => axios
                .get('https://dermala-api.herokuapp.com/api/photos', {
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

    addPhoto(photo) {
        return AsyncStorage
            .getItem('authToken')
            .then(token => {
                console.log('TOKEN WHEN ADDING PHOTO: ', token);
                return axios
                    .post('https://dermala-api.herokuapp.com/api/photos', photo, {
                        headers: {
                            'Authorization': 'JWT ' + token
                        }
                    })
            })
            .then(response => {
                console.log('Did it work?', response.data);
                return response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },

    updatePhoto(photo) {
        return axios
            .put(`https://dermala-api.herokuapp.com/api/photos/${post._id}`, {
                headers: {
                    'Authorization': `JWT ${AsyncStorage.getItem('authToken')}`
                }
            }, photo);
    },

    deletePhoto(photo) {
        return axios
            .delete(`https://dermala-api.herokuapp.com/api/photos/${post._id}`, {
                headers: {
                    'Authorization': `JWT ${AsyncStorage.getItem('authToken')}`
                }
            });
    }
    
};