var canvas = document.querySelector('#masterpiece');
   
var context = canvas.getContext('2d');

/*
var disk = {
	color: 'black',
    radius = 10,
    position = {x:0, y:0}
}

*/
//disk.color = 'red';
//disk.color = getRandomColor();

// disk.setColor('red');
// disk.setColor(getRandomColor());

/*
var disk = {
	color: 'red',
    radius = 10,
    position = {x:0, y:0}
}

*/

function onClickCanvas(event)
{

	var offset = canvas.getBoundingClientRect();
	var style = window.getComputedStyle(canvas);
	var border = parseInt(style.borderWidth);

	var location = {  x: event.clientX - offset.left - border , y: event.clientY - offset.top - border};

	var disk = new Disk();

	disk.setRadius(getRandomInteger(10,100));
	disk.setPosition(location);
	disk.setColor(getRandomColor());

	disk.draw(context);
	console.log(disk);


}


canvas.addEventListener('click', onClickCanvas);