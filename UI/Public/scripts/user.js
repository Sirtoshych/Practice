/**
 * Created by Sirtoshych on 4/4/2017.
 */
var user = (function () {
    var USERNAME = 'GUEST';
    var PASSWORD;
    var REGISTERED = [];
    var LOGIN;
    var ISLOGGED;
    function init() {
        ISLOGGED = false;
        LOGIN = document.querySelector('.login');
        LOGIN.addEventListener('click',login);
        PASSWORD = 'GUEST';
        REGISTERED[0] = {
            username: 'ADMIN',
            password: 'ADMIN'
        };
    }
    var check = function(){
        return ISLOGGED;
    }
    var returnUser = function () {
        return USERNAME.toString()
    }
    var changeStatus = function(){
        USERNAME = document.getElementById('username').value;
        PASSWORD = document.getElementById('password').value;
    }
    var login = function(event){
        if (!ISLOGGED) {
            var flag = false;
            var USER_ATEMPT = {
                username: '' + document.getElementById('username').value,
                password: '' + document.getElementById('password').value
            }
            for (var i = 0; i < REGISTERED.length; i++) {
                if (REGISTERED[i].username === '' + USER_ATEMPT.username)
                    if (REGISTERED[i].password === USER_ATEMPT.password)
                        flag = true;
            }
            if (flag) {
                ISLOGGED = true;
                alert('Welcome, ADMIN!');
                changeStatus();
                showElements();
            }
            else
                document.getElementById('username').value = 'Incorrect info';
        }
        else{
            ISLOGGED = false;
            document.getElementById("username").style.visibility = 'visible';
            document.getElementById("username").value = 'Username';
            document.getElementById("password").value = 'password';
            document.getElementById("password").style.visibility = 'visible';
            hideElements();
        }

    }

    var registerUser = function (username, password) {
        var NEWUSER = {
            Username: username,
            Password: password
        }
        REGISTERED.appendChild(NEWUSER);
    };
    var  showElements = function(){
        var delete_elem = document.querySelectorAll('.delete');
        delete_elem.forEach(function (item) {
            item.style.visibility = 'visible';
            return item;
        });
        var edit_elem = document.querySelectorAll('.edit');
        edit_elem.forEach(function (item) {
            item.style.visibility = 'visible';
            return item;
        })
        var add_news = document.querySelector(".add-news")
        add_news.innerText = 'Add news';
        document.querySelector(".login").innerText = 'Logout';
        document.getElementById("username").style.visibility = 'collapse';
        document.getElementById("password").style.visibility = 'collapse';
        document.querySelector(".status").style.visibility = 'visible';
        document.querySelector(".status").innerHTML = 'Logged in as ' + USERNAME;
    }
    var hideElements = function() {
        var delete_elem = document.querySelectorAll('.delete');
        delete_elem.forEach(function (item) {
            item.style.visibility = 'hidden';
            return item;
        });
        var edit_elem = document.querySelectorAll('.edit');
        edit_elem.forEach(function (item) {
            item.style.visibility = 'hidden';
            return item;
        });

        if (!ISLOGGED) {
            var add_news = document.querySelector(".add-news")
            add_news.innerText = 'Login to add news';
            document.querySelector(".login").innerText = 'Login';
            document.querySelector(".status").style.visibility = 'hidden';
        }

    };
    return{
        nick: returnUser,
        islogged: check,
        init: init,
        hide: hideElements
    }
})();
