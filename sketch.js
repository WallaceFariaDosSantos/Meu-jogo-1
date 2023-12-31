//constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variáveis
var engine, world, canvas;
var player, elementFire, elementWater, elementEarth, elementAir, elementDarkness, playerHealth, playerAtributes;
var playerLevel, backgroundImg, controlButton, startButton;
var rat, tree, rock, money;
var cavaleiro, cavaleiroPulando, cavaleiroAtacando, cavaleiroCaindo, cavaleiroCorrendo, cavaleiroParado;
var level = 0;

//função preload
function preload(){
  cavaleiroAtacando = loadImage("./assets/CavaleiroAtacando.gif");
  cavaleiroPulando = loadImage("./assets/CavaleiroPulando.png");
  cavaleiroCaindo = loadImage("./assets/CaindoNoChão.gif");
  cavaleiroParado = loadImage("./assets/CavaleiroParado.gif");
  cavaleiroCorrendo = loadImage("./assets/CavaleiroCorrendo.gif");
  backgroundImg = loadImage("./assets/Background.gif");

  cavaleiroAtacando.playing = true;
  cavaleiroCaindo.playing = true;
  cavaleiroCorrendo.playing = true;
  cavaleiroParado.playing = true;

  cavaleiroAtacando.looping = false;
  cavaleiroCaindo.looping = false;
  cavaleiroCorrendo.looping = true;
  cavaleiroParado.looping = true;
}

//função setup
function setup(){
//tela do jogo
  canvas = createCanvas(2000, 800);

//engine e world
  engine = Engine.create();
  world = engine.world;

//sprites
  cavaleiro = createSprite(1000, 400, 20, 20);
  cavaleiro.scale = 0.5;
  cavaleiro.addImage("correndo", cavaleiroCorrendo);
  cavaleiro.addImage("parado", cavaleiroParado);
  cavaleiro.addImage("caindo", cavaleiroCaindo);
  cavaleiro.addImage("pulando", cavaleiroPulando);
  cavaleiro.addImage("atacando", cavaleiroAtacando);
  cavaleiro.changeImage("parado");
  cavaleiro.visible = false;
}

//função draw
function draw(){
//fundo
  background(backgroundImg);
  Engine.update(engine);

//display()



//condições



//Barra de nível



//drawSprites
  drawSprites();
}

//outras funções que talvez sejam adicionadas
function createEnemy(){
  if(level == 1){
    var monsterLvl1;
  }
}











































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































