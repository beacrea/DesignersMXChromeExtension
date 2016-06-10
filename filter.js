// go to https://designers.mx/mixes?page=50

$(window).bind("load", function() {

    /* Reset Styling */
    var clearFilter = function() {
        $('.mix--preview, .mix--preview > a').removeClass('this_has_rdio this_has_soundcloud this_has_spotify').css('opacity', '1').css('border', '0');
    };

    /* Removes All But Chosen */
    var removeAllBut = function(service) {
        $('.indicator--' + service).closest('.mix--preview').addClass('this_has_' + service);
        $('.mix--preview').not('.this_has_' + service).css('opacity', '0.1');
        $('.this_has_' + service + '> a').css('border', '1px solid white');
    };

    $('html').delay(4000).addClass('active').append('<div id="xyz"></div>');
    $('#xyz').load(chrome.extension.getURL("content.html"), function() {
        $('#btn_spotify').on('click', function() {
            clearFilter();
            removeAllBut('spotify');
        });
        $('#btn_rdio').on('click', function() {
            clearFilter();
            removeAllBut('rdio');
        });
        $('#btn_soundcloud').on('click', function() {
            clearFilter();
            removeAllBut('soundcloud');
        });
        $('#btn_reset').on('click', function() {
            clearFilter();
        });
    });
});