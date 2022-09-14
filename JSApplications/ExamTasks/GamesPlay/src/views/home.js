import { html } from '../lib.js';
import { getAllGames } from '../api/data.js';
import { gameCard } from './common.js';

const homeTemplate = (games) => html`
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>

        <!-- Display div: with information about every game (if any) -->
        ${games.length == 0
        ? html`<p class="no-articles">No games yet</p>`
        : games.map(gameCard)}
        
    </div>
</section>`;

export async function homeView(ctx) {
    const games = await getAllGames();

    ctx.render(homeTemplate(games));
};