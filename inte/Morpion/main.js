var canvas = document.getElementById("my-canvas"); 
var context = canvas.getContext('2d');

/*

context.strokeStyle = "#999";
context.lineWidth = "5";
context.setLineDash([20,20]);
context.lineDashOffset = 10;
context.strokeRect(50,30,175,175);

context.strokeStyle = "#999";
context.lineWidth = "5";
context.setLineDash([20,20]);
context.lineDashOffset = 10;
context.strokeRect(50,215,175,175);

context.strokeStyle = "#999";
context.lineWidth = "5";
context.setLineDash([20,20]);
context.lineDashOffset = 10;
context.strokeRect(50,400,175,175);*/

context.fillStyle = '#333';
context.fillRect(10,10,620,620);
context.strokeStyle = '#ffff';
context.save();

context.strokeStyle = "red";
context.setLineDash([20,20]);
context.lineDashOffset = 10;
context.lineWidth = 10;
context.beginPath();
context.moveTo(206,10);
context.lineTo(206,630);
context.stroke();


context.strokeStyle = "blue";
context.lineWidth = 10;
context.beginPath();
context.moveTo(412,10);
context.lineTo(412,630);
context.stroke();

context.strokeStyle = "yellow";
context.lineWidth = 10;
context.beginPath();
context.moveTo(10,206);
context.lineTo(630,206);
context.stroke();

context.strokeStyle = "green";
context.lineWidth = 10;
context.beginPath();
context.moveTo(10,412);
context.lineTo(630,412);
context.stroke();


function circle(x,y) {
	
	context.restore();
	context.strokeStyle = "orange"
	context.lineWidth = 10;
	context.beginPath();
	context.arc(x,y,80,0,Math.PI*2,true);
	context.stroke();
	context.closePath();



}

function cross(x,y) {
	context.restore();
	context.strokeStyle = "orange"
	context.lineWidth = 10;
	context.beginPath();
	context.moveTo(x-50, y-50);
	context.lineTo(x+50, y+50);
	context.moveTo(x-50, y+50);
	context.lineTo(x+50, y-50);
	context.stroke();
	context.closePath();
}
/*var Disk = function()
{
 
    this.position = {x:0, y:0};
}*/


/*Disk.prototype.setPosition = function(position){
    
    this.position = position;
}*/
var draw = false;

function onClickCanvas(event)
{

	var offset = canvas.getBoundingClientRect();
	var style = window.getComputedStyle(canvas);
	var border = parseInt(style.borderWidth);

	var location = {  x: event.clientX - offset.left - border , y: event.clientY - offset.top - border};

	console.log(location);
	var i  = Math.random((location.x-120)/200);
	var j  = Math.random((location.y-120)/200);

	if (draw == false) {
		

		cross(i*200+120,j*200+120);
		draw = true;
	}

	else {
		circle(i*200+120,j*200+120);
		draw = false;
	}
	
	

}


canvas.addEventListener('click', onClickCanvas);