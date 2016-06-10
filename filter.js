// go to https://designers.mx/mixes?page=50

$(window).bind("load", function() {

    /* Reset Styling */
    var clearFilter = function() {
        $('.mix--preview, .mix--preview > a').removeClass('this_has_rdio this_has_soundcloud this_has_spotify').css('opacity', '1').css('border', '0');
    };

    /* Removes All But Chosen */
    var removeAllBut = function(service, color) {
        $('.indicator--' + service).closest('.mix--preview').addClass('this_has_' + service);
        $('.mix--preview').not('.this_has_' + service).css('opacity', '0.1');
        $('.this_has_' + service + '> a').css('border', '2px solid' + color);
    };

    $('html').delay(4000).addClass('active').append('<div id="xyz"></div>');
    $('#xyz').load(chrome.extension.getURL("content.html"), function() {
        $('#btn_spotify').on('click', function() {
            clearFilter();
            removeAllBut('spotify', '#8bc305');
        });
        $('#btn_rdio').on('click', function() {
            clearFilter();
            removeAllBut('rdio', '#2d90ce');
        });
        $('#btn_soundcloud').on('click', function() {
            clearFilter();
            removeAllBut('soundcloud', '#dc4303');
        });
        $('#btn_reset').on('click', function() {
            clearFilter();
        });
    });
});