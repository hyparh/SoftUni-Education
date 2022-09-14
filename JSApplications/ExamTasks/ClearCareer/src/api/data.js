import { del, get, post, put } from './api.js';

export async function getAllJobs() {
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export async function createJobs(job) {
    return post('/data/offers', job);
}

export async function getJobById(id) {
    return get('/data/offers/' + id);
}

export async function editJob(id, job) {
    return put('/data/offers/' + id, job);
}

export async function deleteJob(id) {
    return del('/data/offers/' + id);
}