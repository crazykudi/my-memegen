'use strict';

function renderTxtsEditor() {
    var strHtml = gMeme.txts.map(function (txt, idx) {
        return `
                <div class="control-box">
                    
                    <div class="button-line">
                    <div><input type="text" data-property="line" placeholder="${txt.line}" oninput="editTxt(this,${idx})"></div>
                    
                    <button title="Delete Line" onclick="deleteTxt(${idx})"><img class="icon-bg" src="./ICONS/trash.png"><i class="fas"></i></button>
                    <button title="Add New Line" onclick="onNewTxtBtnClicked()"><img class="icon-bg" src="./ICONS/add.png"><i class="fas"></i></button>
                    <button value="${txt.size}" title="Increase Font Size" data-property="size" onclick="editTxt(this ,${idx},1)"><img class="icon-bg" src="./ICONS/increase font - icon.png"></button>
                    <button value="${txt.size}" title="Decrease Font Size" data-property="size" onclick="editTxt(this ,${idx},-1)"><img class="icon-bg" src="./ICONS/decrease font - icon.png"></button>
                    </div>
                    
                    <div class="button-line padding">
                    <button value="right" title="Align to Right" data-property="align" onclick="editTxt(this ,${idx},value)"><img class="icon-bg" src="./ICONS/align-to-left.png"></button>
                    <button value="center" title="Align to Center" data-property="align" onclick="editTxt(this ,${idx},value)"><img class="icon-bg" src="./ICONS/center-text-alignment.png"></button>
                    <button value="left" title="Align to Left" "data-property="align" onclick="editTxt(this ,${idx},value)"><img class="icon-bg" src="./ICONS/align-to-right.png"></button>
                    </div>

                    <div style="margin:12px;">
                    <i class="fas fa-text-height"></i> <input type="range" value="${txt.size}"  min="10" step="5" data-property="size" oninput="editTxt(this ,${idx})">
                    </div>  

                    <div class="button-line">
                    <label for="color">Text Color:</label>
                    <input type="color" title="Select Text Color" value="${txt.color}" data-property="color" oninput="editTxt(this,${idx})">
                    </div>

                    <div class="button-line">
                    <label for="fontFamily">Font Family:</label>
                    <select title="Select Font Family" class=select-css data-property="fontFamily" oninput="editTxt(this,${idx})">
                    <option value="${txt.fontFamily}">${txt.fontFamily}</option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="Geneva">Geneva</option>
                    <option value="Verdana">Verdana</option>
                    </select>
                    </div>

                    <div class="button-line">
                    <label for="textPos">Text Position:</label>
                    <i class="fas fa-arrows-alt-h"></i> <input type="number" value="${txt.x}"  min="0" step="5" data-property="x" oninput="editTxt(this ,${idx})">
                    <i class="fas fa-arrows-alt-v"></i> <input type="number" value="${txt.y}"  min="0" step="5" data-property="y" oninput="editTxt(this ,${idx})">
                    </div>

                    <div class="button-line">
                    <input id="outline" type="checkbox" data-property="isOutline" checked onclick="editTxt(this,${idx})">
                    <label for="outline">Outline</label>
                    Width: <input type="number" value="${txt.lineWidth}"  min="0" step="1" data-property="lineWidth" oninput="editTxt(this ,${idx})">
                    <input type="color" title="Select Outline Color" value="${txt.strokeStyle}" data-property="strokeStyle" oninput="editTxt(this,${idx})">
                    </div>
                    
                    <div class="button-line">
                    <input id="shadow" type="checkbox" data-property="isShadow" onclick="editTxt(this,${idx})">
                    <label for="shadow">Shadow:</label>
                    <input type="color" title="Select Shadow Color" value="${txt.shadowColor}" data-property="shadowColor" oninput="editTxt(this,${idx})">
                    <i class="fas fa-arrows-alt-h"></i> <input type="number" value="${txt.shadowOffsetX}"  step="1" data-property="shadowOffsetX" oninput="editTxt(this ,${idx})">
                    <i class="fas fa-arrows-alt-v"></i> <input type="number" value="${txt.shadowOffsetY}"  step="5" data-property="shadowOffsetY" oninput="editTxt(this ,${idx})">
                    Blur: <input type="number" value="${txt.shadowBlur}" data-property="shadowBlur" oninput="editTxt(this,${idx})">
                    </div>
                    

                    <div class="button-line"> 
                    <button class="button-control-box">
                    <a id="dl" download="my-new-meme.png" title="Download Your Meme!!!" href="#" onclick="onDownloadMeme(this)">Download</a>
                    </button>
                    </div>

                </div>
             `
    })
        .join(' ');

    document.querySelector('.txts-list').innerHTML = strHtml;

}

