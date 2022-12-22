function getSeasons (monthNumber) {
    if ( 1>= monthNumber || monthNumber <=2 || monthNumber === 12 || monthNumber) {
        return(`winter`);
    } else if ( 3>= monthNumber || monthNumber <=5 ) {
        return(`spring`);
        console.log('abc');
    } else if ( 6 >= monthNumber || monthNumber <=8 ) {
        return(`summer`);
    } else if ( 9 >= monthNumber || monthNumber <=11 ) {
        return(`autumn`);
    } else {
        return(`a mistake`);
    }
}

let number = +prompt('Insert number of month');
let getSeasonByNumber = getSeasons(number);
alert(number + ` month is ` + getSeasonByNumber)

