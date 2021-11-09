const Marvel = {
    yearCreation: 1939,
    mainCharacter: 'Spider Man',
    mainTeam: 'Avengers',
};

function extendObject(obj, field, value){
    const name = Object.assign({}, obj);
    newObj[field] = value;
    return newObj; 
}

function extendExistingObject(field, value){
    Marvel[field] =  value;
}

extendExistingObject('spiderManGirl', 'Mary Jane');
const NewMarvel = extendObject(Marvel, 'mainVillain', 'Venom');
console.log('Marvel object: ', Marvel);
console.log('NewMarvel object: ', NewMarvel);
