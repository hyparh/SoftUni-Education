import { html } from '../lib.js';
import { getAllPets } from '../api/data.js'
import { petPreview } from './common.js';

const dashboardTemplate = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>

    <div class="animals-dashboard">
        ${pets.length == 0
        ? html`<div><p class="no-pets">No pets in dashboard</p></div>` 
        : pets.map(petPreview)}
    </div>

</section>`;

export async function dashboardView(ctx) {
    const pets = await getAllPets();
    ctx.render(dashboardTemplate(pets));
};