function insertHeader(home_path = '') {
    let header = document.getElementById('header');
    header.innerHTML =
        '                  <a href="' + home_path + 'index.html" class="logo">BowyersMC Website</a>' + "\n" +
        '                  <ul class="icons">  ' + "\n" +
        '                    <li><a href="https://discord.gg/bVRvSeKfTF" class="icon brands fa-discord"><span class="label">Discord</span></a></li>' + "\n" +
        '                  </ul>';
}