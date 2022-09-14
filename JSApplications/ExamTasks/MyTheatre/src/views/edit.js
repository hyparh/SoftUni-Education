import { html } from '../lib.js';
import { editTheatre, getTheatreById } from '../api/data.js';
//import { notify } from '../notify.js';

const editTemplate = (theatre, onSubmit) => html`
<section id="editPage">
    <form @submit=${onSubmit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="${theatre.title}">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${theatre.date}">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" value="${theatre.author}">
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description"
                placeholder="Description">${theatre.description}</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                value="${theatre.imageUrl}">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

export async function editView(ctx) {
    const meme = await getTheatreById(ctx.params.id);

    ctx.render(editTemplate(meme, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const theatre = {
            title: formData.get('title').trim(),
            date: formData.get('date').trim(),
            author: formData.get('author').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim()
        };

        if (theatre.title == '' || theatre.date == '' || theatre.author == '' ||
            theatre.description == '' || theatre.imageUrl == '') {
            return alert('All fields are required!');
        }

        await editTheatre(ctx.params.id, theatre);
        event.target.reset(); // clearing up the form
        ctx.page.redirect('/details/' + ctx.params.id);
    }
};