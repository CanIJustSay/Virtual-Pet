//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
  //load images here
  dog= loadImage("images/dogImg.png");
  happyDog= loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 800);
  background(46,139,87);  
  var dogSprite = createSprite(-100,50,50,50);
  image(dog,dogSprite.x,dogSprite.y);
  dog.scale = 0.03;
  dog.debug = true;
}


function draw() {
 
var foodStock = database.ref('Food');
foodStock.on("value",readStock);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  textSize(10);
  stroke("white");
  text("Up arrow to feed",50,50);
  

}
function readStock(data){
foodS = data.val()
}
function writeStock(){
  database.ref('/').set({
    'Food':x
  })
}


