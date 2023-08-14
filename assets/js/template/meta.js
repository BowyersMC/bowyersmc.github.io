function insertMeta(home_path = '', description = '') {
    document.write(...[
        '    <link rel="shortcut icon" type="image/x-icon" href="' + home_path + 'favicon.ico">' + "\n",
        '    <link rel="icon" href="https://avatars.githubusercontent.com/u/107301051?s=200&v=4">' + "\n",
        '    <link rel="apple-touch-icon" href="https://avatars.githubusercontent.com/u/107301051?s=200&v=4">' + "\n",
        '    <meta name="apple-mobile-web-app-capable" content="yes" />' + "\n",
        '    <meta name="twitter:card" content="summary" />' + "\n",
        '    <meta name="twitter:site" content="@BowyersMC" />' + "\n",
        '    <meta name="twitter:title" content="BowyersMC" />' + "\n",
        '    <meta name="twitter:description" content="' + description + '" />' + "\n",
        '    <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1560502728945967104/WL_X3SAN_400x400.jpg" /> + "\n'
    ]);
}