'use strict';

var gNextId = 1;

function createImgs() {
    var imgs = [];

   imgs.push(_createImage('./imgs/1.jpg', ['happy']),
        _createImage('./imgs/2.jpg', ['fun']),
        _createImage('./imgs/3.jpg', ['happy']),
        _createImage('./imgs/4.jpg', ['happy']),
        _createImage('./imgs/5.jpg', ['happy']),
        _createImage('./imgs/6.jpg', ['happy']),
        _createImage('./imgs/7.jpg', ['happy']),
        _createImage('./imgs/8.jpg', ['happy']),
        _createImage('./imgs/9.jpg', ['happy']),
        _createImage('./imgs/10.jpg', ['happy']),
        _createImage('./imgs/11.jpg', ['happy']),
        _createImage('./imgs/12.jpg', ['happy']),
        _createImage('./imgs/13.jpg', ['happy']),
        _createImage('./imgs/14.jpg', ['happy']),
        _createImage('./imgs/15.jpg', ['happy']),
        _createImage('./imgs/16.jpg', ['happy']),
        _createImage('./imgs/17.jpg', ['happy']),
        _createImage('./imgs/18.jpg', ['happy']));

    return imgs;
}

function _createImage(url, keywords) {
    return {
        id: gNextId++,
        url: url,
        keywords: keywords
    };
}
