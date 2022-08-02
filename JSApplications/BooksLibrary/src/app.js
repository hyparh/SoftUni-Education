import { logout } from './api/users.js'; // this will be always here
import { page, render} from './lib.js'; // this will be always here
import { getUserData } from './util.js'; // this will be always here
import { createView } from './views/create.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

const main = document.querySelector('main');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext); // middleware
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);

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
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
};

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}