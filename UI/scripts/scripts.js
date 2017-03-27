
var articleHandler = (function (){

    var articles = [
        {  /* main news */
            id: '1',
            title: "Минское «Динамо» обыграло ярославский «Локомотив»'",
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00'),
            author: 'Иванов ',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['Sport','Health','Society'],
            image: 'images/1.jpg'
        },
        {/* sidenews column 1 row 1 */
            id: '2',
            title: 'Вице-спикер парламента встретился с оппозицией: готовятся изменения в декрет о тунеядца',
            summary: 'В декрет о тунеядцах готовятся изменения: уже в ближайшее время список социальных иждивенцев могут серьезно сократить. Об этом TUT.BY рассказал один из ',
            createdAt: new Date('2017-02-27T22:00:00'),
            author: 'Максим',
            content: 'Сам зампредседателя Палаты представителей в разговоре с корреспондентом TUT.BY уточнил, что власти не планируют отменять декрет. А изменения будут подготовлены не позднее середины марта.',
            tags: ['Society','Politics'],
            image: 'images/1.jpg'
        },
        {   /* sidenews column 2 row 1 */
            id: '3',
            title: 'LOL KEK',
            summary: 'На Белорусской валютно-фондовой бирже 6 марта прошли очередные торги валютами. Курс рубля снизился к евро и российскому рублю.',
            createdAt: new Date('2017-02-27T21:00:00'),
            author: 'Влад',
            content: 'Доллар снизился на BYN0,011 — до 1,9031 рубля.Евро вырос на BYN0,0072 — до 2,0203 рубля.Российский рубль укрепился на BYN0,0146 — до 3,2651 за 100 российских рублей.',
            tags:['Politics','Finance'],
            image: 'images/1.jpg'

        },
        {   /* sidenews column 1 row 2 */
            id: '4',
            title: 'Алексис покинет «Арсенал» летом. ',
            summary: 'Сообщается, что чилиец окончательно разругался с Венгером и по предводительным данным перейдет в стан Милана. ',
            createdAt: new Date('2017-02-27T21:00:00'),
            author: 'Серега',
            content: 'Сумма трансфера не превысит 70 миллионов €.',
            tags: ['Sport', 'Popular'],
            image: 'images/1.jpg'
        },
        {   /* sidenews column 2 row 2 */
            id: '5',
            title: 'Японец Миура стал самым возрастным футболистом в истории',
            summary: 'Нападающий Кадзуёси Миура, выступающий за клуб второго по силе дивизиона чемпионата Японии, вышел в стартовом составе в возрасте 50 лет и 7 дней.',
            createdAt: new Date('2017-02-27T20:00:00'),
            author: 'Ля',
            content: 'Таким образом игрок побил достижение английского футболиста Стэнли Мэтьюза, который в 1965 году в возрасте 50 лет и 5 дней провел официальный матч в составе "Сток Сити".',
            tags: ['Sport', 'Health'],
            image: 'images/1.jpg'

        },
        {
            id: '6',
            title: 'В Крыму полиция разогнала детский футбольный матч, объявив его незаконным митингом.',
            summary: '4 марта сотрудники полиции в Феодосии разогнали детский футбольный матч, объявив его «несанкционированным террористическим митингом».',
            createdAt: new Date('2017-02-27T19:00:00'),
            author: 'До',
            content: '«Сегодня в селе Краснокаменка состоялся матч между дворовыми командами, который прервали директор школы и участковый, объяснив это тем, что мы проводим несанкционированный террористический митинг',
            tags: ['Sport','Politics'],
            image: 'images/1.jpg'
        },
        {
            id: '7',
            title: 'Министр Заяц гарантирует Данкверту, что тот вернется в Россию после визита в Беларусь',
            summary: 'Беларусь на совместной с Минсельхозом России коллегии планирует обсудить поставки своей продукции.',
            createdAt: new Date('2017-02-27T18:00:00'),
            author: 'Ре',
            content: 'По его словам, коллегия должна состояться в марте. Российской стороне было направлено предложение провести ее до 10 марта, ',
            tags: ['Politics', 'Society'],
            image: 'images/1.jpg'
        },
        {
            id: '8',
            title: 'В Бресте идут суды над участниками "Марша нетунеядцев"',
            summary: 'Суд Ленинского района Бреста 6 марта рассматривает административные дела в отношении представителей анархистского движения,',
            createdAt: new Date('2017-02-27T17:00:00'),
            author: 'Ми',
            content: '6 марта в Бресте начался суд над задержанными анархистами. Накануне вечером они были доставлены в ИВС Ленинского РОВД, где провели ночь.',
            tags: ['Politics','Society'],
            image: 'images/1.jpg'

        },
        {
            id: '9',
            title: 'МАРТ подготовил революционный проект указа для предприятий ритейла, общепита и бытовых услуг',
            summary: 'Министерство антимонопольного регулирования и торговли подготовило проект указа президента, предполагающий мораторий на проверки до конца 2020 года',
            createdAt: new Date('2017-02-27T16:00:00'),
            author: 'фа',
            content: 'Проект предусматривает введение до 31 декабря 2020 года моратория на проведение плановых проверок профильных субъектов хозяйствования, за исключением проверок санитарного и пожарного надзора, контроля за выполнением лицензионных требований и ведомственного контроля.',
            tags: ['Health', 'Society'],
            image: 'images/1.jpg'

        },
        {
            id: '10',
            title: 'Исполнителей двойного убийства в Минске приговорили к пожизненному, заказчицу — к 12 годам',
            summary: 'Минский городской суд приговорил исполнителей заказного убийства молодой пары в декабре 2015 г. в Минске, а также убийства мужчины в Колодищах к пожизненному заключению с конфискацией имущества.',
            createdAt: new Date('2017-02-27T15:00:00'),
            author: 'Соль',
            content: 'Напомним, по версии следствия, причиной трагедии в Минске стала ревность: 27-летняя воспитательница детсада Алина Шульганова хотела вернуть бывшего парня. Она попросила соседа по дому Александра Жильникова (ранее судимого) и его приятеля Вячеслава Сухарко «отправить» соперницу в больницу на пару недель — избить.',
            tags: ['Society','Health'],
            image: 'images/1.jpg'

        },
        {
            id: '11',
            title: 'Трамп подписал новый иммиграционный указ ',
            summary: 'Президент США Дональд Трамп подписал новый указ об ужесточении миграционной политики, сообщили представители Белого дома. Он вступает в силу с 16 марта.',
            createdAt: new Date('2017-02-27T14:00:00'),
            author: 'Ля',
            content: 'По их словам, глава государства поставил свою подпись под документом «этим утром», сама церемония прошла в закрытом для прессы режиме',
            tags: ['Politics', 'Society'],
            image: 'images/1.jpg'

        },
        {
            id: '12',
            title: 'Минтранс не будет вносить изменения в механизм сбора дорожного налога',
            summary: 'Минтранс не будет вносить изменения в механизм сбора дорожного налога,. Об этом на пресс-конференции сказал министр транспорта и коммуникаций Беларуси Анатолий Сивак.',
            createdAt: new Date('2017-02-27T13:00:00'),
            author: 'Си',
            content: 'Рабочая группа, созданная при Минтрансе, подготовила доклад в правительство о том, какие местные дороги требуют ремонта и из каких источников это будет финансироваться. Несмотря на то, что предложения по этим вопросам отправлены в Совмин, решения по ним не окончательные и будут обсуждаться.',
            tags:['Society', 'Health'],
            image: 'images/1.jpg'
        },
        {
            id: '13',
            title: 'Самолет, БТР и весна. Топ-10 снимков Минска в Instagram за неделю',
            summary: 'TUT.BY продолжает отбирать самые интересные из ваших фото в Instagram,',
            createdAt: new Date('2017-02-27T12:00:00'),
            author: 'Иван',
            content: 'TUT.BY продолжает отбирать самые интересные из ваших фото в Instagram, которые сделаны в Минске за семь дней. В сегодняшней подборке — весна, котик, самолет на Октябрьской площади и БТР в центре столицы.',
            tags:['Society','Popular'],
            image: 'images/1.jpg'

        },
        {
            id: '14',
            title: 'Крупный теннисный центр в Минске будет соседствовать с храмом "Всех скорбящих радость" ',
            summary: 'Близится к завершению строительство крупного физкультурно-оздоровительного комплекса с теннисными кортами на улице Е. Полоцкой в Минске. ',
            createdAt: new Date('2017-02-27T11:00:00'),
            author: 'Иванов',
            content: 'ФОК расположен практически рядом с церковью иконы Божией Матери «Всех скорбящих радость». Ранее на этом месте была одна из баз коммунальных служб города. Данную территорию уже давно планировалось облагородить.',
            tags:['Sport', 'Society','Health'],
            image: 'images/1.jpg'

        },
        {
            id: '15',
            title: 'Кухни от фабрики "ГеосИдеал". Весенние скидки до 20%',
            summary: 'Перезимовали! Весна вступила в свои права и требует обновления всего: пейзажа за окном, гардероба, обстановки в квартире...',
            createdAt: new Date('2017-02-27T10:00:00'),
            author: 'Стефаненко',
            content: 'Требует изменить взгляд на мир, что-то поменять в себе… Или на кухне...'     ,
            tags: ['Health','Society'],
            image: 'images/1.jpg'
        },
        {
            id: '16',
            title: 'В Британии предотвратили 13 терактов за четыре года ',
            summary: 'Службы безопасности предотвратили 13 потенциальных терактов в Британии с июня 2013 года',
            createdAt: new Date('2017-02-27T09:00:00'),
            author: 'Алисейко',
            content: 'Он рассказал об этих данных, представляя информационную кампанию Action Counters Terrorism «Действия против терроризма», которая призывает общественность сообщать в полицию о своих подозрениях.',
            tags: ['Politics', 'Health', 'Society'],
            image: 'images/1.jpg'

        },
        {
            id: '17',
            title: 'Как отказать президенту. 10 человек, ушедших от Трампа',
            summary: 'На фоне скандала, связанного с генпрокурором США Джефом Сешнсом, который рискует повторить судьбу экс-советника',
            createdAt: new Date('2017-02-27T08:00:00'),
            author: 'ГГВП',
            content: 'В США, где особенно пестуется и уважается патриотизм, «предательство национальных интересов» звучит как тяжелейшее обвинение, а престиж государственной службы очень велик, не принято просто так отказываться от предложений занять государственные должности.',
            tags: ['Politics','Health', 'Society'],
            image: 'images/1.jpg'

        },
        {
            id: '18',
            title: 'В Барановичском районе BMW опрокинулся в кювет и сгорел',
            summary: 'Авария произошла 6 марта, около 07.40, в Барановичском районе. Об этом сообщили в ГАИ УВД Брестского облисполкома.',
            createdAt: new Date('2017-02-27T07:00:00'),
            author: 'И',
            content: '— По предварительной информации, 23-летний водитель BMW 320 ехал по подъезду от а/д Р108 к деревне Шпаковцы. На закруглении дороги влево он не справился с управлением, автомобиль съехал в левый кювет, опрокинулся и загорелся, — сказали в ГАИ.',
            tags: ['Society', 'Health'],
            image: 'images/1.jpg'

        },
        {
            id: '19',
            title: 'Брестскую активистку выпустили из психоневрологического диспансера',
            summary: 'Брестскую активистку «Молодой Беларуси» Наталью Папкову отпустили из психоневрологического диспансера, куда',
            createdAt: new Date('2017-02-27T06:0:00'),
            author: 'ы',
            content: 'По словам Папковой, ее задержали в пятницу по санкции прокурора Бреста из-за того, что ее соседи якобы сообщили о планах активистки покончить жизнь самоубийством. Папкова эти домыслы категорически отрицает.',
            tags: ['Society', 'Politics'],
            image: 'images/1.jpg'

        },
        {
            id: '20',
            title: '"Для этого мы найдем деньги". Президент встретился с номинантами на Госпремию в области искусства ',
            summary: 'Деятелям культуры необходимо создавать произведения о наших людях, «чтобы народ валом шел».',
            createdAt: new Date('2017-02-27T05:00:00'),
            author: 'Гы',
            content: '«Я ехал и думал, что мы в средствах массовой информации совсем мало говорим об этих достижениях», — сказал глава государства.',
            tags: ['Politics', 'Society'],
            image: 'images/1.jpg'

        }
    ];

    var alltags = ['Politics','Sport','Society','Finance','Health','Technology','People','Cars','Football','Popular']
    var getArticles = function(skipNumber, amount, filterConfig){
        skipNumber = skipNumber || 0;
        amount = amount || articles.length;
        var sorted = articles;
        var newarts = [];
        if (filterConfig != null){
            if (filterConfig.author != null){
                sorted = sorted.filter(function (item) {
                    return item.author == filterConfig.author
                })
            }

            if (filterConfig.createdAt != null){
                sorted = sorted.filter(function (item){
                        return item.createdAt >= filterConfig.createdAt
                    }
                )
            }
            if (filterConfig.tags != null){
                sorted = sorted.filter( function(item){
                        return (item.tags.indexOf(filterConfig.tags)!= -1)
                    }
                )

            }



        }
        sorted = sorted.slice(skipNumber, skipNumber + amount);
        return sorted;
    };
    var getArticle = function (id){
        for (var i = 0; i < articles.length; i++)
            if (articles[i].id == id)
                return articles[i];
        return false;
    };
    var validateArticle = function (article){
        if (article.id !== "" )
            if (article.title.length < 100)
                if (article.summary.length < 200)
                    if (article.createdAt !== 0 )
                        if ( article.author !== " ")
                            if (article.content !== "")
                                if (article.tags.length != 1)
                                    return true;
        return false;
    };
    var addArticle = function (article){
        if (validateArticle(article))
            articles.push(article);
        else
            return false;
        return true;
    };
    var editArticle = function (id, article){
        for (var i = 0; i < articles.length; i++){
            if (articles[i].id == id)
                break;
        }
        {
            if (article.title != null && article.title.length < 100){
                articles[i].title = article.title;
            }
            if (article.summary != null && article.summary.length < 200){
                articles[i].summary = article.summary;
            }
            if (article.content != null){
                articles[i].content = article.content;

            }
            return true;
        }

        return false;
    };
    var checkNewsForTag = function( article){
        if (article.tags.indexOf(tag_filter) == -1)
            return false;
        else return true;
    };
    var removeArticle = function (id){
        for (var i = 0; i <articles.length; i ++)
            if (articles[i].id == id)
                break;
        if (i != articles.length){
            articles.splice(i,1);
            return true;
        }
        return false;
    };
    var addTag = function(id, tag){
        for (var i = 0; i <articles.length; i ++)
            if (articles[i].id == id)
                break;
        if (i == articles.length)
            return false;
        if (function(item){
                for (var j = 0; j < tags.length; j++ )
                    if (item == tags[i])
                        return true;
                return false;
            })
            articles[i].tags.push(tag)
    };
    var removeTag = function(id, tag){
        var ind;
        for (var i = 0; i < articles.length; i ++)
            if (articles[i].id == id)
                ind = i;
        for (var j = 0; j <articles[ind].tags.length; j++)
            if (articles[ind].tags[j] == tag)
                break;
        if (i != articles.length){
            articles[ind].tags.splice(j,1);
            return true;
        }
        return false;
    };
    return{
        getMultiple: getArticles,
        getById: getArticle,
        isValid: validateArticle,
        add: addArticle,
        edit: editArticle,
        remove: removeArticle,
        tags: alltags,
        articles: articles
    };
})();

