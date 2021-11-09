//IT-companies

const Epam = {
    industry : 'Software engineering',
    yearCreation : 1993,
    headquarter : 'Newtown, Pennsylvania',
    numberOfEmployees : 41000,
}
const SoftServe = {
    industry : 'Consulting services & Software development',
    yearCreation : 1993,
    headquarterEurope : 'Lviv, Ukraine',
    numberOfEmployees : 35000,
}
const Luxoft = {
    industry : 'Software development',
    yearCreation : 2000,
    headquarter : ' Zug, Switzerland',
    numberOfEmployees : 12900,
}
const Intellias = {
    industry : 'Software development',
    yearCreation : 2002,
    headquarter : 'Lviv, Ukraine',
    numberOfEmployees : 1500,
}
const NiX = {
    industry : 'Software development',
    yearCreation : 2002,
    headquarter : 'Lviv, Ukraine',
    numberOfEmployees : 1700,
}
const SigmaSoftware = {
    industry : 'Software development',
    yearCreation : 2002,
    headquarter : 'Kharkiv, Ukraine',
    numberOfEmployees : 1600,
}
const Infopulse = {
    industry : 'Information technologies Software engineeringt',
    yearCreation : 1991,
    headquarter : 'Kyiv, Ukraine',
    numberOfEmployees : 2200,
}
const DataArt = {
    industry : 'Software development',
    yearCreation : 1997,
    headquarter : 'New York, USA',
    numberOfEmployees : 5000,
}
//using method create()
const GlobalLogic = {
    nameOfCompany: 'GL',
    isOutsoursing: false,
    industry : 'Software development',
    yearCreation : 2005,
    headquarter : 'San Marino, California',
    numberOfExperts : 21000,
    printName : function(){
        console.log(`Name of my company is ${this.nameOfCompany}. Is it outsoursing company? ${this.isOutsoursing}`);
    }
};
const Hitachi = Object.create(GlobalLogic);
Hitachi.nameOfCompany = 'GlobalLogic a Hitachi Group Company';
Hitachi.isOutsoursing = true;
Hitachi.printName();
GlobalLogic.printName();



//using method entries()
console.log(Object.entries(Epam));
//using method assign()
const Eleks = Object.assign({}, GlobalLogic);
Eleks.industry = 'Software engineering, Outsourcing';
Eleks.numberOfExperts = 1500;
console.log(Eleks);
//using method freeze() and isFrosen()
Object.freeze(Infopulse);
Infopulse.numberOfEmployees = 2500;
console.log(Infopulse);
if(Object.isFrozen(Infopulse)){
    console.log('Oooops');
}else{
    console.log('Please, freeze it');
}
//using method keys()
Object.keys(Intellias);
console.log(Intellias);


