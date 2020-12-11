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
  database = firebase.database();
  background(46,139,87);  
  foodStock = database.ref('Food');
foodStock.on("value",readStock);

 dogSprite = createSprite(30,300,50,50);
 image(dog,dogSprite.x,dogSprite.y,400,400);
}


function draw() {

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  image(happyDog,dogSprite.x,dogSprite.y,400,400);
}
  drawSprites();
  //add styles here
  textSize(10);
  stroke("white");
  text("Up arrow to feed",50,50);
  textSize(50);
  text(foodS,50,200)

}
function readStock(data){
foodS = data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').set({
    'Food':x
  })
}
