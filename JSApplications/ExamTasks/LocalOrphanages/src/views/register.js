import { html } from '../lib.js';
import { register } from '../api/users.js';
//import { notify } from '../notify.js';

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="auth">
    <form @submit=${onSubmit} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`;

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('repeatPassword');

        if (email == '' || password == '' || repass == '') {
            return notify('All fields are required!');
        }

        if (password != repass) {
            return alert('Passwords don\'t match');
        }

        await register(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    };
};