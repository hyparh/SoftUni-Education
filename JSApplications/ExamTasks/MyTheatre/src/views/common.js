import { html } from '../lib.js';

export const theatresList = (theatre) => html`
<div class="eventsInfo">
    <div class="home-image">
        <img src="${theatre.imageUrl}">
    </div>
    <div class="info">
        <h4 class="title">${theatre.title}</h4>
        <h6 class="date">${theatre.date}</h6>
        <h6 class="author">${theatre.author}</h6>
        <div class="info-buttons">
            <a class="btn-details" href="/details/${theatre._id}">Details</a>
        </div>
    </div>
</div>`;

export const theatreCard = (theatre) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src="${theatre.imageUrl}">
        <h2>${theatre.title}</h2>
        <h6>${theatre.date}</h6>
        <a href="/details/${theatre._id}" class="details-button">Details</a>
    </div>
</div>`;