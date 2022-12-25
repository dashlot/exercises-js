function getSeasons (monthNumber) {
    if ( monthNumber == 0 ) {
        return('false');
    } else if (monthNumber <=2 || monthNumber == 12 ) {
        return(`winter`);
    } else if ( monthNumber <=5 ) {
        return(`spring`);
    } else if ( monthNumber <=8 ) {
        return(`summer`);
    } else if ( monthNumber <=11 ) {
        return(`autumn`);
    } else {
        return(`a mistake`);
    }
}

let number = +prompt('Insert number of month');
let getSeasonByNumber = getSeasons(number);
alert(number + ` month is ` + getSeasonByNumber)

