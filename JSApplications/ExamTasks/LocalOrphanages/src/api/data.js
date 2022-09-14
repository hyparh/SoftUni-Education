import { del, get, post, put } from './api.js';

export async function getAllPosts() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}

export async function getPostById(id) {
    return get('/data/posts/' + id);
}

export async function createPost(listing) {
    return post('/data/posts', listing);
}

export async function editPostById(id, listing) {
    return put('/data/posts/' + id, listing);
}

export async function deletePostById(id) {
    return del('/data/posts/' + id);
}

export async function getMyPosts(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function donationPost(listingId) {
    return post('/data/donations', listingId);
}

export async function getTotalDonationCount(petId) {
    return get(`/data/donations?where=postId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function didUserDonation(listingId, userId) {
    return get(`/data/donations?where=postId%3D%22${listingId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}