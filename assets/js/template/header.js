function insertHeader(home_path = '') {
    let header = document.getElementById('header');
    header.innerHTML =
        '                  <a href="' + home_path + 'index.html" class="logo">BowyersMC Website</a>' + "\n" +
        '                  <ul class="icons">  ' + "\n" +
        '                    <li><a href="https://discord.gg/bVRvSeKfTF" class="icon brands fa-discord"><span class="label">Discord</span></a></li>' + "\n" +
        '                    <li><a href="https://www.youtube.com/@bowyers-mc" class="icon brands fa-youtube"><span class="label">YouTube</span></a></li>' + "\n" +
        '                    <li><a href="https://x.com/BowyersMC" class="icon brands fa-twitter"><span class="label">X</span></a></li>' + "\n" +
        '                  </ul>';
}