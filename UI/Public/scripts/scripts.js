/*
TO DO list:
1. fix validation
2. fix app.js (task 8)
3. fix main news
4. fix delete sidenews
 */
var articleHandler = (function (){

    Articles = serverWoker.getArticles();

    var alltags = ['Politics','Sport','Society','Finance','Health','Technology','People','Cars','Football','Popular','Default']
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
    var checkNewsForTag = function(tag,article){
        if (article.tags.indexOf(tag) == -1)
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
        articles: Articles,
        tagcheck: checkNewsForTag
    };
})();
var configFilter = (function () {
  var TOP_BAR;
  var ALL_TAGS;
  var filter;
  function init() {
      ALL_TAGS = articleHandler.tags;
      TOP_BAR = document.getElementById('top-table');
      TOP_BAR.addEventListener('click', handleFilterChange);
  }
  function handleFilterChange(event) {
      var target = event.target;
      while (target.nodeName !== 'BUTTON'){
          target = target.parentNode;
      }
      filter = target.querySelector('.toptext').textContent;
      if (filter === 'Home')
          filter = 'Default'
      ArticleRenderer.delSid();
      ArticleRenderer.fillSide(filter);
      ArticleRenderer.delRec();
      ArticleRenderer.fillRecent(filter);
      if (!user.islogged())
            user.hide();

  }
  return{
      init: init,
      filter: filter
  }
})();

window.onload = function () {
    user.init();

    ArticleRenderer.init();

    handleEvents.init();
    configFilter.init();
    if(!user.isLogged)
        user.hide();



}
