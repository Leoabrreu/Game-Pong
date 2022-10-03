//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade bolinha
let velocidadeX = 6;
let velocidadeY =6;

//variaveis raquete1
let xRaquete1 = 5;
let yRaquete1 = 150;
let larguraRaquete1 = 10;
let alturaRaquete1 = 90;

//variaveis raquete2
let xRaquete2 = 585;
let yRaquete2 = 150;
let larguraRaquete2 = 10;
let alturaRaquete2 = 90;
let velocidadeYRaquete2;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
   ponto = loadSound("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete1, yRaquete1);
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaRaquete();
  verificaColisaoRaquete1(xRaquete1, yRaquete1);
  movimentaRaquete2();
verificaColisaoRaquete(xRaquete2, yRaquete2);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}

function verificaColisaoBorda(){
    if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    velocidadeX *= -1;
  }
  if (yBolinha + raio > height ||
      yBolinha - raio < 0){
      velocidadeY *= -1;
      }
}

function mostraRaquete(x, y){
  rect(x, y, larguraRaquete1, alturaRaquete1);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
  yRaquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
  yRaquete1 += 10;
  }
}

function verificaColisaoRaquete1(){
  if (xBolinha - raio < xRaquete1 + larguraRaquete1
      && yBolinha - raio < yRaquete1 + alturaRaquete1 && 
     yBolinha + raio > yRaquete1){
 
  velocidadeX *= -1;
 }
}

function verificaColisaoRaquete(x, y){
  colidiu = 
  collideRectCircle(x, y, larguraRaquete1, alturaRaquete1, xBolinha, yBolinha, raio);
  if (colidiu){
  velocidadeX *= -1;
  }
}

function movimentaRaquete2(){
 if (keyIsDown(87)){
  yRaquete2 -= 10;
  }
  if (keyIsDown(83)){
  yRaquete2 += 10;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
 meusPontos += 1;
  }
  if (xBolinha < 10){
 pontosOponente +=1;
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
