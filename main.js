var x = 0;
var y = 0;
var background = ["space1.jpg", "space2.jpg", "space3.jpg", "mars.jpg"];
var number = Math.floor(Math.random()*4);
var back = background[number];
function add(){
    console.log("insideaddfunctionS");
    background_img = new Image();
    background_img.onload = backgroundPicture
    background_img.src = back;
    roverImg = new Image();
    roverImg.onload = roverPicture;
    roverImg.src = "rover.png"
}
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function backgroundPicture(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function roverPicture(){
    ctx.drawImage(roverImg, x, y, 100, 100);
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == 37){
        left();
    }
    if(keyPressed == 38){
        up();
    }
    if(keyPressed == 39){
        right();
    }
    if(keyPressed == 40){
        down();
    }
    
}

function left(){
    if(x > 0){
     x = x - 10
     backgroundPicture();
     roverPicture();
    }

}

function right(){
    if(x < 700){
     x = x + 10
     backgroundPicture();
     roverPicture();
    }

}

function up(){
    if(y > 0){
     y = y - 10
     backgroundPicture();
     roverPicture();
    }

}

function down(){
    if(y < 500){
     y = y + 10
     backgroundPicture();
     roverPicture();
    }

}


