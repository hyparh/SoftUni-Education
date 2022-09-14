import { html } from "../lib.js";
import { getTheatresByUser } from "../api/data.js";
import { getUserData } from "../util.js";
import { theatreCard } from "./common.js";

const profileTemplate = (theatres, userData) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${userData.email}</h2>
    </div>
    <div class="board">
        <!--If there are event-->
        ${theatres.length == 0 ? html`
        <div class="no-events">
            <p>This user has no events yet!</p>
        </div>`
        : theatres.map(theatreCard)}        
    </div>
</section>`;

export async function profileView(ctx) {
    const userData = getUserData();
    const theatres = await getTheatresByUser(userData.id);
    ctx.render(profileTemplate(theatres, userData));
}
