function insertSidebar(home_path = '') {
    let image_url = 'https://raw.githubusercontent.com/BowyersMC/bowyersmc.github.io/wiki/images/';
    let sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = 
        '            <div class="inner">' + "\n" +
        '' + "\n" +
        '              <!-- Menu -->' + "\n" +
        '                <nav id="menu">' + "\n" +
        '                  <header class="major">' + "\n" +
        '                    <h2>メニュー</h2>' + "\n" +
        '                  </header>' + "\n" +
        '                  <ul>' + "\n" +
        '                    <li><a href="' + home_path + 'index.html"><i class="icon solid fa-home"></i> ホーム</a></li>' + "\n" +
        '                    <li><a href="' + home_path + 'pages/rule.html"><i class="icon solid fa-book"></i> お約束事</a></li>' + "\n" +
        '                    <li><a href="' + home_path + 'pages/details.html"><i class="icon solid fa-toolbox"></i> プロジェクト概要</a></li>' + "\n" +
        '                    <li><a href="' + home_path + 'pages/staff.html"><i class="icon solid fa-users-cog"></i> 運営メンバー</a></li>' + "\n" +
        '                    <li><a href="' + home_path + 'pages/karma.html"><i class="icon solid fa-coins"></i> カルマシステム</a></li>' + "\n" +
        '                    <li><a href="' + home_path + 'tracker.html"><i class="icon solid fa-chart-pie"></i> BMC Tracker</a></li>' + "\n" +
        '                    <li>' + "\n" +
        '                      <span class="opener"><i class="icon solid fa-gamepad"></i> ゲームモード</span>' + "\n" +
        '                      <ul>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/gamemode/phasing.html">Phasing / フェージング</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/gamemode/rotation.html">Rotation / ローテーション</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/gamemode/killstreak.html">KillStreak / キルストリーク</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/gamemode/squads.html">Squads / スクアッド</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/gamemode/versus.html">Versus / バーサス</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/gamemode/cleaner.html">Cleaner / クリーナー</a></li>' + "\n" +
        '                      </ul>' + "\n" +
        '                    </li>' + "\n" +
        '                    <li>' + "\n" +
        '                      <span class="opener"><i class="icon solid fa-user-secret"></i> イミテイターウェポン</span>' + "\n" +
        '                      <ul>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/airride.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/airride.png" alt="" /> Airride / エアライド</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/bastet.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/bastet.png" alt="" /> Bastet / バステト</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/canopy.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/canopy.png" alt="" /> Canopy / キャノピー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/chorus.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/chorus.png" alt="" /> Chorus / コーラス</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/doctor.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/doctor.png" alt="" /> Doctor / ドクター</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/doping.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/doping.png" alt="" /> Doping / ドーピング</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/herobrine.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/herobrine.png" alt="" /> Herobrine / ヘロブライン</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/haze.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/haze.png" alt="" /> Haze / ヘイズ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/leaper.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/leaper.png" alt="" /> Leaper / リーパー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/parallel.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/parallel.png" alt="" /> Parallel / パラレル</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/rider.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/rider.png" alt="" /> Rider / ライダー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/shield.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/shield.png" alt="" /> Shield / シールド</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/shock_waver.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/shock_waver.png" alt="" /> ShockWaver / ショックウェーバー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/spear.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/spear.png" alt="" /> Spear / スピアー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/steve.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/steve.png" alt="" /> Steve / スティーブ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/swapper.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/swapper.png" alt="" /> Swapper / スワッパー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/trapper.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/trapper.png" alt="" /> Trapper / トラッパー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/twins.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/twins.png" alt="" /> Twins / ツインズ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/vanisher.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/vanisher.png" alt="" /> Vanisher / ヴァニッシャー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/xray.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/xray.png" alt="" /> Xray / エクスレイ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/imitators/yeti.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/yeti.png" alt="" /> Yeti / イエティ</a></li>' + "\n" +
        '                      </ul>' + "\n" +
        '                    </li>' + "\n" +
        '                    <li>' + "\n" +
        '                      <span class="opener"><i class="icon solid fa-chess-knight"></i> サプライウェポン</span>' + "\n" +
        '                      <ul>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/armor.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/armor.png" alt="" /> Armor / アーマー</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/battle_axe.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/battle_axe.png" alt="" /> BattleAxe / バトルアックス</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/beam.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/beam.png" alt="" /> Beam / ビーム</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/blinders.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/blinders.png" alt="" /> Blinders / ブラインダーズ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/caerus.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/caerus.png" alt="" /> Caerus / カイロス</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/crushers.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/crushers.png" alt="" /> Crushers / クラッシャーズ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/gravity.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/gravity.png" alt="" /> Gravity / グラヴィティ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/meteor.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/meteor.png" alt="" /> Meteor / メテオ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/ninja.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/ninja.png" alt="" /> Ninja / ニンジャ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/penetrator.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/penetrator.png" alt="" /> Penetrator / ぺネトレーター</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/supply/smasher.html"><img class="minecraft-item-icon" src="' + image_url + 'weapon/smasher.png" alt="" /> Smasher / スマッシャー</a></li>' + "\n" +
        '                      </ul>' + "\n" +
        '                    </li>' + "\n" +
        '                    <li>' + "\n" +
        '                      <span class="opener"><i class="icon solid fa-layer-group"></i> やりこみ要素</span>' + "\n" +
        '                      <ul>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/tier/vertex_imitation.html">Vertex Imitation / 最上位イミテーション</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/tier/kill_particle.html">Kill Particle / キルパーティクル</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/tier/name_tag.html">Name Tag / ネームタグマーク</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/tier/pride.html">Pride / 誇り</a></li>' + "\n" +
        '                      </ul>' + "\n" +
        '                    </li>' + "\n" +
        '                    <li>' + "\n" +
        '                      <span class="opener"><i class="icon solid fa-splotch"></i> デコレーション要素</span>' + "\n" +
        '                      <ul>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/decoration/cape.html">Cape / マント</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/decoration/pet.html">Pet / ペット</a></li>' + "\n" +
        '                      </ul>' + "\n" +
        '                    </li>' + "\n" +
        '                    <li>' + "\n" +
        '                      <span class="opener"><i class="icon solid fa-shoe-prints"></i> ムーブメント要素</span>' + "\n" +
        '                      <ul>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/movement/wall_bounce.html">Wall bounce / 壁ジャンプ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/movement/updraft.html">Updraft / アップドラフト</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/movement/air_curve.html">Air Curve / エアカーブ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/movement/air_strafe.html">Air Strafe / エアストレイフ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/movement/fast_straight.html">Fast Straight / ファストストレート</a></li>' + "\n" +
        '                      </ul>' + "\n" +
        '                    </li>' + "\n" +
        '                    <li>' + "\n" +
        '                      <span class="opener"><i class="icon solid fa-street-view"></i> ワールド要素</span>' + "\n" +
        '                      <ul>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/world/entry_room.html">Entry Rooms / エントリールーム</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/world/game_arena.html">Game Arenas / ゲームアリーナ</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/world/special_block.html">Special Blocks / 特殊ブロック</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/world/special_entity.html">Special Entities / 特殊エンティティ</a></li>' + "\n" +
        '                      </ul>' + "\n" +
        '                    </li>' + "\n" +
        '                    <li>' + "\n" +
        '                      <span class="opener"><i class="icon solid fa-trophy"></i> ランキング照会</span>' + "\n" +
        '                      <ul>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase01.html">PHASE-01</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase02.html">PHASE-02</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase03.html">PHASE-03</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase04.html">PHASE-04</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase05.html">PHASE-05</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase06.html">PHASE-06</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase07.html">PHASE-07</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase08.html">PHASE-08</a></li>' + "\n" +
        '                        <li><a href="' + home_path + 'pages/ranking/phase09.html">PHASE-09</a></li>' + "\n" +
        '                      </ul>' + "\n" +
        '                    </li>' + "\n" +
        '                  </ul>' + "\n" +
        '                </nav>' + "\n" +
        '' + "\n" +
        '              <!-- Section -->' + "\n" +
        '                <section>' + "\n" +
        '                  <header class="major">' + "\n" +
        '                    <h2>公式PV</h2>' + "\n" +
        '                  </header>' + "\n" +
        '                  <div class="mini-posts">' + "\n" +
        '                    <article>' + "\n" +
        '                      <a href="https://www.youtube.com/watch?v=roAdn4JMKdQ" class="image" target="_blank"><img src="' + image_url + 'third.jpg" alt="" /></a>' + "\n" +
        '                      <p>created by nnse</p>' + "\n" +
        '                    </article>' + "\n" +
        '                    <article>' + "\n" +
        '                      <a href="https://www.youtube.com/watch?v=v6-EVCq7vCg" class="image" target="_blank"><img src="' + image_url + 'second.jpg" alt="" /></a>' + "\n" +
        '                      <p>created by aihe</p>' + "\n" +
        '                    </article>' + "\n" +
        '                    <article>' + "\n" +
        '                      <a href="https://www.youtube.com/watch?v=WsCP6V4yDjs" class="image" target="_blank"><img src="' + image_url + 'first.jpg" alt="" /></a>' + "\n" +
        '                      <p>created by nnse</p>' + "\n" +
        '                    </article>' + "\n" +
        '                  </div>' + "\n" +
        '                </section>' + "\n" +
        '' + "\n" +
        '              <!-- Section -->' + "\n" +
        '                <section>' + "\n" +
        '                  <header class="major">' + "\n" +
        '                    <h2>連絡</h2>' + "\n" +
        '                  </header>' + "\n" +
        '                  <p>BowyersMCに関係する質問や意見、及びお問い合わせに関しては公式Discordサーバーにてのみ受け付けています。</p>' + "\n" +
        '                  <ul class="contact">' + "\n" +
        '                    <li class="icon brands fa-twitter"><a href="' + home_path + 'https://twitter.com/BowyersMC">@BowyersMC</a></li>' + "\n" +
        '                    <li class="icon brands fa-discord"><a href="' + home_path + 'https://discord.gg/bVRvSeKfTF">Official Discord Server</a></li>' + "\n" +
        '                    <li class="icon solid fa-home">External Server "BowyersMC"</li>' + "\n" +
        '                  </ul>' + "\n" +
        '                </section>' + "\n" +
        '' + "\n" +
        '              <!-- Footer -->' + "\n" +
        '                <footer id="footer">' + "\n" +
        '                  <p class="copyright">&copy; BowyersMC.<br />All rights reserved. Design: <a href="' + home_path + 'https://html5up.net">HTML5 UP</a>.</p>' + "\n" +
        '                </footer>' + "\n" +
        '' + "\n" +
        '            </div>'
    ;
}