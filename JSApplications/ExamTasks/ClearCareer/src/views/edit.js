import { html } from '../lib.js';
import { editJob, getJobById } from '../api/data.js';

const editTemplate = (job, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" value="${job.title}"/>
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value="${job.imageUrl}"/>
            <input type="text" name="category" id="job-category" placeholder="Category" value="${job.category}"/>
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">${job.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50">${job.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value="${job.salary}"/>

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editView(ctx) {
    const pet = await getJobById(ctx.params.id);

    ctx.render(editTemplate(pet, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const job = {
            title: formData.get('title').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            category: formData.get('category').trim(),
            description: formData.get('description').trim(),
            requirements: formData.get('requirements').trim(),
            salary: formData.get('salary').trim()
        };

        if (job.title == '' || job.imageUrl == '' || job.category == '' ||
            job.description == '' || job.requirements == '' || job.salary == '') {
            return alert('All fields are required!');
        }

        await editJob(ctx.params.id, job);
        event.target.reset(); // clearing up the form
        ctx.page.redirect('/details/' + ctx.params.id);
    }
};