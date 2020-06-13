'use strict';

var gNextId = 1;

function createImgs() {
    var imgs = [];

   imgs.push(_createImage('./imgs/1.jpg', ['Men']),
        _createImage('./imgs/2.jpg', ['Pets']),
        _createImage('./imgs/3.jpg', ['Babies, Pets']),
        _createImage('./imgs/4.jpg', ['Pets']),
        _createImage('./imgs/5.jpg', ['Babies']),
        _createImage('./imgs/6.jpg', ['Men']),
        _createImage('./imgs/7.jpg', ['Babies']),
        _createImage('./imgs/8.jpg', ['Men']),
        _createImage('./imgs/9.jpg', ['Babies']),
        _createImage('./imgs/10.jpg', ['Men']),
        _createImage('./imgs/11.jpg', ['Men']),
        _createImage('./imgs/12.jpg', ['Men']),
        _createImage('./imgs/13.jpg', ['Men']),
        _createImage('./imgs/14.jpg', ['Men']),
        _createImage('./imgs/15.jpg', ['Men']),
        _createImage('./imgs/16.jpg', ['Men']),
        _createImage('./imgs/17.jpg', ['Men']),
        _createImage('./imgs/18.jpg', ['Cartoon']));

    return imgs;
}

function _createImage(url, keywords) {
    return {
        id: gNextId++,
        url: url,
        keywords: keywords
    };
}
