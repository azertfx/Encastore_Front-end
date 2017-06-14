    function refresh() { location.reload(); }
/*******************************************************/
/***********    input & textarea on click   ************/
/*******************************************************/
$( "input.focus_clk" ).focusin(function() {
  $( this ).css("border-bottom", "1px solid #00B4FF");
  $( this ).prev().css( "color", "#00B4FF" );
});
$( "input.focus_clk" ).focusout(function() {
  $( this ).css("border-bottom", "1px solid rgb(219, 219, 219)");
  $( this ).prev().css( "color", "##ABABAB" );
});
$( "textarea.focus_clk" ).focusin(function() {
  $( this ).css("border-bottom", "1px solid #00B4FF");
  $( this ).prev().css( "color", "#00B4FF" );
});
$( "textarea.focus_clk" ).focusout(function() {
  $( this ).css("border-bottom", "1px solid rgb(219, 219, 219)");
  $( this ).prev().css( "color", "##ABABAB" );
});
/********************************************************/
/***********    connexion vendeur achteur    ************/
/********************************************************/
$("#login form .prt2 .inscription").click(function(){
    $("#login form .prt2 .ven_ach_ins").slideToggle("2000");
});
/**************************************************/
/***********    menu liste on click    ************/
/**************************************************/
$("header nav ul .list1 a.vente1").click(function(){
    $("header nav ul .list1 .vente_liste").slideToggle("6000");
    $("header nav ul .list1 a.vente2").css('display','block');
    $("header nav ul .list1 a.vente1").css('display','none');
});
$("header nav ul .list1 a.vente2").click(function(){
    $("header nav ul .list1 .vente_liste").slideToggle("6000");
    $("header nav ul .list1 a.vente2").css('display','none');
    $("header nav ul .list1 a.vente1").css('display','block');
});
$("header nav ul .list1 a.compte1").click(function(){
    $("header nav ul .list1 .compte_liste").slideToggle("6000");
    $("header nav ul .list1 a.compte2").css('display','block');
    $("header nav ul .list1 a.compte1").css('display','none');
});
$("header nav ul .list1 a.compte2").click(function(){
    $("header nav ul .list1 .compte_liste").slideToggle("6000");
    $("header nav ul .list1 a.compte2").css('display','none');
    $("header nav ul .list1 a.compte1").css('display','block');
});
/*********************************************/
/***********    circle graphic    ************/
/*********************************************/
$( document ).ready(function() {
    $('#myStat1').circliful();
    $('#myStat2').circliful();
    $('#myStat3').circliful();
    $('#myStat4').circliful();
    });
/************************************************/
/***********    menu profil hover    ************/
/************************************************/
var website_width=$(window).width();

