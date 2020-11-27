$(function(){

  //iniciando slider
  initSlider();

  pesquisa();
  
  function initSlider(){

    //seta para voltar slider
    voltSlider();
    //seta para adiantar slider
    andtSlider();

    //variaveis para funcionar seta
    var delay=10000;
    var indiceAtual = 0;
    var amt1 = $('.box-noticias').length; //conta as noticias
  
    //variaveis para funcionar slider altomatico
    var amt = $('.scroll-wraper').length;
    var sizeContainer = 100 * amt; 
    var sizeBoxSingle = 100 / sizeContainer;

    //fazendo ficar de lado, uma noticia do lado da outra (pratica)   
    $('.scroll-wraper').css('width',sizeBoxSingle+'%');
    $('.scroll-wraper').css('width',sizeContainer+'%');

    //iniciando slider

    $('.box-noticias').eq(0).fadeIn();
    setInterval( function(){
      alternarSlider();
    },delay);


    function alternarSlider(){
      $('.box-noticias').eq(indiceAtual).fadeOut();
      indiceAtual+=1;
      if(indiceAtual == amt1)
        indiceAtual=0;
      $('.box-noticias').eq(indiceAtual).fadeIn();
    }

    function voltSlider(){
      $('.voltar-noticia').click(function(){
        $('.box-noticias').eq(indiceAtual).fadeOut();
        indiceAtual-=1;
        if(indiceAtual == amt1)
          indiceAtual=0;
        $('.box-noticias').eq(indiceAtual).fadeIn();
      });
    }
  
    function andtSlider(){
      $('.adiantar-noticia').click(function(){
        $('.box-noticias').eq(indiceAtual).fadeOut();
        indiceAtual+=1;
        if(indiceAtual == amt1)
          indiceAtual=0;
        $('.box-noticias').eq(indiceAtual).fadeIn();
      });
    }
  }
  
}); 