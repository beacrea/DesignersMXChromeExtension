// go to https://designers.mx/mixes?page=50

$(window).bind("load", function() {
    var soundcloud = 'this_has_soundcloud';
    var spotify = 'this_has_spotify';
    var rdio = 'this_has_rdio';

    var IDAlbums = function() {

        /* Adds Classes To All Album Parents */
        $('.indicator--rdio').closest('.mix--preview').addClass(rdio);
        $('.indicator--soundcloud').closest('.mix--preview').addClass(soundcloud);
        $('.indicator--spotify').closest('.mix--preview').addClass(spotify);
    };

    /* Removes All But Spotify */
    var removeAllBut = function(service) {
        // $('.mix--preview').not('.' + service).remove();
        $('.mix--preview').not('.' + service).hide();
    };

    $('.mixes').prepend('<div id="xyz"></div>');
    $('.mixes__navigation').append('<div id="xyz"></div>');
    $('#xyz').load(chrome.extension.getURL("content.html"), function() {
        $('#testButtonYo').on('click', function() {
            IDAlbums();
            removeAllBut(rdio);
            console('You clicked dat button, yo!');
        });
    });
});