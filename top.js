let menu=["카테고리","로켓배송","로켓프레시","2020추석","로켓직구","골드박스","정기배송","이벤트/쿠폰","기획전","여행/티켓"];

var menu_id=document.getElementById("main_ul");
var menu_html;
menu.forEach(function(mkey,mnode){
    menu_html="<li></li>";
    menu_id.innerHTML += menu_html;
});