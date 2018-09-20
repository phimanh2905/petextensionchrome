var btnRandom = document.getElementById("btnRandom");
btnRandom.onclick = function () {
    setup();
};
document.onkeypress = function (e) {
    var e = e || window.event; // for IE to cover IEs window object
    if (e.which === 32 || e.which === 13) {
        setup();
    }
}

var imgRandom = document.getElementById("imgRandom");
var setup = function setup() {
    var arrDogType = ["husky", "Shiba Inu", "pug", "corgi"];
    var ranDog = arrDogType[Math.floor(Math.random() * arrDogType.length)];
    var host = "http://api.tenor.com/v1/random?",
        tag = "&tag=" + ranDog + "",
        key = "key=LIVDSRZULELA",
        limit = "&limit=1",
        url = host + key + tag + limit;
    getJSON(url, function (err, data) {
        imgRandom.src = "" + data.results[0].media[0].mediumgif.url + "";
    });
};
var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};