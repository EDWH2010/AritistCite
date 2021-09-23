
window.onload = function() {
    /*
    this.onclick = function(e) {
        alert("X Position : " + e.pageX + "; Y Position : " + e.pageY);
    }
*/


    switch(getFileName()) {
        case 'index':
            showCurrentOption(getOptionsList());
            break;
        case 'news':
            newsInfoDataLoading();
            appendInfoBlock(0,10);
            break;
        case 'live':
            break;
        case 'discography':
            break;
        case 'movie':
            break;
        case 'specialize':
            break;
        case 'profile':
            break;
        case 'contact':
            break;
        
    }

}

function getOptionsList(){
    return $('header div.selection-list ul');
}

function showCurrentOption(list,option=''){
    var $lst = $(list);
    var options = $lst.children();

    options.each((e)=>{

    });
}

function appendInfoBlock(start,count){
    let element = document.querySelector('article#main-article section.info-content');
    const infoBlocks = [];
    for(let e of element.childNodes){
        if(e.tagName == 'DIV'){
            infoBlocks.push(e);
            alert(e.tagName);
        }
    }

    return;

    newInfoBlockAppend(element,NewsInfoArray,start,count);
}

function detectIsRightClass(element,cName){
    if(element.tagName == 'DIV' && element.className == cName){
        return true;
    }
    return false;
}

function getFileName(isEx=false){
    let href = window.location.href;
    let hArr = href.split('/');

    return isEx ? hArr[hArr.length-1]:hArr[hArr.length-1].substring(0,hArr[hArr.length-1].indexOf('.'));
}

function appendNewsBlock(){
    let ele = document.querySelector('article#main-article section.info-content');
    newInfoBlockAppend(ele,NewsInfoArray,5,3);
}