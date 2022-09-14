import { html } from '../lib.js';

export const postPreview = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src="${post.imageUrl}" alt="Kids clothes">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

export const myPosts = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src="${post.imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>
`;