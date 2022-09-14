import { del, get, post, put } from './api.js';

export async function getAllPets() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function createPet(pet) {
    return post('/data/pets', pet);
}

export async function petDetails(id) {
    return get('/data/pets/' + id);
}

export async function editPet(id, pet) {
    return put('/data/pets/' + id, pet);
}

export async function deletePet(id) {
    return del('/data/pets/' + id);
}

export async function donationForPet() {
    return post('/data/donation');
}

export async function getTotalDonationCount(petId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function donationFromSpecificUser(petId, userId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}