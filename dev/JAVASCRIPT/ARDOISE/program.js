var Program = function(canvas)
{
	//this.context = canvas.getContext('2d')
    this.colorPalette = new ColorPalette();
    this.pen          = new Pen();
    this.slate       = new Slate(this.pen, canvas);

	this.start();
	
	
}


Program.prototype.start = function() {

	var penColor = document.querySelectorAll('.pen-color');
    
    for (var i = 0; i < penColor.length; i++) {
    
    	penColor[i].addEventListener('click', this.onClickPenColor.bind(this));
    
    }

    var penSize = document.querySelectorAll('.pen-size');

	for (var j = 0; j < penSize.length; j++) {
    
        penSize[j].addEventListener('click', this.onClickPenSize.bind(this));
    
    }
    
    var clearSlate = document.getElementById('tool-clear-canvas');
    clearSlate.addEventListener('click', this.slate.clear.bind(this.slate));
    
   // clearSlate.addEventListener('click', this.clear.bind(this));
    
    var paletteButton = document.getElementById('tool-clear-picker');
    paletteButton.addEventListener('click', this.onClickColorPicker.bind(this));
   
   
    $(document).on('magical-slate:pick-color', this.onPickColor.bind(this));

}
/*

 Program.prototype.clear = function(event) {
  
  	this.context.clearRect(0, 0, canvas.width, canvas.height);
  
  }*/
  
  
  
Program.prototype.onPickColor = function()
{

	var color = this.colorPalette.getPickedColor();
	this.pen.color = 'rgb('+color.red+','+color.green+','+color.blue+')';
    
    
}


Program.prototype.onClickPenColor = function(event) {

	var color = event.currentTarget.dataset.color;

	this.pen.color = color;
}

Program.prototype.onClickPenSize = function(event)
{
	var penSize = event.currentTarget.dataset.size;
    
    this.pen.size = penSize;
};

Program.prototype.onClickColorPicker = function()
{
	var palette = document.getElementById('color-palette');
    
    palette.classList.toggle('hide');


}
