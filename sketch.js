var ball;
var database,BallPosition,Position
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
     BallPositionref=database.ref("Ball/Position")
     BallPositionref.on("value",readPosition,showerror)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/Position").set({
    x : ball.x + x,
        y : ball.y + y
    })
    
}

function readPosition(data){
Position=data.val()
ball.x=Position.x
ball.y=Position.y

}

function showerror(){
console.log("error")

}