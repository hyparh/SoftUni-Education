function dayOfWeek(day) {
    let result = 0;
    let boolFlag = false;

    switch(day) {
        case 'Monday':
            result = 1;
            break;
        case 'Tuesday':
            result = 2;
            break;
        case 'Wednesday':
            result = 3;
            break;
        case 'Thursday':
            result = 4;
            break;
        case 'Friday':
            result = 5;
            break;
        case 'Saturday':
            result = 6;
            break;
        case 'Sunday':
            result = 7;
            break;
        default:
            console.log('error');
            boolFlag = true;
    }

    if (boolFlag === false) {
        console.log(result);
    }   
}

dayOfWeek('Monday');
dayOfWeek('Tuesday');
dayOfWeek('Wednesday');
dayOfWeek('Thursday');
dayOfWeek('shah');
dayOfWeek('Friday');
dayOfWeek('Saturday');
dayOfWeek('Sunday');
dayOfWeek('yeah');