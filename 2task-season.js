function getSeasons (monthNumber) {
    if ( monthNumber == 1 || monthNumber == 2 || monthNumber == 12 ) {
        return(`It's winter`);
    } else if ( 3 >= monthNumber || monthNumber <= 5 ) {
        return(`It's spring`);
    } else if ( 6 >= monthNumber || monthNumber <=8 ) {
        return(`It's summer`);
    } else if ( 9 >= monthNumber || monthNumber <=11 ) {
        return(`It's autumn`);
    } else {
        return(`It's a mistake`);
    }
}

let number = prompt('Введите номер месяца');
let getSeasonByNumber = getSeasons(number);
alert(number + ` — ` + getSeasonByNumber)