/**
 * Created by Sirtoshych on 4/4/2017.
 */

var ArticleRenderer = (function () {
    var SIDE_NEWS;
    var SIDE_NEWS_TEMPLATE;
    var RECENT_NEWS;
    var RECENT_NEWS_TEMPLATE;
    var articles;
    var filterConfig;
    var i =0;

    function init() {
        filterConfig = 'Default';
        SIDE_NEWS = document.querySelector(".table");
        SIDE_NEWS_TEMPLATE  = document.querySelector("#template-sidenews");
        RECENT_NEWS = document.querySelector(".recent-news");
        RECENT_NEWS_TEMPLATE = document.querySelector("#template-recent-news");
        articles = articleHandler.articles;
        fillMainNews(filterConfig);
        fillSideNews(filterConfig);
        fillRecentNews(filterConfig);
    }


    /*Main news*/
    var fillMainNews = function (filterConfig) {

        var main_news_summary = document.getElementsByClassName('main-news-disc')
        var h2 = document.getElementsByTagName("h2")
        h2[0].innerHTML = articles[0].title;
        var sum = main_news_summary[0].getElementsByClassName('mainnews-p');
        sum[0].innerHTML = articles[0].summary;
        var author = main_news_summary[0].getElementsByClassName('author');
        author[0].innerHTML = articles[0].author;
        document.querySelector('.newsmain').setAttribute('id',''+articles[0]);;
        return main_news_summary;
    };

    /*Side news*/
    var fillSideNews = function (filterConfig) {
        i = 0;
        rows = document.querySelectorAll(".row");
        var j = 0;
        while ( (j !== 2) && (i!=articles.length -1)) {
            if (articleHandler.tagcheck(filterConfig,articles[i])) {
                rows[0].appendChild(renderSideNews(articles[i]));
                j++;
            }

            i++;
        }
        j = 0;
        while ( (j !== 2)&& (i!=articles.length)) {
            if (articleHandler.tagcheck(filterConfig,articles[i])) {
                rows[1].appendChild(renderSideNews(articles[i]));
                j++;
            }

            i++;
        }


    };
    var deleteAllSideNews = function(){
        rows = document.querySelectorAll(".row");
        while (rows[0].firstChild) {
            rows[0].removeChild(rows[0].firstChild);
        }
        while (rows[1].firstChild) {
            rows[1].removeChild(rows[1].firstChild);
        }
    }

    var renderSideNews = function (article,filterConfig) {
        var template = SIDE_NEWS_TEMPLATE;
        template.content.querySelector(".h3").innerHTML = article.title;
        template.content.querySelector(".sidenews-p").innerHTML = article.summary;
        template.content.querySelector(".sidenews-pic").style.backgroundImage = "url(" + article.image + ")";
        template.content.querySelector(".sidenews").setAttribute('data-id', '' + article.id);
        template.content.querySelector(".delete").setAttribute('data-id',''+article.id);
        template.content.querySelector(".edit").setAttribute('data-id',''+article.id);
        template.content.querySelector(".author").innerHTML = article.author;
        return template.content.cloneNode(true);
    };

    /*Recent news*/
    var fillRecentNews = function (filterConfig) {
        var i = 5;
        var j = 0;
        console.log(articleHandler.articles)
        while ( (i != articleHandler.articles.length) && (j != 8))
        {
            var article = articles[i];
            if (articleHandler.tagcheck(filterConfig,articles[i])) {
                RECENT_NEWS.appendChild(renderRecentNews(articles[i], filterConfig))
                j++;
            }
            i++;
        }

    };
    var deleteAllRecentNews = function(){
        while (RECENT_NEWS.firstChild) {
            RECENT_NEWS.removeChild(RECENT_NEWS.firstChild);
        }
    };
    var renderRecentNews = function (article,filterConfig) {
        var template = RECENT_NEWS_TEMPLATE;
        template.content.querySelector(".recent").innerHTML = article.summary;
        template.content.querySelector(".recent-content").innerHTML = article.content;
        template.content.querySelector(".recent-n").setAttribute('data-id', '' + article.id);
        template.content.querySelector(".recent-time").innerHTML = article.createdAt;
        template.content.querySelector(".delete").setAttribute('data-id',''+article.id);
        template.content.querySelector(".edit").setAttribute('data-id',''+article.id);
        return template.content.cloneNode(true);
    };

    /*
     Delete News
     */
    var handleEdit = function (target) {
        while (!target.hasAttribute('data-id')){
            target = target.parentNode;
        }
        var id = target.getAttribute('data-id');
        document.body.insertBefore(handleEvents.create(articleHandler.getById(id)), document.body.firstChild);
        SEND_BTN = document.querySelector('.send-news');
        SEND_BTN.addEventListener('click', function () {
            article = {
                id: '' + id,
                title: document.querySelector('.add-title').value,
                summary: document.querySelector('.add-summary').value,
                createdAt: new Date('2017-02-27T23:00:00'),
                author: articleHandler.getById(id).author,
                content: document.querySelector('.add-content').value,
                tags: articleHandler.getById(id).tags.push(document.querySelector('.add-tag').value),
                image: 'images/1.jpg'
            }
            articleHandler.edit(id,article);
            document.body.querySelector('.create-news-wrapper').remove();
            deleteAllSideNews();
            fillSideNews(filterConfig);
        });
        console.log(articleHandler.articles)
    };

    return {
        init: init,
        fillMain: fillMainNews,
        fillSide: fillSideNews,
        fillRecent: fillRecentNews,
        handleEdit: handleEdit,
        delRec: deleteAllRecentNews,
        delSid: deleteAllSideNews

    };
})();


