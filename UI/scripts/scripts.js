
var articleHandler = (function (){
    var sideNewsArticles= [
        { /* sidenews column 1 row 1 */
            id: '2',
            title: 'Вице-спикер парламента встретился с оппозицией: готовятся изменения в декрет о тунеядца',
            summary: 'В декрет о тунеядцах готовятся изменения: уже в ближайшее время список социальных иждивенцев могут серьезно сократить. Об этом TUT.BY рассказал один из ',
            createdAt: new Date('2017-02-27T22:00:00'),
            author: 'Максим',
            content: 'Сам зампредседателя Палаты представителей в разговоре с корреспондентом TUT.BY уточнил, что власти не планируют отменять декрет. А изменения будут подготовлены не позднее середины марта.',
            tags: ['Society','Politics']
        },
        {   /* sidenews column 2 row 1 */
            id: '3',
            title: 'LOL KEK',
            summary: 'На Белорусской валютно-фондовой бирже 6 марта прошли очередные торги валютами. Курс рубля снизился к евро и российскому рублю.',
            createdAt: new Date('2017-02-27T21:00:00'),
            author: 'Влад',
            content: 'Доллар снизился на BYN0,011 — до 1,9031 рубля.Евро вырос на BYN0,0072 — до 2,0203 рубля.Российский рубль укрепился на BYN0,0146 — до 3,2651 за 100 российских рублей.',
            tags:['Politics','Finance']

        },
        {   /* sidenews column 1 row 2 */
            id: '4',
            title: 'Алексис покинет «Арсенал» летом. ',
            summary: 'Сообщается, что чилиец окончательно разругался с Венгером и по предводительным данным перейдет в стан Милана. ',
            createdAt: new Date('2017-02-27T21:00:00'),
            author: 'Серега',
            content: 'Сумма трансфера не превысит 70 миллионов €.',
            tags: ['Sport', 'Popular']
        },
        {   /* sidenews column 2 row 2 */
            id: '5',
            title: 'Японец Миура стал самым возрастным футболистом в истории',
            summary: 'Нападающий Кадзуёси Миура, выступающий за клуб второго по силе дивизиона чемпионата Японии, вышел в стартовом составе в возрасте 50 лет и 7 дней.',
            createdAt: new Date('2017-02-27T20:00:00'),
            author: 'Ля',
            content: 'Таким образом игрок побил достижение английского футболиста Стэнли Мэтьюза, который в 1965 году в возрасте 50 лет и 5 дней провел официальный матч в составе "Сток Сити".',
            tags: ['Sport', 'Health']

        }
    ]
    var articles = [

        {
            id: '6',
            title: 'В Крыму полиция разогнала детский футбольный матч, объявив его незаконным митингом.',
            summary: '4 марта сотрудники полиции в Феодосии разогнали детский футбольный матч, объявив его «несанкционированным террористическим митингом».',
            createdAt: new Date('2017-02-27T19:00:00'),
            author: 'До',
            content: '«Сегодня в селе Краснокаменка состоялся матч между дворовыми командами, который прервали директор школы и участковый, объяснив это тем, что мы проводим несанкционированный террористический митинг',
            tags: ['Sport','Politics']
        },
        {
            id: '7',
            title: 'Министр Заяц гарантирует Данкверту, что тот вернется в Россию после визита в Беларусь',
            summary: 'Беларусь на совместной с Минсельхозом России коллегии планирует обсудить поставки своей продукции.',
            createdAt: new Date('2017-02-27T18:00:00'),
            author: 'Ре',
            content: 'По его словам, коллегия должна состояться в марте. Российской стороне было направлено предложение провести ее до 10 марта, ',
            tags: ['Politics', 'Society']
        },
        {
            id: '8',
            title: 'В Бресте идут суды над участниками "Марша нетунеядцев"',
            summary: 'Суд Ленинского района Бреста 6 марта рассматривает административные дела в отношении представителей анархистского движения,',
            createdAt: new Date('2017-02-27T17:00:00'),
            author: 'Ми',
            content: '6 марта в Бресте начался суд над задержанными анархистами. Накануне вечером они были доставлены в ИВС Ленинского РОВД, где провели ночь.',
            tags: ['Politics','Society']

        },
        {
            id: '9',
            title: 'МАРТ подготовил революционный проект указа для предприятий ритейла, общепита и бытовых услуг',
            summary: 'Министерство антимонопольного регулирования и торговли подготовило проект указа президента, предполагающий мораторий на проверки до конца 2020 года',
            createdAt: new Date('2017-02-27T16:00:00'),
            author: 'фа',
            content: 'Проект предусматривает введение до 31 декабря 2020 года моратория на проведение плановых проверок профильных субъектов хозяйствования, за исключением проверок санитарного и пожарного надзора, контроля за выполнением лицензионных требований и ведомственного контроля.',
            tags: ['Health', 'Society']

        },
        {
            id: '10',
            title: 'Исполнителей двойного убийства в Минске приговорили к пожизненному, заказчицу — к 12 годам',
            summary: 'Минский городской суд приговорил исполнителей заказного убийства молодой пары в декабре 2015 г. в Минске, а также убийства мужчины в Колодищах к пожизненному заключению с конфискацией имущества.',
            createdAt: new Date('2017-02-27T15:00:00'),
            author: 'Соль',
            content: 'Напомним, по версии следствия, причиной трагедии в Минске стала ревность: 27-летняя воспитательница детсада Алина Шульганова хотела вернуть бывшего парня. Она попросила соседа по дому Александра Жильникова (ранее судимого) и его приятеля Вячеслава Сухарко «отправить» соперницу в больницу на пару недель — избить.',
            tags: ['Society','Health']

        },
        {
            id: '11',
            title: 'Трамп подписал новый иммиграционный указ ',
            summary: 'Президент США Дональд Трамп подписал новый указ об ужесточении миграционной политики, сообщили представители Белого дома. Он вступает в силу с 16 марта.',
            createdAt: new Date('2017-02-27T14:00:00'),
            author: 'Ля',
            content: 'По их словам, глава государства поставил свою подпись под документом «этим утром», сама церемония прошла в закрытом для прессы режиме',
            tags: ['Politics', 'Society']

        },
        {
            id: '12',
            title: 'Минтранс не будет вносить изменения в механизм сбора дорожного налога',
            summary: 'Минтранс не будет вносить изменения в механизм сбора дорожного налога,. Об этом на пресс-конференции сказал министр транспорта и коммуникаций Беларуси Анатолий Сивак.',
            createdAt: new Date('2017-02-27T13:00:00'),
            author: 'Си',
            content: 'Рабочая группа, созданная при Минтрансе, подготовила доклад в правительство о том, какие местные дороги требуют ремонта и из каких источников это будет финансироваться. Несмотря на то, что предложения по этим вопросам отправлены в Совмин, решения по ним не окончательные и будут обсуждаться.',
            tags:['Society', 'Health']
        },
        {
            id: '13',
            title: 'Самолет, БТР и весна. Топ-10 снимков Минска в Instagram за неделю',
            summary: 'TUT.BY продолжает отбирать самые интересные из ваших фото в Instagram,',
            createdAt: new Date('2017-02-27T12:00:00'),
            author: 'Иван',
            content: 'TUT.BY продолжает отбирать самые интересные из ваших фото в Instagram, которые сделаны в Минске за семь дней. В сегодняшней подборке — весна, котик, самолет на Октябрьской площади и БТР в центре столицы.',
            tags:['Society','Popular']

        },
        {
            id: '14',
            title: 'Крупный теннисный центр в Минске будет соседствовать с храмом "Всех скорбящих радость" ',
            summary: 'Близится к завершению строительство крупного физкультурно-оздоровительного комплекса с теннисными кортами на улице Е. Полоцкой в Минске. ',
            createdAt: new Date('2017-02-27T11:00:00'),
            author: 'Иванов',
            content: 'ФОК расположен практически рядом с церковью иконы Божией Матери «Всех скорбящих радость». Ранее на этом месте была одна из баз коммунальных служб города. Данную территорию уже давно планировалось облагородить.',
            tags:['Sport', 'Society','Health']

        },
        {
            id: '15',
            title: 'Кухни от фабрики "ГеосИдеал". Весенние скидки до 20%',
            summary: 'Перезимовали! Весна вступила в свои права и требует обновления всего: пейзажа за окном, гардероба, обстановки в квартире...',
            createdAt: new Date('2017-02-27T10:00:00'),
            author: 'Стефаненко',
            content: 'Требует изменить взгляд на мир, что-то поменять в себе… Или на кухне...'     ,
            tags: ['Health','Society']
        },
        {
            id: '16',
            title: 'В Британии предотвратили 13 терактов за четыре года ',
            summary: 'Службы безопасности предотвратили 13 потенциальных терактов в Британии с июня 2013 года',
            createdAt: new Date('2017-02-27T09:00:00'),
            author: 'Алисейко',
            content: 'Он рассказал об этих данных, представляя информационную кампанию Action Counters Terrorism «Действия против терроризма», которая призывает общественность сообщать в полицию о своих подозрениях.',
            tags: ['Politics', 'Health', 'Society']

        },
        {
            id: '17',
            title: 'Как отказать президенту. 10 человек, ушедших от Трампа',
            summary: 'На фоне скандала, связанного с генпрокурором США Джефом Сешнсом, который рискует повторить судьбу экс-советника',
            createdAt: new Date('2017-02-27T08:00:00'),
            author: 'ГГВП',
            content: 'В США, где особенно пестуется и уважается патриотизм, «предательство национальных интересов» звучит как тяжелейшее обвинение, а престиж государственной службы очень велик, не принято просто так отказываться от предложений занять государственные должности.',
            tags: ['Politics','Health', 'Society']

        },
        {
            id: '18',
            title: 'В Барановичском районе BMW опрокинулся в кювет и сгорел',
            summary: 'Авария произошла 6 марта, около 07.40, в Барановичском районе. Об этом сообщили в ГАИ УВД Брестского облисполкома.',
            createdAt: new Date('2017-02-27T07:00:00'),
            author: 'И',
            content: '— По предварительной информации, 23-летний водитель BMW 320 ехал по подъезду от а/д Р108 к деревне Шпаковцы. На закруглении дороги влево он не справился с управлением, автомобиль съехал в левый кювет, опрокинулся и загорелся, — сказали в ГАИ.',
            tags: ['Society', 'Health']

        },
        {
            id: '19',
            title: 'Брестскую активистку выпустили из психоневрологического диспансера',
            summary: 'Брестскую активистку «Молодой Беларуси» Наталью Папкову отпустили из психоневрологического диспансера, куда',
            createdAt: new Date('2017-02-27T06:0:00'),
            author: 'ы',
            content: 'По словам Папковой, ее задержали в пятницу по санкции прокурора Бреста из-за того, что ее соседи якобы сообщили о планах активистки покончить жизнь самоубийством. Папкова эти домыслы категорически отрицает.',
            tags: ['Society', 'Politics']

        },
        {
            id: '20',
            title: '"Для этого мы найдем деньги". Президент встретился с номинантами на Госпремию в области искусства ',
            summary: 'Деятелям культуры необходимо создавать произведения о наших людях, «чтобы народ валом шел».',
            createdAt: new Date('2017-02-27T05:00:00'),
            author: 'Гы',
            content: '«Я ехал и думал, что мы в средствах массовой информации совсем мало говорим об этих достижениях», — сказал глава государства.',
            tags: ['Politics', 'Society']

        }
    ];
    var mainArticle = [{ /* main news */
        id: '1',
        title: "Минское «Динамо» обыграло ярославский «Локомотив»'",
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:00:00'),
        author: 'Иванов ',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ['Sport','Health','Society']
    }]
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
    }
    var getArticle = function (id){
        for (var i = 0; i < articles.length; i++)
            if (articles[i].id == id)
                return articles[i];
        return false;
    }
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
    }
    var addArticle = function (article){
        if (validateArticle(article))
            articles.push(article);
        else
            return false;
        return true;
    }
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
    }


    var fillSideNews = function (article) {
        var side_news = document.getElementById('side-news-table')
        var side_news_titles = side_news.getElementsByTagName('h3')
        for (var i = 0 ; i< side_news_titles.length; i++)
            side_news_titles[i].innerHTML = sideNewsArticles[i].title

        var side_news_summaries = side_news.getElementsByClassName('sidenews-p')
        for (var i = 0 ; i< side_news_titles.length; i++)
            side_news_summaries[i].innerHTML = sideNewsArticles[i].summary

        for (var i = 0 ; i< side_news.getElementsByClassName('author').length; i++)
            side_news.getElementsByClassName('author')[i].innerHTML = sideNewsArticles[i].author

        return side_news;
    }


    var fillRecentNews = function (article) {
        var recent_news = document.getElementsByClassName('right')
        var t = recent_news[0].getElementsByClassName("recent-news")
        var temp = t[0].getElementsByClassName('recent')
        for (var i = 0; i < temp.length; i++)
            temp[i].innerHTML = articles[i].summary
        return recent_news;
    }
    var removeArticle = function (id){
        for (var i = 0; i <articles.length; i ++)
            if (articles[i].id == id)
                break;
        if (i != articles.length){
            articles.splice(i,1);
            return true;
        }
        return false;
    }
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
    }
    var fillMainNews = function(article){
        var main_news_summary = document.getElementsByClassName('main-news-disc')

        var h2 = document.getElementsByTagName("h2")

        h2[0].innerHTML = mainArticle[0].title;

        var sum = main_news_summary[0].getElementsByClassName('mainnews-p');
        sum[0].innerHTML = mainArticle[0].summary;

        var author = main_news_summary[0].getElementsByClassName('author');
        author[0].innerHTML = mainArticle[0].author;
        return main_news_summary;
    }

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
    }
    return{
        getMultiple: getArticles,
        getById: getArticle,
        isValid: validateArticle,
        add: addArticle,
        edit: editArticle,
        remove: removeArticle,
        tags: alltags,
        fillMain: fillMainNews,
        fillSideNews: fillSideNews,
        fillRecent: fillRecentNews,
        articles: articles
    };
})();
var ar = {
    id: '22',
    title: "Test news",
    summary: 'Test summary',
    createdAt: new Date('2017-02-27T23:00:00'),
    author: 'Test Author',
    content: 'Test content',
    tags: ['Sport','Health','Society']

}
var User = null;
if (User != null) {
    var Username = document.getElementsByClassName("username")
    Username[0].innerHTML = 'Logged in as ' + User
}
if (User == null ){
    var e = document.getElementsByClassName("edit")
    for (var i = 0; i < e.length; i++)
    e[i].style.visibility = 'hidden'

    var d = document.getElementsByClassName("delete")
    for (var i = 0; i < e.length; i++)
    d[i].style.visibility = 'hidden'
}
console.log(  articleHandler.getMultiple())
console.log(articleHandler.add(ar))
console.log(  articleHandler.getMultiple())
console.log(articleHandler.edit(22,{ title: 'New title'}))
console.log(  articleHandler.remove(22))
articleHandler.fillMain()
articleHandler.fillRecent()
articleHandler.fillSideNews()








