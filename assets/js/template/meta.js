function insertMeta(description = '') {
    document.write(...[
        '<meta name="twitter:card" content="summary" />',
        '<meta name="twitter:site" content="@BowyersMC" />',
        '<meta name="twitter:title" content="BowyersMC" />',
        '<meta name="twitter:description" content="' + description + '" />',
        '<meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1560502728945967104/WL_X3SAN_400x400.jpg" />'
    ]);
}