var ArticleRenderer = (function () {
        var SIDE_NEWS;
        var SIDE_NEWS_TEMPLATE;
        var RECENT_NEWS;
        var RECENT_NEWS_TEMPLATE;
        var articles;
        function init() {
            SIDE_NEWS= document.getElementById("side-news-table")
            SIDE_NEWS_TEMPLATE  = document.querySelector("#template-sidenews")
            RECENT_NEWS = document.querySelector(".recent-news")
            RECENT_NEWS_TEMPLATE = document.querySelector("#template-recent-news")
            articles = articleHandler.articles;
            fillMainNews();
            fillSideNews();
            fillRecentNews();
        }

        var ROW_COUNT = 2;
        var COLUMN_COUNT = 2;
        /*Main news*/
        var fillMainNews = function () {
            var main_news_summary = document.getElementsByClassName('main-news-disc')
            var h2 = document.getElementsByTagName("h2")
            h2[0].innerHTML = articles[0].title;
            var sum = main_news_summary[0].getElementsByClassName('mainnews-p');
            sum[0].innerHTML = articles[0].summary;
            var author = main_news_summary[0].getElementsByClassName('author');
            author[0].innerHTML = articles[0].author;
            return main_news_summary;
        };

        /*Side news*/
        var fillSideNews = function () {
            var ROWS = [];
            for (var i = 0; i < ROW_COUNT; i++)
                ROWS[i] = SIDE_NEWS.insertRow();
            var CELL = [];
            for (var i = 0; i < ROW_COUNT; i++)
                for (var j = 0; j < COLUMN_COUNT; j++) {
                    CELL[i + j] = ROWS[i].insertCell();
                    CELL[i + j].appendChild(renderSideNews(articles[i + j]));
                }
        };

        var renderSideNews = function (article) {
            var template = SIDE_NEWS_TEMPLATE;
            template.content.querySelector(".h3").innerHTML = article.title;
            template.content.querySelector(".sidenews-p").innerHTML = article.summary;
            template.content.querySelector(".sidenews-pic").style.backgroundImage = "url(" + article.image + ")";
            template.content.querySelector(".sidenews").setAttribute('data-id', '' + article.id);
            return template.content.cloneNode(true);
        };

        /*Recent news*/
        var fillRecentNews = function () {

            for (var i = 6; i < articles.length; i++)
                RECENT_NEWS.appendChild(renderRecentNews(articles[i]))

        };

        var renderRecentNews = function (article) {
            var template = RECENT_NEWS_TEMPLATE;
            template.content.querySelector(".recent").innerHTML = article.summary;
            template.content.querySelector(".recent-content").innerHTML = article.content;
            template.content.querySelector(".recent-n").setAttribute('data-id', '' + article.id);
            return template.content.cloneNode(true);
        };


        return {
            init: init,
            fillMain: fillMainNews,
            fillSide: fillSideNews,
            fillRecent: fillRecentNews
        };
    }

)();
var handleEvents = (function () {
    var RIGHT;
    var SIDE_TABLE;
    var MAIN_NEWS;
    var TEMPLATE_FULL;
    var FULL_NEWS_TEMPLATE;
    function init(){
        TEMPLATE_FULL = document.getElementById('template-full-news');
        FULL_NEWS_TEMPLATE = document.querySelector("#full-news");
        RIGHT = document.querySelector(".right");
        RIGHT.addEventListener('mouseover', handleMouseOver);
        RIGHT.addEventListener('click', handleClick);
        RIGHT.addEventListener('mouseout', handleMouseOut);
        SIDE_TABLE = document.getElementById("side-news-table");
        SIDE_TABLE.addEventListener('click', handleClick);
    }
    /*
     Handle Recent Hovers
     */
    function handleMouseOver(event) {
        var target = event.target;
        while (target.nodeName !== 'DIV'){
            target = target.parentNode
        }
        target.querySelector(".recent-content").style.visibility='visible';
        target.querySelector(".recent").style.fontSize='16px';
        target.querySelector(".delete").style.visibility='visible';
        target.querySelector(".edit").style.visibility='visible';

    }
    function handleMouseOut(event) {
        var target = event.target;
        while (target.nodeName !== 'DIV'){
            target = target.parentNode
        }
        target.querySelector(".recent-content").style.visibility='hidden';
        target.querySelector(".recent").style.fontSize='12px';
        target.querySelector(".delete").style.visibility='hidden';
        target.querySelector(".edit").style.visibility='hidden';

    }

    /*
    Handle Clicks
     */
    function handleClick(event) {
        var target = event.target;
        openFull(target);
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
        var article = articleHandler.getById(id);
        var template = FULL_NEWS_TEMPLATE;
        template.content.querySelector(".full-news-pic").style.backgroundImage = "url(" +article.image+")";
        template.content.querySelector(".full-news-title").innerHTML = article.title;
        template.content.querySelector(".full-news-summary").innerHTML = article.summary;
        template.content.querySelector(".full-news-content").innerHTML = article.content;
        template.content.querySelector(".full-news-wrapper").setAttribute('data-id',''+article.id);
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
     Handle Side News Clicks
     */

    return{
        init:init
    }
})();


window.onload = function () {
    ArticleRenderer.init();
    handleEvents.init();
}
