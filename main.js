var canvas = new fabric.Canvas('mycanvas');

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;


blockwidth = 20;
blockheight = 20;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
hole=Img;
hole.scaleToWidth(50);
hole.scaleToHeight(50);
hole.set({
top:hole_y,
left:hole_x
});
canvas.add(hole);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball=Img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball);
			});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball);
		document.getElementById("hd3").innerHTML="Congratulations! You have hit the goal!";
		document.getElementById("mycanvas").style.borderColor="darksalmon";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
			ball_y=ball_y-blockheight;
			console.log("Y position: "+ball_y, "X position: "+ball_x);
			canvas.remove(ball);
	new_image();
		}
	}

	function down()
	{
		if(ball_y<=450){
			ball_y=ball_y+blockheight;
			console.log("Y position: "+ball_y, "X position: "+ball_x);
			canvas.remove(ball);
	new_image();
		}
	}

	function left()
	{
		if(ball_x >5){
				ball_x=ball_x-blockwidth;
				console.log("Y position: "+ball_y, "X position: "+ball_x);
				canvas.remove(ball);
		new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+blockwidth;
			console.log("Y position: "+ball_y, "X position: "+ball_x);
			canvas.remove(ball);
	new_image();
		}
	}
	
}

