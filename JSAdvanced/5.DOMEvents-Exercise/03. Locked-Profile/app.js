function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toggle));

    function toggle(event) {
        let profile = event.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let div = profile.querySelector('div');

            if (element.target.textContent == 'Show more') {
                div.style.display = 'block';
                element.target.textContent = 'Hide it';
            } else {
                div.style.display = '';
                event.target.textContent = 'Show more';
            }
        }
    }
}