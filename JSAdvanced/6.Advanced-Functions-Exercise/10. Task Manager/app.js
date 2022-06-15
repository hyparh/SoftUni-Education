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

// This one is working variant:

// function solve() {
//     document.getElementById('add').addEventListener('click', add);
//     let task = document.getElementById('task');
//     let description = document.getElementById('description');
//     let date = document.getElementById('date');

//     function add(ev){
//         if (task.value === '' || description.value === '' || date.value === ''){
//             return;
//         }

//         let article = document.createElement('article');

//         let headling = document.createElement('h3');
//         headling.textContent = task.value;

//         let descriptionParagraph = document.createElement('p');
//         descriptionParagraph.textContent = `Description: ${description.value}`

//         let dateParagraph = document.createElement('p');
//         dateParagraph.textContent = `Due Date: ${date.value}`;

//         let div = document.createElement('div');
//         div.className = 'flex';

//         let openStartBtn = document.createElement('button');
//         openStartBtn.className = 'green';
//         openStartBtn.textContent = 'Start'
//         openStartBtn.addEventListener('click', start);
        
//         let openDeleteBtn = document.createElement('button');
//         openDeleteBtn.className = 'red';
//         openDeleteBtn.textContent = 'Delete';
//         openDeleteBtn.addEventListener('click', remove);
        
//         div.appendChild(openStartBtn);
//         div.appendChild(openDeleteBtn);

//         article.appendChild(headling);
//         article.appendChild(descriptionParagraph);
//         article.appendChild(dateParagraph);
//         article.appendChild(div);

//         document.getElementsByClassName('orange')[0].parentElement.parentElement.querySelectorAll('div')[1].appendChild(article);
    
//         function start(ev){
//             ev.target.className = 'red';
//             ev.target.textContent = 'Delete';
//             ev.target.addEventListener('click', remove);
            
//             let target = ev.target.parentElement.querySelectorAll('button')[1];
//             target.className = 'orange';
//             target.textContent = 'Finish';
//             target.addEventListener('click', complete);

//             let inProgressArticle = ev.target.parentElement.parentElement;
//             document.getElementById('in-progress').appendChild(inProgressArticle);
//         }

//         function complete(ev){
//             let completeArticle = ev.target.parentElement.parentElement;
//             completeArticle.getElementsByClassName('flex')[0].remove();
//             document.getElementsByClassName('green')[0].parentElement.parentElement.querySelectorAll('div')[1].appendChild(completeArticle);
//         }

//         function remove(ev){
//             ev.target.parentElement.parentElement.remove();
//         }
//     }
// }