import { deleteGame, gameDetailsById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (game, isOwner, onDelete) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        ${isOwner ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} class="button">Delete</a>
        </div>` : ''}
    </div>
</section>`;

export async function detailsView(ctx) {
    const pet = await gameDetailsById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id == pet._ownerId;

    ctx.render(detailsTemplate(pet, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are tou sure you want to delete this game?');

        if (choice) {
            await deleteGame(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}
