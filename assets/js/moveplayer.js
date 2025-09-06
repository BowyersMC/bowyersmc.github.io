$('#search-player').on('click', function(){
    window.location.href = 'tracker/player.html?name=' + $('#gamertag').val();
});