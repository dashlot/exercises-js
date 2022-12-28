function getNameOfWeekDays (weekDaysNumber) {
    if (weekDaysNumber == 1) {
        return `Понедельник`;
    } else if (weekDaysNumber == 2) {
        return `Вторник`;
    } else if (weekDaysNumber == 3) {
        return `Среда`;
    } else if (weekDaysNumber == 4) {
        return `Четверг`;
    } else if (weekDaysNumber == 5) {
        return `Пятница`;
    } else if (weekDaysNumber == 6) {
        return `Суббота`
    } else if (weekDaysNumber == 7) {
        return `Воскресенье`;
    } else {
        return `Такого дня недели не существует`;
    }
} 

function getNameOfWeekDaysV2 (weekDaysNumber) {
    let result = (weekDaysNumber == 1) ? 'Monday' :
        (weekDaysNumber == 2) ? 'Tuesday' :
            (weekDaysNumber == 3) ? 'Wednesday' :
                (weekDaysNumber == 4) ? 'Thursday' :
                    (weekDaysNumber == 5) ? 'Friday' :
                        (weekDaysNumber == 6) ? 'Saturday' :
                            (weekDaysNumber == 7) ? 'Sunday' :
                            `This day doesn't exist`
    return result;
}


let numberDay2 = prompt(`Введите номер дня недели`);
let getDay2 = getNameOfWeekDaysV2(numberDay2);
alert(numberDay2 + ` — ` + getDay2);




