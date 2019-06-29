var button = document.getElementById('userButton');
button.addEventListener('click', function () {
    //нашли наш контейнер
    var ta = document.getElementById('copytext');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch(err) {
        console.log('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});
var button = document.getElementById('userButton1');
button.addEventListener('click', function () {
    //нашли наш контейнер
    var ta = document.getElementById('copytext1');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch(err) {
        console.log('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});
var button = document.getElementById('userButton2');
button.addEventListener('click', function () {
    //нашли наш контейнер
    var ta = document.getElementById('copytext2');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch(err) {
        console.log('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});
var button = document.getElementById('userButton3');
button.addEventListener('click', function () {
    //нашли наш контейнер
    var ta = document.getElementById('copytext3');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch(err) {
        console.log('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});
var button = document.getElementById('userButton4');
button.addEventListener('click', function () {
    //нашли наш контейнер
    var ta = document.getElementById('copytext4');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch(err) {
        console.log('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});