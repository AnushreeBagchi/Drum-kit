$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.volume = 0.10;
    obj.autoPlay = false;
    obj.preLoad = true;
    //Playing audio when clicked on a div
    $(".block").click(function () {
        onClick(this, obj);
    });
    //play audio on keypress
    $(window).keypress(function (e) {
        //use e.which
        var keyCode = e.which;
        var key=e.key;
        key=key.toUpperCase()
        // console.log(e, keyCode, e.which)
        onkeypress(keyCode, key,obj);
    });
});

function onClick(self, obj) {
    //div on click
    $('.block').removeClass('clicked');
    $(self).addClass('clicked')
    let text = $(self).children('.node').text();
    //assigning sound for every div
    switch (text) {
        case 'CLAP':
            obj.src = "sounds/clap.wav";

            break;
        case 'HITHAT':
            obj.src = "sounds/hihat.wav";
            break;
        case 'KICK':
            obj.src = "sounds/kick.wav";
            break;
        case 'OPENHAT':
            obj.src = "sounds/openhat.wav";
            break;
        case 'BOOM':
            obj.src = "sounds/boom.wav";
            break;
        case 'RIDE':
            obj.src = "sounds/ride.wav";
            break;
        case 'SNARE':
            obj.src = "sounds/snare.wav";
            break;
        case 'TOM':
            obj.src = "sounds/tom.wav";
            break;

    }
    obj.play();

};

function onkeypress(keyCode, key,obj) {
    var pressed=$('.parent-block').find(`.key:contains("${key}")`);
    $('.block').removeClass('clicked');
    pressed.parent().addClass('clicked');
    switch (keyCode) {
        case 97:
            obj.src = "sounds/clap.wav";
            break;
        case 115:
            obj.src = "sounds/hihat.wav";
            break;
        case 100:
            obj.src = "sounds/kick.wav";
            break;
        case 102:
            obj.src = "sounds/openhat.wav";
            break;
        case 103:
            obj.src = "sounds/boom.wav";
            break;
        case 104:
            obj.src = "sounds/ride.wav";
            break;
        case 106:
            obj.src = "sounds/snare.wav";
            break;
        case 107:
            obj.src = "sounds/tom.wav";
            break;
    }
    obj.play();
}