import postApi from '../api/post';

export function getAllPosts() {
    return {
        type: "FETCH_POSTS",
        payload: postApi.getAllPosts()
    };
}

export function addPost() {
    return {
        type: "ADD_POST",
        payload: postApi.addPost(post)
    };
}

export function updatePost(post) {
    return {
        type: "UPDATE_POST",
        payload: postApi.updatePost(post)
    };
}

export function deletePost(post) {
    return {
        type: "DELETE_POST",
        payload: postApi.deletePost(post)
    };
}

export function addNotes
