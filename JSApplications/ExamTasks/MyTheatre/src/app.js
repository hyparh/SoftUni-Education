import { logout } from './api/users.js';
import { page, render} from './lib.js';
import { getUserData } from './util.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';

const main = document.querySelector('main');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/profile', profileView);

// Start application
updateNav();
page.start();

function decorateContext(ctx, next) { // this is a middleware
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    
    next();
};

function renderMain(templateResult) {
    render(templateResult, main);
};

function updateNav() {
    const userData = getUserData();

    if (userData) {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'block');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'none');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'block');
    }
};

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}