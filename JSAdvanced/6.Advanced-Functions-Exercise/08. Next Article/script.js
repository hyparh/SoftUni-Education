function getArticleGenerator(articles) {
    let div = document.getElementById('content');

    return function() {
        let article = articles.shift(); // taking the first article

        if (article != undefined) {
            let element = document.createElement('article'); // creating the new element
            element.textContent = article;

            div.appendChild(element);
        }        
    }
}