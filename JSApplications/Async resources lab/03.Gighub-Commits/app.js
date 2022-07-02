async function loadCommits() {
    // read input fields
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let list = document.getElementById('commits');

    try {
        // send request
        let response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

        // check for errors
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        
        let data = await response.json();
        list.innerHTML = '';

        // display result
        for (let { commit } of data) {
            list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`;
        }      

    } catch (error) {
        // handle errors
        list.innerHTML = `Error: ${error.message}`;
    }
}