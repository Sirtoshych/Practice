/**
 * Created by Sirtoshych on 4/18/2017.
 */
var serverWoker = (function (){
    function getArticles(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/articles", false);
        xhr.send();
        var articles = JSON.parse(xhr.responseText);
        return articles;
    }
    function getArticle(id) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET",'/article/' + id, false);
        xhr.send();
        var article =  JSON.parse(xhr.responseText);
        return article;
    }
    function sendArticle(article) {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", '/addarticle');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(article));
    }
    function removeArticle (id){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/delete/" +id, false);
        xhr.send();
    }
    return{
        sendArticle: sendArticle,
        removeArticle: removeArticle,
        getArticles: getArticles,
        getArticle: getArticle,
    }
})();