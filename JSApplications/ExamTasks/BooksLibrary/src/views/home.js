import { html } from '../lib.js';
import { getAllBooks } from '../api/books.js';
import { bookPreview } from './common.js';

const homeTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length == 0 
        ? html`<p class="no-books">No books in database!</p>` 
        : html`<ul class="other-books-list">
            ${books.map(bookPreview)}
        </ul>`}
</section>`;

export async function homeView(ctx) {
    const books = await getAllBooks();
    ctx.render(homeTemplate(books));
};