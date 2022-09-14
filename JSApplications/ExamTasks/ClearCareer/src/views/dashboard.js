import { html } from '../lib.js';
import { getAllJobs } from '../api/data.js';
import { jobPreview } from './common.js';

const dashboardTemplate = (jobs) => html`
<section id="dashboard">
    <h2>Job Offers</h2>

    <!-- Display a div with information about every post (if any)-->
    ${jobs.length == 0
    ? html`<h2>No offers yet.</h2>` 
    : jobs.map(jobPreview)}
    
</section>`;

export async function dashboardView(ctx) {
    const jobs = await getAllJobs();
    ctx.render(dashboardTemplate(jobs));
};

