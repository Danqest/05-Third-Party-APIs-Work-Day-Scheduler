var today = moment()
var times = [9,10,11,12,13,14,15,16,17]
var saveBtn0 = $('button[id="0"]')
var saveBtn1 = $('button[id="1"]')
var saveBtn2 = $('button[id="2"]')
var saveBtn3 = $('button[id="3"]')
var saveBtn4 = $('button[id="4"]')
var saveBtn5 = $('button[id="5"]')
var saveBtn6 = $('button[id="6"]')
var saveBtn7 = $('button[id="7"]')
var saveBtn8 = $('button[id="8"]')
var savedText0 = {}
var savedText1 = {}
var savedText2 = {}
var savedText3 = {}
var savedText4 = {}
var savedText5 = {}
var savedText6 = {}
var savedText7 = {}
var savedText8 = {}


$('#currentDay').text(today.format("dddd, MMMM Do, YYYY"))



function init() {
    updateFormColors()
    fetchText()
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

function fetchText() {
    for (let i = 0; i < $('.form-control').length; i++) {
    var storedText = localStorage.getItem(('savedText'+i))
    $(('textarea[id="'+i+'"]')).val(storedText)
    console.log(storedText)
    }
}

saveBtn0.on('click', function() {
    var inputText = $('textarea[id="0"]').val()
    localStorage.setItem('savedText0', inputText)
})
saveBtn1.on('click', function() {
    var inputText = $('textarea[id="1"]').val()
    localStorage.setItem('savedText1', inputText)
})
saveBtn2.on('click', function() {
    var inputText = $('textarea[id="2"]').val()
    localStorage.setItem('savedText2', inputText)
})
saveBtn3.on('click', function() {
    var inputText = $('textarea[id="3"]').val()
    localStorage.setItem('savedText3', inputText)
})
saveBtn4.on('click', function() {
    var inputText = $('textarea[id="4"]').val()
    localStorage.setItem('savedText4', inputText)
})
saveBtn5.on('click', function() {
    var inputText = $('textarea[id="5"]').val()
    localStorage.setItem('savedText5', inputText)
})
saveBtn6.on('click', function() {
    var inputText = $('textarea[id="6"]').val()
    localStorage.setItem('savedText6', inputText)
})
saveBtn7.on('click', function() {
    var inputText = $('textarea[id="7"]').val()
    localStorage.setItem('savedText7', inputText)
})
saveBtn8.on('click', function() {
    var inputText = $('textarea[id="8"]').val()
    localStorage.setItem('savedText8', inputText)
})





init()
