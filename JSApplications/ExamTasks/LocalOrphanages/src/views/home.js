import { html } from '../lib.js';
import { getAllPosts } from '../api/data.js'
import { postPreview } from './common.js';

const homeTemplate = (posts) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="all-posts">
        ${posts.length == 0 
        ? html`<h1 class="title no-posts-title">No posts yet!</h1>` 
        : posts.map(postPreview)}
    </div>
    
</section>`;

export async function homeView(ctx) {
    const posts = await getAllPosts();
    ctx.render(homeTemplate(posts));
};