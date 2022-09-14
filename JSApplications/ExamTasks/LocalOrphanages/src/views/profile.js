import { html } from '../lib.js';
import { myPosts } from './common.js'
import { getUserData } from "../util.js";
import { getMyPosts } from '../api/data.js';

const profileTemplate = (postList) => html`
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>
    
        ${postList.length == 0 ? html`
        <h1 class="title no-posts-title">You have no posts yet!</h1>` 
        : postList.map(myPosts)}
    </section>
`;

export async function profileView(ctx) {
    const userData = getUserData();
    const posts = await getMyPosts(userData.id);
    ctx.render(profileTemplate(posts, userData));
}