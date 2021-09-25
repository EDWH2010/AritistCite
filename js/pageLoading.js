var homeNewsIndex = 0;
var homeLiveIndex=0;
var homeDiscoIndex=0;

window.onload = function() {
    /*
    this.onclick = function(e) {
        alert("X Position : " + e.pageX + "; Y Position : " + e.pageY);
    }
*/
    localStorage.clear();
    newsInfoDataLoading();
    liveInfoDataLoading();
    discoInfoDataLoading();

    $('.main-logo').hover(function() {
       $(this).animate({
            top:'30px'
       });
    },function(){
        $(this).animate({
            top:'60px'
       });
    });


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
    $('section.info-content').mouseover(function(){
        this.style.cursor = 'pointer';
    });
    setInterval(function(){
        imageUpdate($('div.slide-imagesShow'),1500);
    },5000);
    
    showCurrentOption(getOptionsList());
    homeInfoUpdate();
}

function newsLoading(){
    localStorage.setItem(PAGETYPE,NEWSITEM);
    alert(localStorage.getItem(PAGETYPE));

    //newsInfoDataLoading();
    alert(getInfoIndex());
    newsInfoBlockAppend(getInfoContentAll('info-content'),0,NewsInfoArray,0,10);
    appendCircleButtonToList(getNumberList(),NewsInfoArray,10);
}

function liveLoading() {
     localStorage.setItem(PAGETYPE,LIVEITEM);
   // alert(localStorage.getItem(PAGETYPE));

   // liveInfoDataLoading();
    liveInfoBlockAppend(getInfoContentAll('info-content'),0,LiveInfoArray,0,10);
    appendCircleButtonToList(getNumberList(),LiveInfoArray,10);
}

function getInfoIndex(){
   return localStorage.getItem(PAGECOUNT) !== null ? localStorage.getItem(PAGECOUNT) : 0;
}

function discoLoading(){
    localStorage.setItem(PAGETYPE,DISCOITEM);
    alert(localStorage.getItem(PAGETYPE));

    appendCircleButtonToList(getNumberList(),DiscoInfoArray,12);
    
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




//Update Home Infomation

function homeInfoUpdate(){
    setInterval(()=>{
       homeNewsInfoUpdate();
        homeLiveUpdate();

    },5000);
}

function homeNewsInfoUpdate(){
     homeNewsIndex += 3;
     if(homeNewsIndex > NewsInfoArray.length-1)
         homeNewsIndex=0;
    changeInfoContent(getInfoContentAll('info-content'),0,NewsInfoArray,homeNewsIndex,3,'info-block');

}

function homeLiveUpdate(){
    homeLiveIndex += 2;
    if(homeLiveIndex > LiveInfoArray.length-1)
        homeLiveIndex=0;
    
    changeInfoContent(getInfoContentAll('info-content'),1,NewsInfoArray,homeNewsIndex,2,'info-block');
}

function homeDiscoUpdate(){

}