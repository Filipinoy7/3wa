var Slate = function(pen, canvas)
{
	this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.currentLocation = null;
    this.isDrawing       = false;
    this.pen             = pen;

    
    this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove',  this.onMouseMove.bind(this));
	this.canvas.addEventListener('mouseup',    this.onMouseUpAndLeave.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseUpAndLeave.bind(this));
}

Slate.prototype.getMouseLocation = function(event)
{

	var offset = this.canvas.getBoundingClientRect();
    
    
	var location = { x: event.clientX - offset.left, y: event.clientY - offset.top };
    
    console.log(location);

     return location;

}


 Slate.prototype.onMouseDown = function(event) {
 
 	console.log('coucou ');
    this.currentLocation = this.getMouseLocation(event);
    this.isDrawing = true;
 
 }
 
 Slate.prototype.onMouseMove = function(event) {

 	var location = this.getMouseLocation(event);
 	
    if(this.isDrawing == true) {
    	
    	   	
        this.pen.configure(this.context);
        this.context.beginPath();
        this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.context.lineTo(location.x, location.y);
        this.context.stroke();

        this.currentLocation = location;

    }
 	
 
 }
 
 Slate.prototype.onMouseUpAndLeave = function(event) {
  
  	this.isDrawing = false;
  }