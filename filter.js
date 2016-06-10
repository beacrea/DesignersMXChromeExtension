// go to https://designers.mx/mixes?page=50

$(window).bind("load", function() {

    /* Removes All But Spotify */
    var removeAllBut = function(service) {
        $('.indicator--' + service).closest('.mix--preview').addClass('this_has_' + service);
        // $('.mix--preview').not('.' + service).remove();
    };

    $('body').delay(4000).addClass('active').append('<div id="xyz"></div>');
    $('.mixes__navigation').append('<div id="xyz"></div>');
    $('#xyz').load(chrome.extension.getURL("content.html"), function() {
        $('#testButtonYo').on('click', function() {
            removeAllBut('spotify');
            console.log('You clicked dat button, yo!');
        });
    });
});