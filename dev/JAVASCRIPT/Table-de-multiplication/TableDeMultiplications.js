var size;
var column; 
var row;

size = parseInt(window.prompt("saisissez la taille"));

document.write("<table style='border: 1px black solid'>")

for (column = 1; column <= size; column++) {
	document.write('<tr style="border: 1px black solid">')
	for(row = 1; row <= size; row++) {
		document.write("<td style='border: 1px black solid','border-collapse: collapse'>")
		var result = row*column;
		document.write(result);
		document.write("</td>")
	}

		document.write("</tr>")
}

document.write("</table>")