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
    function editArticle(article){
        const xhr = new XMLHttpRequest();
        console.log(article);
        console.log("                ");
        xhr.open("PATCH", '/articleEdit/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(article));
    }
    function sendArticle(article) {
        var oReq = new XMLHttpRequest();

        oReq.open('POST', '/addarticle');
        oReq.setRequestHeader('content-type', 'application/json');
        // transform object to string

        // sent request body here as a string
        oReq.send(JSON.stringify(article));
    }
    function removeArticle (id){
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", "/delete/" +id, false);
        xhr.send();
    }
    return{
        sendArticle: sendArticle,
        removeArticle: removeArticle,
        getArticles: getArticles,
        getArticle: getArticle,
        editArticle: editArticle,
    }
})();