canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_mars_image_array=["mars1.jpeg", "Mars2.jpeg", "mars3.jpeg", "mars4.jpeg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);

r_height=90;
r_width=100;

r_xposition=10;
r_yposition=10;

r_image="rover.png";
b_image = nasa_mars_image_array[random_number];
console.log("b_image="+b_image);

function add(){
    bg = new Image();
    bg.onload = uploadBackground;
    bg.src = b_image;

    r = new Image();
    r.onload = uploadrover;
    r.src = r_image;
}

function uploadBackground(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(r, r_xposition, r_yposition, r_width, r_height);
}

window.addEventListener("keydown", my_keydown); 
    function my_keydown(e){
        keyPressed = e.keyCode;
        if (keyPressed == '38'){
            console.log("up");
            up();
        }

        else if (keyPressed == '37'){
            console.log("left");
            left(); 
        }

        else if (keyPressed == '40'){
            console.log("down");
            down(); 
        }

        else if (keyPressed == '39'){
            console.log("right");
            right(); 
        }

    }
    function up() {
        if(r_yposition >= 0) {
            r_yposition = r_yposition-10;
            console.log("when up arrow is pressed, x="+ r_xposition+" | y="+r_yposition );
            uploadBackground();
            uploadrover();

        }
    }

    function down() {
        if(r_yposition <= 500) {
            r_yposition = r_yposition+10;
            console.log("when up arrow is pressed, x="+ r_xposition+" | y="+r_yposition );
            uploadBackground();
            uploadrover();

        }
    }

    function left() {
        if(r_xposition >= 0) {
            r_xposition = r_xposition-10;
            console.log("when up arrow is pressed, x="+ r_xposition+" | y="+r_yposition );
            uploadBackground();
            uploadrover();

        }
    }

    function right() {
        if(r_xposition <= 700) {
            r_xposition = r_xposition+10;
            console.log("when up arrow is pressed, x="+ r_xposition+" | y="+r_yposition );
            uploadBackground();
            uploadrover();

        }
    }