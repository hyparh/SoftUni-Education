import { del, get, post, put } from './api.js';

export async function getAllTheatres() {
    return get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function createTheatre(theatre) {
    return post('/data/theaters', theatre);
}

export async function getTheatreById(id) {
    return get('/data/theaters/' + id);
}

export async function editTheatre(id, theatre) {
    return put('/data/theaters/' + id, theatre);
}

export async function deleteTheatre(id) {
    return del('/data/theaters/' + id);
}

export async function getTheatresByUser(userId) {
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function likeTheatre(theatre) {
    return post('/data/likes', theatre);
}

export async function getTotalLikesCount(theaterId) {
    return post(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function didUserLike(theaterId, userId) {
    return post(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}