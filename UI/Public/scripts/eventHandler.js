/**
 * Created by Sirtoshych on 4/4/2017.
 */
var handleEvents = (function () {
    var RIGHT;
    var SIDE_TABLE;
    var MAIN_NEWS;
    var TEMPLATE_FULL;
    var FULL_NEWS_TEMPLATE;
    var DELETE_BUTTON;
    var EDIT_BUTTON;
    var MAIN;
    var ADD;
    var CREATE_NEWS_TEMPLATE;
    var SEND_BTN;
    function init(){
        CREATE_NEWS_TEMPLATE = document.querySelector("#create-news");
        ADD = document.querySelector('.add-news');
        ADD.addEventListener('click',addNews);
        MAIN = document.querySelector('.newsmain');
        MAIN.addEventListener('click', (event) => {
            target = event.target;
            var { action, id } =    target.dataset;
            if (!action || !id) {
                while (target.classList[0] !== 'newsmain') {


                    target = target.parentNode;

                }

            }

            var { action, id } = target.dataset;

            const actionFunc = articleActionHash[action];
            actionFunc(id);
        });
        TEMPLATE_FULL = document.getElementById('template-full-news');
        FULL_NEWS_TEMPLATE = document.querySelector("#full-news");
        RIGHT = document.querySelector(".right-news");
        RIGHT.addEventListener('mouseover', handleMouseOver);
        RIGHT.addEventListener('click', (event) => {
            target = event.target;
            var { action, id } = target.dataset;
            if (!action || !id) {
                while (target.classList[0] !== 'recent-n') {
                    target = target.parentNode;
                }
            }
            var { action, id }  = target.dataset;
            const actionFunc = articleActionHash[action];
            actionFunc(id);
        });
        RIGHT.addEventListener('mouseout', handleMouseOut);
        SIDE_TABLE = document.querySelector(".table");
        SIDE_TABLE.addEventListener('click', (event) => {
            target = event.target;
            var { action, id } = target.dataset;
            if (!action || !id) {
                while (target.classList[0] !== 'sidenews') {
                    target = target.parentNode;
                }
            }
            var { action, id }  = target.dataset;
            const actionFunc = articleActionHash[action];
            actionFunc(id);
        });

    }

    const articleActionHash = {
        showArticle: function(id){
            openFull(target);
        },
        editArticle: function (id) {
            openCreate(id);
        },
        deleteArticle: function (id) {
            articleHandler.remove(id);


            ArticleRenderer.delRec();
            ArticleRenderer.delSid();
            ArticleRenderer.fillRecent(filter);
            ArticleRenderer.fillSide(filter);
        }
    };
    /*
     Handle Recent Hovers
     */
    function openCreate(id) {
        var article = articleHandler.getById(id);
        document.body.insertBefore(createNews(article), document.body.firstChild);
        SEND_BTN = document.querySelector('.send-news');
        SEND_BTN.addEventListener('click', (event) =>{
            article = {
                id: id,
                title: document.querySelector('.add-title').value,
                summary: document.querySelector('.add-summary').value.trim(),
                createdAt: new Date('2017-02-27T23:00:00'),
                author: user.nick(),
                content: document.querySelector('.add-content').value.trim(),
                tags: [document.querySelector('.add-tag').value.trim(), 'Default'],
                image: 'images/1.jpg'
            };

            if (articleHandler.isValid(article)) {
                serverWoker.editArticle(article);
            }
            else
                alert('Incorrect article');
            CloseEdit();
        });
        //CloseEdit();
    }
    function handleMouseOver(event) {
        var target = event.target;
        while (target.nodeName !== 'DIV'){
            target = target.parentNode
        }
        target.querySelector(".recent-content").style.visibility='visible';
        target.querySelector(".recent").style.fontSize='16px';

    }
    function handleMouseOut(event) {
        var target = event.target;
        while (target.nodeName !== 'DIV'){
            target = target.parentNode
        }
        target.querySelector(".recent-content").style.visibility='hidden';
        target.querySelector(".recent").style.fontSize='12px';

    }

    function openFull(node) {
        while (!node.hasAttribute('data-id')) {
            node = node.parentNode;
        }
        var id = node.getAttribute('data-id');
        document.body.insertBefore(renderFullNews(id),document.body.firstChild);
        Close();
    }
    function renderFullNews(id){
        console.log(id);
        var article = serverWoker.getArticle(id);
        console.log(article);
        var template = FULL_NEWS_TEMPLATE;
        template.content.querySelector(".full-news-pic").style.backgroundImage = "url(" +article.image+")";
        template.content.querySelector(".full-news-title").innerHTML = article.title;
        template.content.querySelector(".full-news-summary").innerHTML = article.summary;
        template.content.querySelector(".full-news-content").innerHTML = article.content;
        template.content.querySelector(".full-news-wrapper").setAttribute('data-id',''+article.id);

        template.content.querySelector(".author").innerHTML = article.author;
        template.content.querySelector(".time").innerHTML = article.createdAt;
        return template.content.cloneNode(true);
    }

    /*
     Handle Full News Close
     */
    function Close() {
        TEMPLATE_FULL_BACKGROUND = document.querySelector('.full-news-wrapper');
        TEMPLATE_FULL_BACKGROUND.addEventListener('click', handleCloseFull);
    }
    function handleCloseFull(event) {
        if (event.target != TEMPLATE_FULL_BACKGROUND)return;
        TEMPLATE_FULL_BACKGROUND.remove();
    }
    /*
     Handle Create News
     */
    function addNews(event) {
        var target = event.target;
        if(target.innerHTML !== 'Login to add news' ) {
            document.body.insertBefore(createNews(), document.body.firstChild);
            SEND_BTN = document.querySelector('.send-news');
            SEND_BTN.addEventListener('click', handleSend);
            //CloseEdit();
        }
        else
            blink();
    }

    function blink() {
        document.querySelector('.login').style.color = 'red';
        setTimeout(blinkout, 800);
    }
    function blinkout() {
        document.querySelector('.login').style.color = 'white';
    }

    function handleSend(event) {

        article = {
            id: articleHandler.articles.length + 1,
            title: document.querySelector('.add-title').value,
            summary: document.querySelector('.add-summary').value.trim(),
            createdAt: new Date('2017-02-27T23:00:00'),
            author: user.nick(),
            content: document.querySelector('.add-content').value.trim(),
            tags: [document.querySelector('.add-tag').value.trim(), 'Default'],
            image: 'images/1.jpg'
        }
        serverWoker.sendArticle(article);
        //articleHandler.articles.push(article);
        TEMPLATE_FULL_BACKGROUND = document.querySelector('.create-news-wrapper');
        TEMPLATE_FULL_BACKGROUND.remove();
        ArticleRenderer.delRec();
        ArticleRenderer.delSid();
        ArticleRenderer.fillRecent('Default');
        ArticleRenderer.fillSide('Default');

    }
    function CloseEdit() {
        TEMPLATE_FULL_BACKGROUND = document.querySelector('.create-news-wrapper');
        TEMPLATE_FULL_BACKGROUND.remove();
    }
    function createNews(article) {
        if (article){
            var template = CREATE_NEWS_TEMPLATE;
            template.content.querySelector('.add-title').innerText = article.title;
            template.content.querySelector('.add-summary').innerText = article.summary;
            template.content.querySelector('.add-content').innerText = article.content;
            template.content.querySelector('.add-tag').innerText = article.tags[0];
            return template.content.cloneNode(true);
        }
        else
            var template = CREATE_NEWS_TEMPLATE;
        return template.content.cloneNode(true);

    }

    return{
        init:init,
        create: createNews,
        close: CloseEdit
    }
})();