var banners= 
    ["OS melhores do brasil !","Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBanner() {
    bannerrAtual = (bannerAtual +1) %2;
    documment.querySelector('h2#mensagem').textContent =
     banner [bannerAtual];


}

setInterval (trocaBanner, 2000);