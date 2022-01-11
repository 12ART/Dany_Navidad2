var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var balls;
var ballGroup;
var ball1_img, ball2_img, ball3_img, ball4_img, ball5_img, ball6_img, ball7_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/bg5.png");
  back_img2 = loadImage("images/bg2.jpg");
  player_img = loadImage("images/basket2.png");
  ball1_img = loadImage("images/ball1.png");
  ball2_img = loadImage("images/ball2.png");
  ball3_img = loadImage("images/ball3.png");
  ball4_img = loadImage("images/ball4.png");
  ball5_img = loadImage("images/ball5.png");
  ball6_img = loadImage("images/ball6.png");
  ball7_img = loadImage("images/ball7.png");
 
  ballGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}