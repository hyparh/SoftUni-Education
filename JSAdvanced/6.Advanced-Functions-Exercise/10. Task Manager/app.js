function solve() {
    let input = { // taking all IDs within the form as an object
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    };

    // using discard operator here, cause we do not need to work with the first section
    let [_, openSection, progressSection, completeSection] = 
        Array.from(document.querySelectorAll('section')).map(e => e.children[1]);

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault(); // this prevents page refreshing

        // collect field values
        
        // create element
        let article = document.createElement('article');
        article.appendChild(createElement('h3', input.name.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.date.value}`));

        let div = document.createElement('div', '', 'flex');
            
        // creating the buttons
        let startBtn = createElement('button', 'Start', 'green');
        let deleteBtn = createElement('button', 'Delete', 'red');
        let completeBtn = createElement('button', 'Finish', 'orange');

        // adding the buttons (for now without finish btn)
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        article.appendChild(div);

        // append to Open section
        openSection.appendChild(article);

        Object.values(input).forEach(i => i.value = '');
        
        // **add functionality for start, finish and delete task
        startBtn.addEventListener('click', onStart);
        deleteBtn.addEventListener('click', onDelete);
        completeBtn.addEventListener('click', onComplete);

        function onDelete() {
            article.remove();
        }

        function onStart() {
            startBtn.remove();
            div.appendChild(completeBtn);
            progressSection.appendChild(article);
        }

        function onComplete() {
            div.remove();
            completeSection.appendChild(article);
        }
    }

    function createElement(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;

        if (className) { // if we have a className do this
            element.className = className;
        }
        
        return element;
    }
}