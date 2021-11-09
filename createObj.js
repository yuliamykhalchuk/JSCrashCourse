const Marvel = {
    yearCreation: 1939,
    mainCharacter: 'Spider Man',
    mainTeam: 'Avengers',
};

const DC = {
    yearCreation: 2013,
    mainCharacter: 'Batman',
    mainTeam: 'Justice League',
};

if(DC.yearCreation !== 1934){
    //2 способи запису значення поля обєкту
    DC.yearCreation = 1934;
    // DC['yearCreation'] = 1934;
}

//1 спосіб додавання поля і його значення
// Marvel.owner = 'Disney';
// console.log(Marvel);
// 2 спосіб додавання поля і його значення
const newField = 'owner';
Marvel[newField] = 'Disney';
//console.log(Marvel);

if(!DC.hasOwnProperty('owner')){
    DC[newField] = 'Warner Brothers';
}
Object.freeze(DC);
DC.yearCreation = '2021';
//console.log(Object.isFrozen(DC));
//console.log(DC.toString());

const MarvelKiller = Object.assign({}, Marvel);
MarvelKiller.better = true;
console.log(MarvelKiller)