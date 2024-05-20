$('#search-player').on('click', function(){
    window.location.href = 'player.html?name=' + $('#gamertag').val();
});