
$(function(){
    let $menu=["카테고리","로켓배송","로켓프레시","2020추석","로켓직구","골드박스","정기배송","이벤트/쿠폰","기획전","여행/티켓"];

    var $w=0;
    var $ea=$menu.length;
    while($w<$ea){
        $("#main_ul").append("<li>"+$menu[$w]+"</li> ");
        $w++;
    }

});
function closebtn(){
    document.getElementById("topbanner").style.display="none";
}
