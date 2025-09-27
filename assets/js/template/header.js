function insertHeader(home_path = '') {
    let header = document.getElementById('header');
    header.innerHTML =
        '                  <a href="' + home_path + 'index.html" class="logo">BowyersMC Website</a>';
}