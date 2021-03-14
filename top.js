let menu=["카테고리","로켓배송","로켓프레시","2020추석","로켓직구","골드박스","정기배송","이벤트/쿠폰","기획전","여행/티켓"];

var w=0;
var ea=menu.length;
var list_html=document.createElement("li");
while(w<ea){
    list_html.innerText+=+menu[w];
    document.getElementById("main_ul").append(list_html);
    w++;
}

function closebtn(){
    document.getElementById("topbanner").style.display="none";
}


