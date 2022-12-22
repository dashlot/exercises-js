function canGetDriverLicenseV2( age ) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

let yourAge = prompt('Insert your age');
let driverLicenseAble = canGetDriverLicenseV2(yourAge);
alert('canGetDriverLicense='+ driverLicenseAble);


function canGetDriverLicenseV3 (age) {
    return age >= 18;
}

let driverLicenseAble2 = canGetDriverLicenseV3(yourAge);
console.log(driverLicenseAble2);


// 2nd Task (seasons)

function getSeasons (monthNumber) {
    console.log(monthNumber);
}

getSeasons(12);