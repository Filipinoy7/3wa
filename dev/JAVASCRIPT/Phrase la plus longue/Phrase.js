'use strict' ;
var phrases =
[
    "Le monde flatte l'éléphant et piétine la fourmi.",
    "Que la main de celui qui t'offre un présent ne le regrette jamais.",
    "Ce monde ressemble à la mer ; celui qui ne sait pas nager va au fond et se noie.",
    "On n'est pas sûr d'aimer et de plaire toujours.",
    "Le monde semble sombre quand on a les yeux fermés.",
    "Que l'œuf ne combatte pas avec la pierre.",
    "Garde-toi de te mêler de ce qui ne te regarde pas.",
    "Si tu n'écoutes pas les conseils des femmes, tu manqueras de riz de semence.",
    "Ne fatigue pas tes amis par de fréquentes visites, vois-les de temps en temps quand tu penses à eux.",
    "Pour juger d'un procès, il faut connaître la loi ; pour parler d'une affaire, il faut en connaître le fond.",
    "Mieux vaut avoir du bon sens que de se torturer a étudier la loi.",
    "Qui ne travaille pas l'été, l'hiver se suce les ongles.",
    "L'oiseau choisit l'arbre sur lequel il veut se reposer, mais l'arbre ne peut choisir l'oiseau.",
    "Il faut commencer par se corriger soi-même avant de vouloir corriger les autres.",
    "Un arbre seul ne fait pas une forêt.",
    "Qu'il soit noir, qu'il soit blanc, chaque chèvre aime son chevreau.",
    "On s'enrichit plus vite en osant qu'en attendant.",
    "Qui croit avoir assez de vertu n'en a guère",
    " À celui qui ose, vienne l'ours.",
    "On n'aime rien tant que le fruit défendu. ",
    "Le bonheur ne se trouve pas au sommet de la montagne, mais dans la façon de la gravir. ",
    "Si vous fermez la porte à toutes les erreurs, la vérité restera dehors",
    "La semaine du travailleur a sept jours, la semaine du paresseux a sept demains.",
    "L'homme regarde le miroir, le miroir regarde l'homme.",
    "N'accuse pas le puits d'être trop profond quand ta corde est trop courte.",
    "Quel est le bruit d'une seule main qui applaudit ?",
    "On ne peut empêcher un coeur d'aimer.",
    "La courbe ne peut inclure la ligne droite.",
    "Pour savoir si l'eau d'un bol est chaude ou froide, il faut y mettre le doigt... Il ne sert à rien de discuter.",
    "Aimant on n'est point sage, et sage on n'aime plus.",
    "Il n'y a pas que les aigles qui atteignent les sommets. Les escargots aussi, mais ils en bavent.",
    "La peur mène à la colère, la colère à la haine et la haine au côté obscur.",
    "Si en travaillant l'on s'enrichissait les ânes porteraient le bât d'or.",
    "La voie est sous vos pieds.",
    "Qui excelle au tir ne touche pas le centre de la cible.",
    "On n'est pas sûr d'aimer et de plaire toujours. ",
    "Les difficultés et les obstacles, s'ils sont bien compris et utilisés, peuvent devenir des sources de force inattendues.",
    "Dans tous les cas, l'espérance mène plus loin que la crainte.",
    "Lorsqu'il n'y a plus rien à faire, que faites-vous ?",
    "Qui t'aime te fera pleurer. ",
    "C'est le propre de l'homme de se tromper; seul l'insensé persiste dans son erreur.",
    "Pour voler avec les aigles, il faut arrêter de nager avec les canards.",
    "Chaque coup de colère est un coup de vieux; chaque sourire est un coup de jeune. "
];

console.log(phrases);
var index = 0;
console.log(phrases[index]);

for (var i = 0; i < phrases.length; i++) {
    console.log(phrases[i].length);
    if (phrases[index].length < phrases[i].length) {
        index = i;
        console.log(phrases[i].length);
    }
}

document.write("<p>La longueur de la phrase la plus longue est de : "+phrases[index].length+"</p>");
document.write("<p>La phrase la plus est : "+phrases[index]+"</p>");