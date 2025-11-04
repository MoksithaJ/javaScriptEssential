var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET',url,true);
xhr.responseType ='json';

xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('newsarticles');

    articles.forEach(function (article) {
        var articleDiv  = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title || 'Untitled';

        var description = document.createElement('p');
        description.textContent = article.description || 'No description available.';
    
        var author = document.createElement('p');
        author.innerHTML = `<strong>Author:</strong> ${article.author || 'Unknown'}`;

        var date = document.createElement('p');
        date.innerHTML = `<strong>Date:</strong> ${article.date || ' N/A'}`;

        var category = document.createElement('p');
        category.innerHTML = `<strong>Category:</strong> ${article.category || 'General'}`;

        var content = document.createElement('p');
        content.textContent = article.content;

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(author);
        articleDiv.appendChild(date);
        articleDiv.appendChild(category);
        articleDiv.appendChild(content);

        articlesDiv.appendChild(articleDiv);
    });
}
xhr.send();