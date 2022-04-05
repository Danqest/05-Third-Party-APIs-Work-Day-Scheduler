var today = moment()
var times = [9,10,11,12,13,14,15,16,17]

$('#currentDay').text(today.format("dddd, MMMM Do, YYYY"))



function init() {
    updateFormColors()
}

function updateFormColors() {
    for (let i = 0; i < $('.form-control').length; i++) {
        if (times[i] > moment().hours()) {
            $('.form-control').eq(i).addClass('future')
        }
        else if (times[i] == moment().hours()) {
            $('.form-control').eq(i).addClass('present')
        }
        else if (times[i] < moment().hours()) {
            $('.form-control').eq(i).addClass('past')
        }
    }
}





init()
