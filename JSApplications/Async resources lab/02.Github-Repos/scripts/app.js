async function loadRepos() {
	// read input fields
	let username = document.getElementById('username').value;
	let list = document.getElementById('repos');

	try {
		// send request
		let response = await fetch(`https://api.github.com/users/${username}/repos`);

		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		let data = await response.json();
		list.innerHTML = '';

		// display result
		for (let repo of data) {
			list.innerHTML += `<li>
			<a href="${repo.html_url}" target="_blank">
			${repo.full_name}
			</a>
		</li>`;
		}

	} catch (error) {
		// handle errors
		list.innerHTML = `${error.message}`;
	}
}