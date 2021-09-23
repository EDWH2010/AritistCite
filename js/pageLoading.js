
window.onload = function() {
    /*
    this.onclick = function(e) {
        alert("X Position : " + e.pageX + "; Y Position : " + e.pageY);
    }
*/

    switch(getFileName()) {
        case 'index':
            indexLoading();
            break;
        case 'news':
            newsLoading();
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

function indexLoading() {
    showCurrentOption(getOptionsList());
}

function newsLoading(){
    newsInfoDataLoading();
    appendInfoBlock(0,10);
}

function liveLoading() {

}

function discoLoading(){

}

function movieLoading(){

}

function specLoading(){

}

function profileLoading(){

}

function contactLoading(){

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

function appendInfoBlock(start,count){
    let element = document.querySelector('article#main-article section.info-content');
    infoBlockAppend(element,NewsInfoArray,start,count);
}

function appendLiveInfoBlock(start,count){

}

function appendDisInfoBlock(start,count){

}

function appendMovieInfoBlock(start,count){

}




//clear child method
function clearChildNodes(block){
    let child = block.childNodes;
    for(let c of child){
        block.removeChild(c);
    }
}


