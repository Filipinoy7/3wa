var photo = "WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW"
var premierCarac = photo.charAt(0);


var count = 1;

var result = "";

for (  i = 1; i < photo.length; i++) {
	if (premierCarac != photo.charAt(i)) {
		result += count;
		result += premierCarac;

		premierCarac = photo.charAt(i);
		count = 0;
	}

	count++;
}

result += count;
result += premierCarac;

console.log(result);

/*CORRIGER*/

/*<script>


function LRE(s)
{
	var result = "";
	var current_char = s.charAt(0);
	var count = 1;
    
    // count = 11
    // current_char = W
    //result = 12W1B14W3B23W1B11W
    
    for(var i = 1; i < s.length ; i++)
	{
    	if ( current_char != s.charAt(i) )
		{
        	result += count;
			result += current_char;
        	current_char = s.charAt(i);
            count = 0;
        }
        
        count++;
    }
    
    result += count;
	
    result += current_char;
    
    return result

}


var s = "WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW";
var compressed_string = LRE(s);

document.write("<p>string d'origine : " +s+"</p>");
document.write("<p>string compressee : " + compressed_string+"</p>");

</script>*/