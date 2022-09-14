import { html } from '../lib.js';
import { getAllGames } from '../api/data.js'
import { gamePreview } from './common.js';

const catalogueTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>

    <!-- Display div: with information about every game (if any) -->
    <div class="allGames-info">
        ${games.length == 0
        ? html`<h3 class="no-articles">No articles yet</h3>` 
        : games.map(gamePreview)}
    </div>

</section>`;

export async function catalogueView(ctx) {
    const games = await getAllGames();
    ctx.render(catalogueTemplate(games));
};