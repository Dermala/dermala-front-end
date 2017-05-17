import postApi from '../api/photo';

export function getAllPhotos() {
    return {
        type: "FETCH_PHOTO",
        payload: postApi.getAllPhotos()
    };
}

export function addPhoto() {
    return {
        type: "ADD_PHOTO",
        payload: postApi.addPhoto(photo)
    };
}

export function updatePhoto(photo) {
    return {
        type: "UPDATE_PHOTO",
        payload: postApi.updatePhoto(photo)
    };
}

export function deletePhoto(photo) {
    return {
        type: "DELETE_PHOTO",
        payload: postApi.deletePost(photo)
    };
}
