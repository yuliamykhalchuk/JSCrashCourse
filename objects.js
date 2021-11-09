//IT-companies
const GlobalLogic = {
    industry : 'Software development',
    yearCreation : 2005,
    headquarter : 'San Jose, California',
    numberOfExperts : 21000,
}

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

if(GlobalLogic.headquarter !== 'San Jose'){
    GlobalLogic['headquarter'] = 'San Jose';
} else{
    console.log("You know your company history well");
}
//console.log(Object.entries(Epam));
const Eleks = Object.assign({}, GlobalLogic);
Eleks.industry = 'Software engineering, Outsourcing';
Eleks.numberOfExperts = 1500;
console.log(Eleks);