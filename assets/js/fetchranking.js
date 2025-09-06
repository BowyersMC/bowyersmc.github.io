$(function(){
    let query = location.search;
    let value = query.split('=');
    let ranking_type = decodeURIComponent(value[1]);
    let ranking_title = '';
    switch (ranking_type) {
        case 'kills':
            ranking_title = '累計キル数ランキング';
            break;
        case 'wins':
            ranking_title = '累計勝利数ランキング';
            break;
        case 'kd':
            ranking_title = 'キルデス比ランキング';
            break;
        case 'win-rate':
            ranking_title = '勝率ランキング';
            break;
        case 'average-kills':
            ranking_title = '平均キル数ランキング';
            break;
    }
    $.ajax({
        url:'http://45.76.52.57:5000/ranking?type=' + ranking_type,
        method:'POST',
        dataType:'json'
    })
        .done( (data) => {
            $('.ranking-top').html(
                '                     <h2>' + ranking_title + '</h2>\n'
            );

            let score_text = [];
            score_text.push('                    <table>');
            score_text.push('                        <thead>');
            score_text.push('                        <tr>');
            score_text.push('                            <th>順位</th>');
            score_text.push('                            <th>弓師</th>');
            score_text.push('                            <th>スコア</th>');
            score_text.push('                        </tr>');
            score_text.push('                        </thead>');
            score_text.push('                        <tbody>');
            let rank = 1
            data['ranking'].forEach(it => {
                let name = it['name'].toString();
                let score = 0;
                if (it['score'] !== undefined) {
                    score = it['score'].toFixed(5);
                    if (ranking_type === 'win-rate') score *= 100;
                    score = score.toString();
                }
                if (it['kills'] !== undefined) score = it['kills'].toString();
                if (it['wins'] !== undefined) score = it['wins'].toString();

                score_text.push('                        <tr>');
                score_text.push('                            <td>' + rank + '</td>');
                score_text.push('                            <td>' + name + '</td>');
                score_text.push('                            <td>' + score + '</td>');
                score_text.push('                        </tr>');
                rank += 1
            })
            score_text.push('                        </tbody>');
            score_text.push('                    </table>');
            $('.table-wrapper').html(score_text.join('\n'))
        });
});