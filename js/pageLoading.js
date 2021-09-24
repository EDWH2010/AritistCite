
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
            liveLoading();
            break;
        case 'discography':
            discoLoading();
            break;
        case 'movie':
            movieLoading();
            break;
        case 'specialize':
            specLoading();
            break;
        case 'profile':
            profileLoading();
            break;
        case 'contact':
            contactLoading();
            break;
        
    }

}

function indexLoading() {
    showCurrentOption(getOptionsList());
}

function newsLoading(){
    localStorage.setItem(PAGETYPE,NEWSITEM);

    newsInfoDataLoading();
    alert(getInfoIndex());
    newsInfoBlockAppend(getInfoContent('info-content'),NewsInfoArray,getInfoIndex() * 10,10);
    appendCircleButtonToList(getNumberList(),NewsInfoArray);
}

function liveLoading() {
     localStorage.setItem(PAGETYPE,LIVEITEM);

    liveInfoDataLoading();
    liveInfoBlockAppend(getInfoContent('info-content'),LiveInfoArray,getInfoIndex() * 10,10);
    appendCircleButtonToList(getNumberList(),LiveInfoArray);
}

function getInfoIndex(){
   return localStorage.getItem(PAGECOUNT) !== null ? localStorage.getItem(PAGECOUNT) : 0;
}

function discoLoading(){
    localStorage.setItem(PAGETYPE,DISCOITEM);
}

function movieLoading(){

}

function specLoading(){

}

function profileLoading(){

}

function contactLoading(){

}

function getPageType(){
   return localStorage.getItem(PAGETYPE);
}

function getPageCount(){
    return localStorage.getItem(PAGECOUNT);
}

function appendInfoItemByTypeByCount(){
    switch(getPageType()){
        
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

function getInfoContent(className){
    return document.querySelector('section.'+className);
}



