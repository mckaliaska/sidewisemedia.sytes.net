$(document).ready(function() {
    setDisplayStyle();
});

$(window).resize(function(){
    setDisplayStyle();
});

function setDisplayStyle() {

    var elem = document.getElementById('wrap');
    var mobileStyle = $('#display').attr('href') + '/css/mobile.css';
    var displayStyle = $('#display').attr('href') + '/css/display.css';

    if (elem.offsetWidth < 500) {
        $('#wrap').attr('class','mobile');
    } else {
        $('#wrap').attr('class','display');
    }
}