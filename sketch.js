//Create variables here
var dog,happyDog,database,foodS,foodStock;
var feedButton,addFood;
var foodStock,lastFed;
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
 foodObj = new Food(200,200);
 feedButton = createButton("Feed the Dog");
 feedButton.position(700,95);
 feedButton.mousePressed(feedDog);
 addFood = createButton("Add Food");
 addFood.position(800,95);
 addFood.mousePressed();
}


function draw() {
//lastFed = hour();
  drawSprites();
  //add styles here
  textSize(10);
  stroke("white");

  textSize(30);
  text(foodS,50,200);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM",150,30)
  } else if (lastFed ==0){text("Last Feed : 12 AM",150,30);}
  else{
    text("Last Feed : "+ lastFed + " AM", 150,30);
  }

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
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
Food: foodObj.getFoodStock(),
FeedTime: hour()
  });
}
