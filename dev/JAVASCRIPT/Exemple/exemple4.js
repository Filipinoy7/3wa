var animals = ['canard', 'poule', 'vache', 'cochon', 'chèvre' ];
animals[1] // poule
animals[0]//canard
animals[4]//chèvre
console.log(animals[4]);


var week = new Array();
week[1] = "Lundi";
week[2] = "Mardi";
week[3] = "Mercredi";
week[4] = "Jeudi";
week[5] = "Vendredi";
week[6] = "Samedi";
week[0] = "Dimanche";

var month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
console.log(week[2]);

var sunday = 6;


console.log(week[sunday]);

var date = new Date();

console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

document.write("<p>Nous somme le :"+week[date.getDay()]+" "+date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()+"</p>");

document.write( "<p> Il est : "+date.getHours()+"h "+date.getMinutes()+"m "+date.getSeconds()+"s </p>" );