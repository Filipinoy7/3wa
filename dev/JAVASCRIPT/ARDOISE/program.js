var Program = function(canvas)
{

	this.pen          = new Pen();
    this.canvas       = new Slate(this.pen, canvas);

	this.start();
	
	
}


Program.prototype.start = function() {

	var penColor = document.querySelectorAll('.pen-color');
    
    for (var i = 0; i < penColor.length; i++) {
    
    	penColor[i].addEventListener('click', this.onClickPenColor.bind(this));
    
    }
    

}


Program.prototype.onClickPenColor = function(event) {

	var color = event.currentTarget.dataset.color;

	this.pen.color = color;
}