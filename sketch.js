
//Criando variáveis
var database;
  var jogador;
var jogo;
  var formulario;
var n_jogadores;
  var estado;
var carro1;
  var carro2;
var g_gasolina;
  var g_moeda;
var g_obstaculo1;
  var g_obstaculo2;

//Criando matrizes
var m_carros = [];
  var allPlayers;


//Criando variáveis imagens
var fundoimg;
  var carro1img;
var carro2img;
  var pistaimg;
var gasolinaimg;
  var moedaimg;
var o1img;
  var o2img;


//Carregando imagens
function preload(){

  fundoimg = loadImage("./assets/planodefundo.png");
    carro1img = loadImage("./assets/carro1.png");
  carro2img = loadImage("./assets/carro2.png");
    pistaimg = loadImage("./assets/pista.jpg");
  gasolinaimg = loadImage("./assets/galao.png");
    moedaimg = loadImage("./assets/moeda.png");
  o1img = loadImage("./assets/o1.png");
    o2img = loadImage("./assets/o2.png");


}

function setup(){
  //Criando base de dados
  database = firebase.database();
    createCanvas(windowWidth,windowHeight);


    //Criando jogo
      jogo = new Game();
        jogo.start();
      jogo.verificar();




}


function draw(){
  background(fundoimg);

  if (n_jogadores===2){

    jogo.atualizar_estado(1);
  }
    if (estado===1){

      jogo.play();
    }




}

//=========================================[-] FUNÇ0E5 PER50N4L1Z4D45 [-]=========================================

function windowResized(){

  resizeCanvas(windowWidth,windowHeight);
}