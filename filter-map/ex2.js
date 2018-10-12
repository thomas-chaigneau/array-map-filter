/* Array.prototype.map ET filter - Exercice 2

Il s'agit d'écrire une fonction getCampusesTeachingReact, qui reçoit en argument un tableau
d'objets décrivant des campus de la Wild Code School. Chaque campus a ces propriétés:
- city: ville où se trouve le campus
- curriculums: les cursus proposés dans ce campus (PHP/Symfony, JS/React, JS/Angular, etc.)

En utilisant filter puis map, la fonction doit renvoyer les villes des campus qui proposent
un cursus JS/React.

Tableau en entrée:
[
  { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'La Loupe', curriculums: ['JS/Angular'] },
  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'Marseille', curriculums: ['JS/React'] },
  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
  { city: 'Reims', curriculums: ['JS/React'] },
  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
]

Sortie attendue:
['Bordeaux', 'Lille', 'Marseille', 'Reims', 'Toulouse']

*/

function getCampusesTeachingReact(campuses) {

	// const value = campuses.map( campus => campus.curriculums.includes('JS/React'))
	// console.log(value)
	// console.log(value.map(bool=>bool))


	
	return campuses.filter(campus => campus.curriculums.includes('JS/React')).map(city => city.city)




	// return campuses.map(city => city.city).filter(curri => value.map(bool=>bool))


}



console.log(getCampusesTeachingReact([
									  { city: 'Bordeaux'   ,    curriculums: ['PHP/Symfony', 'JS/React'] },
									  { city: 'La Loupe', curriculums: ['JS/Angular'] },
									  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
									  { city: 'Marseille', curriculums: ['JS/React'] },
									  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
									  { city: 'Reims', curriculums: "e" },
									  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
									]))

module.exports = getCampusesTeachingReact;
