  var bgImg, canvas;
var cat1Img,cat2Img;
var mouse1Img, mouse2Img;
var tom, jery;



function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    cat1Img = loadAnimation("cat1.png");
    cat2Img = loadAnimation("cat2.png ","cat3.png");
    mouse1Img = loadImage("mouse1.png");
    mouse2Img = loadAnimation("mouse2.png", 'mouse3.png');
    
}

function setup(){
   canvas = createCanvas(1000,800);
    
    //create tom and jerry sprites here
    tom = createSprite(750,650,10,10);
    tom.addAnimation("sitting",cat1Img);
    tom.scale = 0.2;

    jery = createSprite(200,650,10,10);
    jery.addImage(mouse1Img);
    jery.scale = 0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
    jery.addAnimation("mouseTeasing",mouse2Img);
    jery.changeAnimation("mouseTeasing");
    jery.frameDelay = 25 ;
}

if(keyCode === LEFT_ARROW){
    console.log("left arrow");
    tom.addAnimation("catMoving",cat2Img);
    tom.changeAnimation("catMoving");
    tom.velocityX= -2;
}

}
