import { html } from "../lib.js";
import { getUserData } from "../util.js";
import { deleteTheatre, getTheatreById } from "../api/data.js";

const detailsTemplate = (theatre, isOwner, onDelete) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theatre.title}</h1>
            <div>
                <img src="${theatre.imageUrl}" />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${theatre.description}</p>
            <h4>Date: ${theatre.date}</h4>
            <h4>Author: ${theatre.author}</h4>
            <div class="buttons">
                ${isOwner ? html`
                <a class="btn-delete" href="javascript:void(0)" @click=${onDelete}>Delete</a>
                <a class="btn-edit" href="/edit/${theatre._id}">Edit</a>` : ''}               
                <!-- <a class="btn-like" href="#">Like</a> -->
            </div>
            <p class="likes">Likes: 0</p>
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const meme = await getTheatreById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id == meme._ownerId;

    ctx.render(detailsTemplate(meme, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are tou sure you want to delete this theatre?');

        if (choice) {
            await deleteTheatre(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}
