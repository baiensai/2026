const datas = [
  {
    icon: "/icons/99.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "with piano",
    organization: "",
    description: "息のあったピアノの連弾と歌が魅力です。",
    timeDescription: "10:00 - 10:10",
  },
  {
    icon: "/icons/99.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "過疎中",
    organization: "",
    description: "観客の皆さんも一緒に盛り上がれるノリノリのライブを作ることが目標です！文化祭で初めてのライブとなりますが、先輩方に負けないような最高の音楽を届けたいです！",
    timeDescription: "10:15 - 10:30",
  },
  {
    icon: "/icons/3.png",
    place: "1体後方",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "梅高軽音同好会",
    organization: "",
    description: "本ステージでは、誰もが知っている楽曲も取り入れ、観客と一体となって盛り上がれる構成を考えています。親しみやすく、最後まで楽しめる点が魅力です。",
    timeDescription: "10:40 - 11:05",
  },
  {
    icon: "/icons/4.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "バタークッキー",
    organization: "",
    description: "バタークッキー、それは元ジャズ研メンバーの錚々たるメンツから構成されたバンド。マイク、ギター、ベース、キーボード、ドラムから奏でられるのは、ほどよい甘さと、味わい深い熱を持った音。これはまさしくバタークッキー、聴かないなんてもったいない！バタークッキーが好きな方にぜひ、それ以外の方にもぜひ、ぜひ。",
    /* modalDescription: <img src="IMG_5684.jpg" />, */
    timeDescription: "11:15 - 11:40",
  },
  {
    icon: "/icons/5.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "会長と愉快な仲間たち",
    organization: "",
    description: "異色のメンバー　トランペットの高音　ヴァイオリンの超絶技巧　ピアノの完璧な即興アレンジ　ちょーかっこいいドラムソロ",
    timeDescription: "11:50 - 12:05",
  },
  {
    icon: "/icons/6.png",
    place: "1体後方",
    tags: [
      { color: "blue", text: "パフォーマンス" },
      { color: "blue", text: "有志" },
    ],
    title: "書道部",
    organization: "",
    description: "観客の目の前で音楽にあわせた大迫力の書道パフォーマンスを行います。",
    timeDescription: "12:05 - 12:15",
  },
  {
    icon: "/icons/7.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "管弦楽演奏" },
      { color: "blue", text: "有志" },
    ],
    title: "梅響",
    organization: "",
    description: "3年生が引退してもなお、75人という大規模なオケになります。たくさんの人に演奏を聞いてもらい、オケの素晴らしさを知って欲しいです。大人数で大迫力の演奏を皆さんに届けたいです!!",
    timeDescription: "12:35 - 13:05",
  },
  {
    icon: "/icons/8.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "吹奏楽演奏" },
      { color: "blue", text: "有志" },
    ],
    title: "2026 有志吹奏楽団",
    organization: "",
    description: "吹奏楽部がない福高で、梅苑祭のためだけに集まったメンバーで宝島、嵐メドレーなど、楽しい演奏をお届けします！",
    timeDescription: "13:15 - 13:40",
  },
  {
    icon: "/icons/9.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "有志" },
    ],
    title: "福島高校チアリーダー部",
    organization: "",
    description: "2年生にとっては引退最後の文化祭で1年は最初の文化祭なので踊ってる姿を見てもらいたいです！絶対に盛り上げられる自信あります！",
    timeDescription: "14:05 - 14:35",
  },
  {
    icon: "/icons/99.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ダンス" },
      { color: "blue", text: "有志" },
    ],
    title: "RAWKZM(ローズ)",
    organization: "",
    description: "福高チアとして活動していたメンバーで、みんなに元気を届けたい！新しい一面を見せたい！という思いで真剣に練習に取り組んでいます",
    timeDescription: "14:35 - 15:05",
  },
  {
    icon: "/icons/99.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ダンス" },
      { color: "blue", text: "有志" },
    ],
    title: "じゅりっこ",
    organization: "",
    description: "去年からさらにパワーアップした姿をお見せします！",
    timeDescription: "15:05 - 15:30",
  },
  {
    icon: "/icons/12.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "無念晴ラスメント",
    organization: "",
    description: "ノリやすさを重視して選曲しています。初めて聴く曲でも自然と楽しめるよう構成を工夫し、観客と一体感のあるステージを目指します。文化祭の雰囲気を盛り上げるとともに、新しく“いいな”と思える曲に出会えるようなライブにします。",
    timeDescription: "9:30 - 9:45",
  },
  {
    icon: "/icons/99.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "GaiZies（ギャイザイズ）",
    organization: "",
    description: "2年生で誰よりもいい演奏をしに来ました。昨年の選考では落ちてしまいましたが今年こそは出たいと思っています。飛行艇とおしゃかしゃまとヘルプミーえーりんという曲を演奏するため皆が盛り上がれる曲からかっこいい曲まで聴衆に広くアプローチできます。バンドメンバーはジャズ研究部3人、梅響パーカッション1名、元ジャズ研究部1名と全員音楽経験者です。福島高校2年生の中、それどころか福島高校全体でもバンドの実力に大きな自信があります。是非ご検討よろしくお願いします。",
    timeDescription: "9:55 - 10:10",
  },
  {
    icon: "/icons/14.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "残業AED",
    organization: "",
    description: "私たち残業AEDが提供しますのはバンド演奏であって、バンド演奏ではないものです。たかだか高校生の文化祭だけのバンド、そうたかをくくることなかれ。バンドメンバー全員が本当に音楽を愛して、音楽に愛されようと奮闘した人生の形が、この伝統ある福島高校の梅苑祭で顕になるその光景に、観客の皆さんは圧倒されること間違いなしです。「ガチ」のバンドが、ここにあります。御期待下さい。",
    timeDescription: "10:20 - 10:45",
  },
  {
    icon: "/icons/16.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ジャズ演奏" },
      { color: "blue", text: "有志" },
    ],
    title: "Jazz研究部",
    organization: "",
    description: "ジャズを研究してたどり着いた演奏",
    timeDescription: "10:55 - 11:20",
  },
  {
    icon: "/icons/17.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
      { color: "blue", text: "有志" },
    ],
    title: "Take Five",
    organization: "",
    description: "昨年の梅苑祭では「Take Four」として出演しましたが、今年は強力なリードギターを迎え、メンバー5人の「Take Five」としてパワーアップして帰ってきました！私たちは全員がJAZZ研究部出身で、そこで培ったリズム感とアンサンブル能力が武器です。ゲスの極み乙女、ずっと真夜中でいいのに。など、演奏難易度の高い5曲に挑戦します。昨年の冬から準備を重ねてきた、「5人による5曲」の集大成。ジャズのグルーヴを隠し味にした、私たちにしかできないエモーショナルなステージで会場を圧倒します！",
    timeDescription: "11:25 - 11:50"
  },
  {
    icon: "/icons/18.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ダンス" },
      { color: "blue", text: "有志" },
    ],
    title: "ROSEA",
    organization: "",
    description: "私たちは ROSEA (ロゼア)です！2年生5人でダンスパフォーマンスを披露します♪皆さんに楽しんでいただけるステージをお届けします！",
    modalDescription: <p>私たちは ROSEA (ロゼア)です！<br />
      2年生5人でダンスパフォーマンスを披露します♪<br />
      皆さんに楽しんでいただけるステージをお届けします！
    </p>,
    timeDescription: "12:05 - 12:20",
  },
  {
    icon: "/icons/99.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ダンス" },
      { color: "blue", text: "有志" },
    ],
    title: "月人（るなんちゅ）",
    organization: "",
    description: "月人（るなんちゅ）は、皆の想像を超えるオタク達で形成されたグループです。今年の福高の花火になってやります！汚い花火ですけどね。",
    timeDescription: "12:20 - 12:35",
  },
  {
    icon: "/icons/99.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ダンス" },
      { color: "blue", text: "有志" },
    ],
    title: "Uni Bloom",
    organization: "",
    description: "ソロ演技で世界2位、グループ演技で世界1位に輝いた実績もある余目一輪車クラブ出身の2人がペア演技をします！一輪車競技はまだまだマイナーなので私たちの演技でみなさんに興味を持ってほしいです！！",
    timeDescription: "12:40 - 12:50",
  },
  {
    icon: "/icons/20.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ダンス" },
      { color: "blue", text: "DJ" },
      { color: "blue", text: "有志" },
    ],
    title: "All for D",
    organization: "",
    description: "日本舞踊Daisuke✨を世に広める活動です　飯田空大の神編曲もお楽しみください",
    timeDescription: "13:00 - 13:10",
  },
  {
    icon: "/icons/22.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "クイズ" },
      { color: "blue", text: "有志" },
    ],
    title: "福島高校クイズ研究会",
    organization: "福島高校クイズ研究会",
    description: "福高のクイズ最強を決める超楽しい大会です！毎年観戦者が多くとても盛り上がります！",
    timeDescription: "13:30 - 14:30",
  },
  {
    icon: "/icons/1-1.JPG",
    place: "3棟4階 1-1教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "脱出ゲーム" },
    ],
    title: "爆弾〜君は解除できるか〜",
    organization: "",
    description: `紳士淑女の皆様、お待ちしておりました。1₋1がお送りするのは、非日常を味わえる夢の空間「合法オフラインカジノ」！
ポーカー・大富豪・ルーレット・チンチロの４つのゲームで運試しはいかがですか？
当カジノの自慢はアメリカンな雰囲気ととびきりキュートな女装男子！？私たちが皆様を最高のエンターテインメントへとご案内します。
さあ。皆様！一日限りのギャンブラーになって、最高の思い出を作りましょう！
`,
    modalDescription: <p>紳士淑女の皆様、お待ちしておりました。1₋1がお送りするのは、非日常を味わえる夢の空間「合法オフラインカジノ」！<br />
      ポーカー・大富豪・ルーレット・チンチロの４つのゲームで運試しはいかがですか？<br />
      当カジノの自慢はアメリカンな雰囲気ととびきりキュートな女装男子！？私たちが皆様を最高のエンターテインメントへとご案内します。<br />
      さあ。皆様！一日限りのギャンブラーになって、最高の思い出を作りましょう！
    </p>,
    map: 4,
    pos: [228, 187]
  },
  {
    icon: "/icons/1-2.JPG",
    place: "3棟4階 1-2教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "お化け屋敷" },
    ],
    title: "彼岸の鳥居　壱ノ弍ーその先は、人の世にあらず…ー",
    organization: "",
    description: `8月23日の早朝、旅館のオーナーが殺された。あなたは、代わりにこの謎に包まれた事件を解くことに…
この事件のトリックを解いて犯人を当てろ！真実の扉を開けるのは君だ！
`,
    modalDescription: <p>8月23日の早朝、旅館のオーナーが殺された。あなたは、代わりにこの謎に包まれた事件を解くことに…<br />
      この事件のトリックを解いて犯人を当てろ！真実の扉を開けるのは君だ！
    </p>,
    map: 4,
    pos: [228, 143]
  },
  {
    icon: "/icons/1-3.JPG",
    place: "3棟4階 1-3教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "脱出ゲーム" },
    ],
    title: "今日、スパイになりました。",
    organization: "",
    description: `君と僕を乗せて、星空が回り出す。
回転のたびに、景色は未知の世界に変わっていく。
僕らの航海は、もう始まっている。
`,
    modalDescription: <p>
      君と僕を乗せて、星空が回り出す。<br />
      回転のたびに、景色は未知の世界に変わっていく。<br />
      僕らの航海は、もう始まっている。
    </p>,
    map: 4,
    pos: [228, 99]
  },
  {
    icon: "/icons/1-4.JPG",
    place: "3棟4階 1-4教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "脱出ゲーム" },
      { color: "blue", text: "ホラー" },
    ],
    title: "あるメイド喫茶からの脱出",
    organization: "",
    description: `ここは異世界のカジノ。
和の雅と洋の華が交差する「和洋折衷カジノ」へようこそ。
ブラックジャック、大富豪、ダーツ、ルーレット、そしてチンチロリン。
運と知略が交わるゲームの数々が、あなたを待っています。
ディーラーを務めるのは、なんと男の子メイドたち!?
キュート全開の笑顔で、あなたを夢のひとときへご案内します。
勝っても負けても景品プレゼント!ここだけの特別な体験をぜひお楽しみください。`,
    modalDescription: <p>ここは異世界のカジノ。<br />
      和の雅と洋の華が交差する「和洋折衷カジノ」へようこそ。<br />
      ブラックジャック、大富豪、ダーツ、ルーレット、そしてチンチロリン。<br />
      運と知略が交わるゲームの数々が、あなたを待っています。<br />
      ディーラーを務めるのは、なんと男の子メイドたち!?<br />
      キュート全開の笑顔で、あなたを夢のひとときへご案内します。<br />
      勝っても負けても景品プレゼント!ここだけの特別な体験をぜひお楽しみください。
    </p>,
    map: 4,
    pos: [228, 54]
  },
  {
    icon: "/icons/1-5.JPG",
    place: "4棟4階 1-5教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "お化け屋敷" },
    ],
    title: "洋風・お化け屋敷",
    organization: "",
    description: `シュガーラッシュの世界に入り込んでシューティングゲーム！的を撃ちまくって高得点を目指せ！
参加者には景品をプレゼント！
`,
    modalDescription: <p>
      シュガーラッシュの世界に入り込んでシューティングゲーム！的を撃ちまくって高得点を目指せ！<br />
      参加者には景品をプレゼント！
    </p>,
    map: 4,
    pos: [110, 54]
  },
  {
    icon: "/icons/1-6.JPG",
    place: "4棟4階 1-6教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "縁日" },
    ],
    title: "ROUTE1-6",
    organization: "",
    description: `廃墟となっていた学校に肝試しに行った主人公一行
そこで現れたのは子供の幽霊ポモであった！ポモは生前、両親に遊んで貰えなかった。その代わりに主人公達にいたずらをしてくる。そのいたずらに耐えて、ポモを満足させ御札を使い成仏させよう！
`,
    modalDescription: <p>廃墟となっていた学校に肝試しに行った主人公一行<br />
      そこで現れたのは子供の幽霊ポモであった！ポモは生前、両親に遊んで貰えなかった。その代わりに主人公達にいたずらをしてくる。そのいたずらに耐えて、ポモを満足させ御札を使い成仏させよう！
    </p>,
    map: 4,
    pos: [68, 54]
  },
  {
    icon: "/icons/1-7.JPG",
    place: "4棟4階 1-7教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "スーパー・マリオ・マニア",
    organization: "",
    description: `高谷財閥前当主が突然行方不明になってしまった...そこで行方不明になった父を探すため、息子である現高屋財閥当主は多額の懸賞金をかけた。その懸賞金目当てに多くのチャレンジャーが集まるがみな行方不明となってしまう。いつしか現当主もその屋敷を離れ屋敷は廃墟となってしまう。奇妙な屋敷通称「タカヤシキ」を探索し、無事に高谷先生を見つけ出すことはできるのか…`,
    map: 4,
    pos: [25, 54]
  },
  {
    icon: "/icons/2-1.JPG",
    place: "3棟3階 2-1教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "お化け屋敷" },
    ],
    title: "ノムランド　〜みんなあ、怖いでしょう",
    organization: "",
    description: `トロッコアドベンチャーへようこそ！2年1組では、トロッコにのって擬似的にネプリーグのような世界観を味わいながら2択クイズを解いていく臨場感のある体験を味わうことができます！身近なジャンルからマニアックなジャンルまでありとあらゆるクイズがピックアップ！果たして、全問正解するのは誰だ！？`,
    map: 3,
    pos: [228, 187]
  },
  {
    icon: "/icons/2-2.JPG",
    place: "3棟3階 2-2教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "脱出ゲーム" },
    ],
    title: "2-2番出口　〜福島高校前駅〜",
    organization: "",
    description: `現在は廃校となっているとある学校の一室。その部屋は当時の教師の怒りによって今も呪われているという…
皆様にはこの廃校を訪れてしまった被害者として教室内の恐怖を体験していただきます。しかし、ただ恐ろしいだけではなく、ちょっとしたミッションをこなせば景品もゲットできます！
2年2組クラス企画 廃校お化け屋敷
ぜひお越しください‼️
`,
    modalDescription: <p>
      現在は廃校となっているとある学校の一室。その部屋は当時の教師の怒りによって今も呪われているという…<br />
      皆様にはこの廃校を訪れてしまった被害者として教室内の恐怖を体験していただきます。しかし、ただ恐ろしいだけではなく、ちょっとしたミッションをこなせば景品もゲットできます！<br />
      2年2組クラス企画 廃校お化け屋敷<br />
      ぜひお越しください‼️<br />
    </p>,
    map: 3,
    pos: [228, 143]
  },
  {
    icon: "/icons/2-3.JPG",
    place: "3棟3階 2-3教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "脱出ゲーム" },
    ],
    title: "学校23不思議",
    organization: "",
    description: `A man knew that he cannot make from scratch.
So instead of reflecting on himself,
he parodied M*r*o.
hallo,*a*i* world!!
`,
    modalDescription: <p>
      A man knew that he cannot make from scratch.<br />
      So instead of reflecting on himself,<br />
      he parodied M*r*o.<br />
      hallo,*a*i* world!!<br />
    </p>,
    map: 3,
    pos: [228, 99]
  },
  {
    icon: "/icons/2-4.JPG",
    place: "3棟3階 2-4教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "蹴りすぎて滅!!",
    organization: "",
    description: `〜今日は、夜空がランタンでいっぱいになる日。それは一年に一度だけの特別な夜。いつも遠くから眺めていたけれど、今日は違う〜

あなたのためだけに夜空が明るく照らされます。幻想的な空間であなたも主人公になりませんか？
2年4組のトロッコアトラクション"Tangled"
ぜひお越しください。
`,
    modalDescription: <p>〜今日は、夜空がランタンでいっぱいになる日。それは一年に一度だけの特別な夜。いつも遠くから眺めていたけれど、今日は違う〜<br />
      <br />
      あなたのためだけに夜空が明るく照らされます。幻想的な空間であなたも主人公になりませんか？<br />
      2年4組のトロッコアトラクション"Tangled"<br />
      ぜひお越しください。
    </p>,
    map: 3,
    pos: [228, 54]
  },
  {
    icon: "/icons/2-5.JPG",
    place: "4棟3階 2-5教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "縁日" },
    ],
    title: "火樹銀花　〜輝き続ける一瞬の花火〜",
    organization: "",
    description: `ここは数十年前、突然閉鎖された廃校舎。
夜な夜な奇妙な音のするこの場所では数多く若者たちの失踪が報告されているらしい……。
あなた方の使命は校内に隠された“呪物”を見つけ出し、封印すること。
足を踏み入れた瞬間から、時計の針はもう戻らない。
呪いを鎮め、無事に帰還することができますか？

2年5組 クラス企画
お化け屋敷 “呪詛廻り”
`,
    modalDescription: <p>ここは数十年前、突然閉鎖された廃校舎。<br />
      夜な夜な奇妙な音のするこの場所では数多く若者たちの失踪が報告されているらしい……。<br />
      あなた方の使命は校内に隠された“呪物”を見つけ出し、封印すること。<br />
      足を踏み入れた瞬間から、時計の針はもう戻らない。<br />
      呪いを鎮め、無事に帰還することができますか？<br />
      <br />
      2年5組 クラス企画<br />
      お化け屋敷 “呪詛廻り”
    </p>,
    map: 3,
    pos: [110, 54]
  },
  {
    icon: "/icons/2-6.JPG",
    place: "4棟3階 2-6教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
      { color: "blue", text: "お化け屋敷" },
    ],
    title: "YOKOYAMANSION",
    organization: "",
    description: `ここはあの映画化した大人気ゲーム｢マインクラフト｣の世界！！マイクラの世界にいきなり放り出されたプレイヤーになりきって村人たちと交易したり、マイクラならではのクラフトをしたりして、目指すはボス（敵MOB）のところへ！！無事ボスを倒して現実の世界に戻ることは出来るのか！？`,
    map: 3,
    pos: [68, 54]
  },
  {
    icon: "/icons/2-7.JPG",
    place: "4棟3階 2-7教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "SKY JOURNEY　〜太古の空へ〜",
    organization: "",
    description: `2年7組はミニオンをテーマとしたアトラクションを作りました。
動くカートに乗りながら3つのミニゲームに挑戦しましょう！
かわいいミニオン達に囲まれる楽しい一時をお過ごしください🍌
皆様のご来場をお待ちしております。
`,
    modalDescription: <p>2年7組はミニオンをテーマとしたアトラクションを作りました。<br />
      動くカートに乗りながら3つのミニゲームに挑戦しましょう！<br />
      かわいいミニオン達に囲まれる楽しい一時をお過ごしください🍌<br />
      皆様のご来場をお待ちしております。
    </p>,
    map: 3,
    pos: [25, 54]
  },
  {
    icon: "/icons/3-1.JPG",
    place: "3棟2階 3-1教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "おもちゃの国のアリス",
    organization: "",
    description: `3ｰ1 体験型劇「山猫軒～注文だらけの晩餐会～」
｢今宵、山猫軒にて、お待ちしております。」
シーナ姫の成人のお祝いの晩餐会が開かれるこの日。行動は全て注文によって決められるという不思議な料理店、山猫軒へ招待状を手にやってきたあなたは、やがて不可解な事件に巻き込まれていきます。犯人は誰なのか？闇に潜む山猫とは？この劇の結末はお客様の注文次第。3-1体験型劇｢山猫軒」いざ、開店です！
`,
    modalDescription: <p>
      3ｰ1 体験型劇「山猫軒～注文だらけの晩餐会～」<br />
      ｢今宵、山猫軒にて、お待ちしております。」<br />
      シーナ姫の成人のお祝いの晩餐会が開かれるこの日。行動は全て注文によって決められるという不思議な料理店、山猫軒へ招待状を手にやってきたあなたは、やがて不可解な事件に巻き込まれていきます。犯人は誰なのか？闇に潜む山猫とは？この劇の結末はお客様の注文次第。3-1体験型劇｢山猫軒」いざ、開店です！<br />
    </p>,
    timeDescription: <img src='3-1table.jpg' />,
    map: 2,
    pos: [228, 187]
  },
  {
    icon: "/icons/3-2.JPG",
    place: "3棟2階 3-2教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "はたらく細胞!! 3-2支部",
    organization: "",
    description: `―3-2が贈る、衝撃のクロスオーバー…！

STARWARS episode3-2 〜月の使者と金髪の悪魔〜

※この劇では光の点滅や大きな音などの演出がございます。   
`,
    modalDescription: <p>
      ー3-2が贈る、衝撃のクロスオーバー…！<br />
      3-2 「STARWARS episode 3-2」<br />
      -月の使者と金髪の悪魔(劇)<br />
      <br />
      竹取物語×スター・ウォーズ<br />
      今日から俺は！！×スター・ウォーズ<br />
      の2種類のシナリオを用意しております。<br />
      どうぞ、どちらもお楽しみください。<br />
      <br />
      タイムスケジュールに掲載されているQRコードは3-2クラス企画のInstagramアカウントです。<br />
      是非チェックしてみてください！<br />
      <br />
      ※この劇では光の点滅や大きな音などの演出がございます。
    </p>,
    timeDescription: <img src='3-2table.jpg' />,
    map: 2,
    pos: [228, 143]
  },
  {
    icon: "/icons/3-3.JPG",
    place: "3棟2階 3-3教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "参加型劇",
    organization: "",
    description: `３-３RPG型劇『伝説の剣、抜けちゃいました』

とある高校の受験生が伝説の剣の剣抜き大会に参加したらまさかの抜けちゃった！？
魔法使いなどの仲間たちと協力して、魔王を討伐しに冒険する物語！

完全創作なので話の展開が気になって没頭すること間違いなし！

3年3組の異世界コメディワールドをどうぞお楽しみください！！
`,
    modalDescription: <p>
      ３-３RPG型劇『伝説の剣、抜けちゃいました』<br />
      <br />
      とある高校の受験生が伝説の剣の剣抜き大会に参加したらまさかの抜けちゃった！？<br />
      魔法使いなどの仲間たちと協力して、魔王を討伐しに冒険する物語！<br />
      <br />
      完全創作なので話の展開が気になって没頭すること間違いなし！<br />
      <br />
      3年3組の異世界コメディワールドをどうぞお楽しみください！！<br />
    </p>,
    timeDescription: <img src='3-3table.jpg' />,
    map: 2,
    pos: [228, 99]
  },
  {
    icon: "/icons/3-4.JPG",
    place: "3棟2階 3-4教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "Who will survive?",
    organization: "",
    description: `3-4ロボット劇『出撃 H.O.P.E.』
平和な世界で平凡な日常を送る高校生、ユーリ。そんな彼の元に現れたのは、自らを未来から来たと言うAI、エインヘリアルだった。
「あなたには世界を変えてもらわなければなりません。」
そう告げるエインヘリアルに戸惑う主人公だったが、為す術もなく巻き込まれ連れていかれた先には、一機の巨大なロボットがあった……

ロボットを駆使し戦う高校生を描いた完全オリジナルストーリー！是非ご覧下さい
`,
    modalDescription: <p>3-4ロボット劇『出撃 H.O.P.E.』<br />
      平和な世界で平凡な日常を送る高校生、ユーリ。そんな彼の元に現れたのは、自らを未来から来たと言うAI、エインヘリアルだった。<br />
      「あなたには世界を変えてもらわなければなりません。」<br />
      そう告げるエインヘリアルに戸惑う主人公だったが、為す術もなく巻き込まれ連れていかれた先には、一機の巨大なロボットがあった……<br />
      <br />
      ロボットを駆使し戦う高校生を描いた完全オリジナルストーリー！是非ご覧下さい
    </p>,
    timeDescription: <img src='3-4table.jpg' />,
    map: 2,
    pos: [228, 54]
  },
  {
    icon: "/icons/3-5.JPG",
    place: "4棟2階 3-5教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "ハリーポッターと火蜥蜴の炎",
    organization: "",
    description: `魔法学校・福島ホグワーツで、炎を住みかとする魔法生物・火蜥蜴(サラマンダー)に起きた謎の事件。ハリー、ロン、ハーマイオニーは調査を開始するも、事件の真相の鍵を握るのは、それぞれが持つ「記憶」。しかし、見ることができる記憶はたった一人分だけ。誰の記憶を再生するかは、観客の皆さんの投票で決まります。あなたの一票が物語を左右する、参加型のオリジナルストーリー。ハリーたちは、サラマンダーを救い、謎を解き明かすことはできるのでしょうか。
`,
    modalDescription: <p>
      魔法学校・福島ホグワーツで、炎を住みかとする魔法生物・火蜥蜴(サラマンダー)に起きた謎の事件。ハリー、ロン、ハーマイオニーは調査を開始するも、事件の真相の鍵を握るのは、それぞれが持つ「記憶」。しかし、見ることができる記憶はたった一人分だけ。誰の記憶を再生するかは、観客の皆さんの投票で決まります。あなたの一票が物語を左右する、参加型のオリジナルストーリー。ハリーたちは、サラマンダーを救い、謎を解き明かすことはできるのでしょうか。
    </p>,
    timeDescription: <img src='3-5table.jpg' />,
    map: 2,
    pos: [110, 54]
  },
  {
    icon: "/icons/3-6.JPG",
    place: "4棟2階 3-6教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "MIRROR",
    organization: "",
    description: `さぁ行こう「ホール・ニュー・ワールド（新しい世界）」へ...

"自由"を求め、大いなる決意を胸に、"未来"へと
向かう、1人の青年「アラジン」と王女「ジャスミン」の出会いから繰り広げられる魂も溶けそうな物語が今、始まる...

私達、3年6組は言わずと知れた不朽の名作『アラジン』を皆様に楽しんでいただけるよう自分達なりに工夫を凝らして誠心誠意お届けします！
ぜひ、「私達を信じて」6組へお越しください✨
　　　
Do you trust me？
`,
    modalDescription: <p>
      さぁ行こう「ホール・ニュー・ワールド（新しい世界）」へ...<br />
      <br />
      "自由"を求め、大いなる決意を胸に、"未来"へと<br />
      向かう、1人の青年「アラジン」と王女「ジャスミン」の出会いから繰り広げられる魂も溶けそうな物語が今、始まる...<br />
      <br />
      私達、3年6組は言わずと知れた不朽の名作『アラジン』を皆様に楽しんでいただけるよう自分達なりに工夫を凝らして誠心誠意お届けします！<br />
      ぜひ、「私達を信じて」6組へお越しください✨<br />
      <br />
      Do you trust me？<br />
    </p>,
    timeDescription: <img src='3-6table.jpg' />,
    map: 2,
    pos: [68, 54]
  },
  {
    icon: "/icons/3-7.JPG",
    place: "4棟2階 3-7教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "レ・ミゼラブル",
    organization: "",
    timeDescription: <img src='3-7table.jpg' />,
    description: `NHK for schoolで人気のシリーズを題材に演劇を作成しました！！

あのお話のあの人物、「法律」の視点で見てみると意外なキャラクターが見えてくるかも！？あの行動に裁きを下すのはあなたかもしれません！

3つのお話の劇をそれぞれ別に作成し、どの時間に来ても別の楽しみを用意できるようにしました！ぜひ3年7組にお越しください！！
`,
    modalDescription: <p>
      NHK for schoolで人気のシリーズを題材に演劇を作成しました！！<br />
      <br />
      あのお話のあの人物、「法律」の視点で見てみると意外なキャラクターが見えてくるかも！？あの行動に裁きを下すのはあなたかもしれません！<br />
      <br />
      3つのお話の劇をそれぞれ別に作成し、どの時間に来ても別の楽しみを用意できるようにしました！ぜひ3年7組にお越しください！！
    </p>,
    map: 2,
    pos: [25, 54]
  },
  {
    icon: "/icons/99.png",
    place: "地学講義室",
    tags: [
      { color: "blue", text: "有志" },
    ],
    title: "将棋部部員との対局",
    organization: "",
    timeDescription: "1日目11:00~14:30 2日目10:00~13:30",
    map: 5,
    pos: [118, 269]
  },
  {
    icon: "/icons/99.png",
    place: "2体",
    tags: [
      { color: "blue", text: "展示" },
      { color: "blue", text: "有志" },
    ],
    title: "大会での入賞作品・部で撮影した写真の展示",
    organization: "福島高校写真部",
  },
  {
    icon: "/icons/99.png",
    place: "2体",
    tags: [
      { color: "blue", text: "展示" },
      { color: "blue", text: "有志" },
    ],
    title: "福高生による大喜利の展示、投票",
    organization: "梅苑大喜利杯2026",
  },
  {
    icon: "/icons/99.png",
    place: "2体",
    tags: [
      { color: "blue", text: "展示" },
      { color: "blue", text: "有志" },
    ],
    title: "梅章編集部の活動をまとめたポスターの展示",
    organization: "梅章編集部・委員会",
  },
  {
    icon: "/icons/99.png",
    place: "2体",
    tags: [
      { color: "blue", text: "展示" },
      { color: "blue", text: "有志" },
    ],
    title: "作品展示",
    organization: "美術部",
  },
  {
    icon: "/icons/99.png",
    place: "2体",
    tags: [
      { color: "blue", text: "展示" },
      { color: "blue", text: "有志" },
    ],
    title: "うちわの文字入れ",
    organization: "書道部",
    timeDescription: "1日目は午後から 2日目は午前から",
  },
  {
    icon: "/icons/99.png",
    place: "2体",
    tags: [
      { color: "blue", text: "展示" },
      { color: "blue", text: "有志" },
    ],
    title: "ポスター・救急用品の校内設置場所マップの展示",
    organization: "保健委員会",
  },
]


export default datas



