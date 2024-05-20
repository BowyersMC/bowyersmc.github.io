$(function(){
    let query = location.search;
    let value = query.split('=');
    let gamer_tag = decodeURIComponent(value[1]);
    $.ajax({
        url:'https://45.76.52.57:5000/player?name=' + gamer_tag,
        method:'POST',
        dataType:'json'
    })
        .done( (data) => {
            let kills = data['kills'];
            let imitator_name = kills[data['favorite_imitator']] >= 4000 ? data['favorite_imitator'] + '_x' : data['favorite_imitator'];
            printPlayerTop(gamer_tag, data['display_tag'], imitator_name);
            printImitatorTiers(kills);
            printImitatorKWs(kills, data['wins']);
            printPrides(data['prides']);
            printDetails(data);
        })
});

function printPlayerTop(gamer_tag, display_tag, imitator_name) {
    $('.player-top').html(
        '                     <h2>' + gamer_tag + '</h2>\n' +
        '                     <span class="image main fit"><img src="../images/imitator/' + imitator_name + '.png" alt="" /></span>'
    );
}

function printImitatorTiers(kills) {
    let tier_text = [];
    tier_text.push('                <div class="row">');
    for (let key in kills) {
        let kill = kills[key];
        if (kill < 100) continue;
        let tier = '';
        switch (true) {
            case 100 <= kill && kill < 200:
                tier = 'ONE'
                break;

            case 200 <= kill && kill < 300:
                tier = 'TWO'
                break;

            case 300 <= kill && kill < 400:
                tier = 'THREE'
                break;

            case 400 <= kill && kill < 500:
                tier = 'FOUR'
                break;

            case 500 <= kill && kill < 1000:
                tier = 'FIVE'
                break;

            case 1000 <= kill && kill < 2000:
                tier = 'SIX'
                break;

            case 2000 <= kill && kill < 4000:
                tier = 'SEVEN'
                break;

            case kill >= 4000:
                tier = 'VERTEX'
                break;
        }
        tier_text.push('                    <div class="col-3 col-4">');
        tier_text.push('                        <span class="image"><img class="minecraft-item-icon2" src="../images/weapon/' + key + '.png" alt="" ></span>' + tier);
        tier_text.push('                    </div>');
    }
    tier_text.push('                </div>');
    $('.player-tiers').html(tier_text.join('\n'));
}

function printImitatorKWs(kills, wins) {
    let kw = [];
    let kw_text = [];
    kw_text.push('                <div class="row">');
    for (let key in kills) {
        kw[key] = kills[key] + ' / ';
    }
    for (let key in wins) {
        kw[key] += wins[key];
    }
    for (let key in kw) {
        kw_text.push('                    <div class="col-3 col-4">');
        kw_text.push('                        <span class="image"><img class="minecraft-item-icon2" src="../images/weapon/' + key + '.png" alt="" ></span>' + kw[key]);
        kw_text.push('                    </div>');
    }
    kw_text.push('                </div>');
    $('.player-kw').html(kw_text.join('\n'));
}

function printPrides(prides) {
    let pride_text = [];
    pride_text.push('                <ul>');
    prides.forEach(pride => {
        pride_text.push('                    <li>' + pride + '</li>');
    });
    pride_text.push('                </ul>');
    $('.player-prides').html(pride_text.join('\n'));
}

function printDetails(data) {
    $('.player-details').html(
        '                <ul>\n' +
        '                    <li>最終プレイ：' + data['last_played'] + '</li>\n' +
        '                    <li>所持カルマ：' + data['karma'] + '</li>\n' +
        '                    <li>プレイ回数：' + data['play_count'] + '</li>\n' +
        '                    <li>累計キル数：' + data['kill_count'] + '</li>\n' +
        '                    <li>累計勝利数：' + data['win_count'] + '</li>\n' +
        '                    <li>最多キル数：' + data['highest_kill'] + '</li>\n' +
        '                    <li>平均キル数：' + (data['average_kills']).toFixed(3) + '</li>\n' +
        '                    <li>勝利キルデス比：' + (data['winning_kd']).toFixed(4) + '</li>\n' +
        '                    <li>勝率：' + (data['win_rate']).toFixed(3) + '%</li>\n' +
        '                    <li>最長射撃距離：' + data['longest_shot'] + 'm</li>\n' +
        '                </ul>'
    );
}