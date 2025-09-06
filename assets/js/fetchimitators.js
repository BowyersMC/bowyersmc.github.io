$(function(){
    $.ajax({
        url:'http://45.76.52.57:5000/imitators',
        method:'POST',
        dataType:'json'
    })
        .done( (data) => {
            printImitator(data, 'airride', 'mobility');
            printImitator(data, 'bastet', 'mobility');
            printImitator(data, 'canopy', 'mobility');
            printImitator(data, 'chorus', 'metastasis');
            printImitator(data, 'doctor', 'morphing');
            printImitator(data, 'doping', 'mobility');
            printImitator(data, 'haze', 'making');
            printImitator(data, 'herobrine', 'morphing');
            printImitator(data, 'leaper', 'mobility');
            printImitator(data, 'parallel', 'metastasis');
            printImitator(data, 'rider', 'making');
            printImitator(data, 'shield', 'making');
            printImitator(data, 'shock_waver', 'making');
            printImitator(data, 'spear', 'making');
            printImitator(data, 'steve', 'morphing');
            printImitator(data, 'swapper', 'metastasis');
            printImitator(data, 'trapper', 'making');
            printImitator(data, 'twins', 'morphing');
            printImitator(data, 'vanisher', 'morphing');
            printImitator(data, 'xray', 'morphing');
            printImitator(data, 'yeti', 'morphing');
        })
});


function printImitator(data, imitator_name, category) {
   　var kill = data['kills'][imitator_name]
   　var win = data['wins'][imitator_name]
   　var validation = data['validations'][imitator_name]
   　var all_kill_percent = kill / data['all']['kills']
   　var all_win_percent = win / data['all']['wins']
   　var category_kill_percent = kill / data[category]['kills']
   　var category_win_percent = win / data[category]['wins']
    category = category.replace('mobility', '移動系')
    category = category.replace('metastasis', '転移系')
    category = category.replace('making', '生成系')
    category = category.replace('morphing', '変化系')
    $('.datum-' + imitator_name).html(
        '                                            <ul>\n' +
        '                                                <li>通算キル：' + kill + 'キル</li>\n' +
        '                                                <li>通算勝利：' + win + '回</li>\n' +
        '                                                <li>契約者数：' + validation + '名</li>\n' +
        '                                            </ul>\n' +
        '                                            <ul>\n' +
        '                                                <li>全イミテイター総合キル数の' + (all_kill_percent * 100).toFixed(2) + '%を占有</li>\n' +
        '                                                <li>全イミテイター総合勝利数の' + (all_win_percent * 100).toFixed(2) + '%を占有</li>\n' +
        '                                                <li>' + category + 'キル数の' + (category_kill_percent * 100).toFixed(2) + '%を占有</li>\n' +
        '                                                <li>' + category + '勝利数の' + (category_win_percent * 100).toFixed(2) + '%を占有</li>\n' +
        '                                            </ul>'
    );
}