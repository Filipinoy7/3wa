# Rocket : faites décoller la fusée 3WA !
## Enoncé
La fusée 3WA est prête à décoller pour partir à la conquête de l'univers Javascript !
Mais il reste du travail aux ingénieurs : le compte à rebours ne fonctionne pas encore et le processus d'allumage et de décollage de la fusée ne sont pas encore opérationnels.
### Fonctionnement attendu
Au clic sur le bouton de mise à feu, le compte à rebours s'affiche immédiatement sur le panneau d'affichage et démarre à 9.  Puis chaque seconde, le compte à rebours diminue de 1. Lorsque "0" est affiché, la fusée devra décoller !
### Remarques

 - Une fois le bouton de mise à feu enclenché, celui-ci n'est plus opérationnel : impossible de réinitialiser le compte à rebours ou de l'arrêter ! 
 - S'il est possible *d'ajouter* un gestionnaire d'événement, il est également possible de le *supprimer*
 -  Pour gérer le ***temps*** en Javascript, il va falloir utiliser les ***chronomètres*** !

## Bonus
 1. Ajouter un bouton pour annuler la mise à feu : ce bouton sera actif une fois la mise à feu enclenchée et jusqu'au décollagec
 2. Ajouter un bouton pour remettre à zéro le décollage
