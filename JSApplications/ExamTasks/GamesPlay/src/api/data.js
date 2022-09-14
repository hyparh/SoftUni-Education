import { del, get, post, put } from './api.js';

export async function getAllGames() {
    return get('/data/games?sortBy=_createdOn%20desc');
}

export async function getRecentGames() {
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function createGame(game) {
    return post('/data/games', game);
}

export async function gameDetailsById(id) {
    return get('/data/games/' + id);
}

export async function editGame(id, game) {
    return put('/data/games/' + id, game);
}

export async function deleteGame(id) {
    return del('/data/games/' + id);
}