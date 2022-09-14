import { deletePet, petDetails } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (pet, isOwner, onDelete, donation) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donation}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            <div class="actionBtn">
                ${isOwner ? html`<a href="/edit/${pet._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>` : ''}            
                
                <!--(Bonus Part) Only for no creator and user-->
                <a href="javascript:void(0)" class="donate">Donate</a>
            </div>
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const pet = await petDetails(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id == pet._ownerId;

    ctx.render(detailsTemplate(pet, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are tou sure you want to delete this pet?');

        if (choice) {
            await deletePet(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}
