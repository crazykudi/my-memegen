'use strict';

var gMeme;
var gCtx;
var gImgObj;

function _createGmeme(imgId) {
    return {
        selectedImgId: imgId,
        txts: [_createTxt('Type here ...', 150, 70), _createTxt('Type here ...', 150, 300)]
    };
}

function _createTxt(line, x, y) {
    return {
        line: line,
        size: 40,
        align: 'left',
        color: '#000000',
        fontFamily: 'Impact',
        isOutline: true,
        lineWidth: 2,
        strokeStyle: '#ffffff',
        isShadow: false,
        shadowColor: '#000000',
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 0,
        x: x,
        y: y
    };
}

function initMemeEditor(imgId) {
    toggleView();
    gMeme = _createGmeme(imgId);
    initCanvas();
    renderTxtsEditor();
}

function initCanvas() {

    var canvas = document.querySelector('.memeCanvas');
    gCtx = canvas.getContext('2d');

    gImgObj = new Image();
    gImgObj.src = getImgSrc();

    gImgObj.onload = function () {
        canvas.width = gImgObj.width;
        canvas.height = gImgObj.height;
        gMeme.txts[1].y = gImgObj.height - 70;

        drawCanvas();
    };
}

function getImgSrc() {
    var imgIdx = gImgs.findIndex(function (img) {
        return gMeme.selectedImgId === img.id;
    });

    return gImgs[imgIdx].url;
}

function drawCanvas() {
    gCtx.drawImage(gImgObj, 0, 0);

    gMeme.txts.forEach(function (txt) {
        drawTxt(txt);
    });

}

function drawTxt(txt) {
    gCtx.font = txt.size + 'px' + ' ' + txt.fontFamily;
    gCtx.textAlign = txt.align;
    gCtx.fillStyle = txt.color;
    if (txt.isShadow) addTxtShadow(txt);
    if (txt.isOutline) addTxtOutline(txt);

    gCtx.fillText(txt.line, txt.x, txt.y);
}

function addTxtShadow(txt) {
    gCtx.shadowColor = txt.shadowColor;
    gCtx.shadowOffsetX = txt.shadowOffsetX;
    gCtx.shadowOffsetY = txt.shadowOffsetY;
    gCtx.shadowBlur = txt.shadowBlur;
}

function addTxtOutline(txt) {
    gCtx.strokeStyle = txt.strokeStyle;
    gCtx.lineWidth = txt.lineWidth;
    gCtx.strokeText(txt.line, txt.x, txt.y);
}

function editTxt(elinput, txtIdx, diff) {
    // debugger;
    var property = elinput.dataset.property;
    console.log(elinput.type);
    var value;

    switch (elinput.type) {
        case 'select-one':
            value = elinput.options[elinput.selectedIndex].value;
            break;
        case 'checkbox':
            value = elinput.checked;
            break;
        case 'submit':
            if (property === 'align') {
                value = elinput.value;
            }
            else {
                value = gMeme.txts[txtIdx][property] + diff;
            }
            break;
        default:
            value = elinput.value;
            break;
    }
    gMeme.txts[txtIdx][property] = value;

    drawCanvas();
}

function onNewTxtBtnClicked() {
    gMeme.txts.push(_createTxt('Type here ...   ', 150, 150));
    drawCanvas();
    renderTxtsEditor();
}

function deleteTxt(txtIdx) {
    gMeme.txts.splice(txtIdx, 1);
    drawCanvas();
    renderTxtsEditor();
}

function onDownloadMeme(eldllink) {
    var canvas = document.querySelector('.memeCanvas');

    var dt = canvas.toDataURL('image/png');
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=canvas.png');
    eldllink.href = dt;
    elLink.download = 'my_new_meme.png';

}

function toggleView() {
    document.querySelector('.meme-container').classList.toggle('hidden');
    document.querySelector('.gallery').classList.toggle('hidden');
    document.querySelector('.about-container').classList.toggle('hidden');
}