if (website_width<767) {
    $("header .prof_photo").hover(function(){
        $("header h4").slideToggle("3000");
        $("header h5").slideToggle("3000");
    });
    $("header nav ul .home a").hover(function(){
        $("header nav ul .home a .span1").slideToggle("3000");
    });
    $("header nav ul .vente_panel").hover(function(){
        $("header nav ul .list1 a.vente .vente_panel2").slideToggle("3000");
        $("header nav ul .list1 .vente_liste").slideToggle("3000");
    });
    $("header nav ul .m_compte").hover(function(){
        $("header nav ul .list1 a.vente .m_compte2").slideToggle("3000");
        $("header nav ul .list1 .compte_liste").slideToggle("3000");
    });
    $("header nav ul .list1 a.decnx").hover(function(){
        $("header nav ul .list1 a.vente .decnx2").slideToggle("3000");
    });
    $("header nav .haut_menu").click(function(){
        $(".sup_menu").slideToggle("3000");
    });
};
/*********************************************/
/***********   boutton suivant    ************/
/*********************************************/
$("section .preparation_vente .caracteristique .produit_btn input").click(function(){
    $("section .preparation_vente .caracteristique").hide(1000);
    $("section .preparation_vente .etat").show(1000);
    $("section .preparation_vente .produit_etap .prd_etat .prd_text").css({'background':'rgb(63, 199, 255)','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_etat .prd_triangle").css({'background':'rgb(63, 199, 255)','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_etat .prd_text h1").css({'color':'#fff','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_etat .prd_text .s_text h2").css({'color':'#fff','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_etat .prd_text .s_text h3").css({'color':'#fff','transition':'1s'});
});
$("section .preparation_vente .etat .produit_btn input").click(function(){
    $("section .preparation_vente .etat").hide(1000);
    $("section .preparation_vente .negociation").show(1000);
    $("section .preparation_vente .produit_etap .prd_nego .prd_text").css({'background':'rgb(63, 199, 255)','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_nego .prd_triangle").css({'background':'rgb(63, 199, 255)','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_nego .prd_text h1").css({'color':'#fff','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_nego .prd_text .s_text h2").css({'color':'#fff','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_nego .prd_text .s_text h3").css({'color':'#fff','transition':'1s'});
});
$("section .preparation_vente .negociation .produit_btn input").click(function(){
    $("section .preparation_vente .negociation").hide(1000);
    $("section .preparation_vente .prix").show(1000);
    $("section .preparation_vente .produit_etap .prd_prx .prd_text").css({'background':'rgb(63, 199, 255)','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_prx .prd_triangle").css({'background':'rgb(63, 199, 255)','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_prx .prd_text h1").css({'color':'#fff','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_prx .prd_text .s_text h2").css({'color':'#fff','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_prx .prd_text .s_text h3").css({'color':'#fff','transition':'1s'});
});
$("section .preparation_vente .prix .produit_btn input").click(function(){
    $("section .preparation_vente .prix").hide(1000);
    $("section .preparation_vente .essai").show(1000);
    $("section .preparation_vente .produit_etap .prd_ess .prd_text").css({'background':'rgb(63, 199, 255)','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_ess .prd_triangle").css({'background':'rgb(63, 199, 255)','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_ess .prd_text h1").css({'color':'#fff','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_ess .prd_text .s_text h2").css({'color':'#fff','transition':'1s'});
    $("section .preparation_vente .produit_etap .prd_ess .prd_text .s_text h3").css({'color':'#fff','transition':'1s'});
});
$("section .preparation_vente .essai .produit_btn input").click(function(){
    $("section .preparation_vente .essai").hide(1000);
    $("section .preparation_vente .produit_etap").hide(1000);
    $("section .preparation_vente h4").hide(1000);
    $("section .preparation_vente .prd_felicitation").css('display','block')
    $("body").css({'background':'#00b4ff','transition':'2s'});
});
/*******************************************************************/
/************    table de Supervision d’une vente    ***************/
/*******************************************************************/

$("section .supervision_vente .prt1 .prt1_btn:first-child").click(function(){
    $("section .supervision_vente .entes_venir").css('display','block');
    $("section .supervision_vente .entes_cours").css('display','none');
    $("section .supervision_vente .entes_valider").css('display','none');
    $("section .supervision_vente .entes_archives").css('display','none');
});
$("section .supervision_vente .prt1 .prt1_btn:nth-child(2)").click(function(){
    $("section .supervision_vente .entes_venir").css('display','none');
    $("section .supervision_vente .entes_cours").css('display','block');
    $("section .supervision_vente .entes_valider").css('display','none');
    $("section .supervision_vente .entes_archives").css('display','none');
});
$("section .supervision_vente .prt1 .prt1_btn:nth-child(3)").click(function(){
    $("section .supervision_vente .entes_venir").css('display','none');
    $("section .supervision_vente .entes_cours").css('display','none');
    $("section .supervision_vente .entes_valider").css('display','block');
    $("section .supervision_vente .entes_archives").css('display','none');
});
$("section .supervision_vente .prt1 .prt1_btn:last-child").click(function(){
    $("section .supervision_vente .entes_venir").css('display','none');
    $("section .supervision_vente .entes_cours").css('display','none');
    $("section .supervision_vente .entes_valider").css('display','none');
    $("section .supervision_vente .entes_archives").css('display','block');
});