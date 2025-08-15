const datas = [
  {
    icon: "/icons/3.png",
    place: "1体後方",
    tags: [
      { color: "blue", text: "パフォーマンス" },
      { color: "blue", text: "有志" },
    ],
    title: "書道部",
    organization: "書道部",
    description: "書道部員が3m×5mもの大きな紙の上で書のパフォーマンスを披露します!"
  },
  {
    icon: "/icons/12.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ダンス" },
      { color: "blue", text: "DJ" },
    ],
    title: "All for D",
    organization: "",
    description: ""
  },
  {
    icon: "/icons/17.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "バンド" },
    ],
    title: "takogeso",
    organization: "",
    description: "",
    modalDescription: <img src="/icons/.JPG" />
  },
  {
    icon: "/icons/22.png",
    place: "1体ステージ",
    tags: [
      { color: "blue", text: "ビブリオバトル" },
    ],
    title: "図書委員会",
    organization: "図書委員会",
    description: "「バトラーおすすめの本をご本人に熱く語って頂き、一番読みたくなった本No. 1を決めることが主な内容となっております。観客の方には最後、チャンプ本にしたい本を選んで頂きます！本好きも、そうでない人も、疲れずゆったりと楽しめるものとなっておりますので、ぜひご参加ください！」"
  },
  {
    icon: "/icons/1-1.JPG",
    place: "3棟4階 1-1教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "カジノ" },
    ],
    title: "合法オフラインカジノ",
    organization: "",
    description: `紳士淑女の皆様、お待ちしておりました。1₋1がお送りするのは、非日常を味わえる夢の空間「合法オフラインカジノ」！
ポーカー・大富豪・ルーレット・チンチロの４つのゲームで運試しはいかがですか？
当カジノの自慢はアメリカンな雰囲気ととびきりキュートな女装男子！？私たちが皆様を最高のエンターテインメントへとご案内します。
さあ。皆様！一日限りのギャンブラーになって、最高の思い出を作りましょう！
`
  },
  {
    icon: "/icons/1-2.JPG",
    place: "3棟4階 1-2教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "謎解き" },
    ],
    title: "冥探偵タツオ 紅梅色の文化祭",
    organization: "",
    description: `8月23日の早朝、旅館のオーナーが殺された。あなたは、代わりにこの謎に包まれた事件を解くことに…
この事件のトリックを解いて犯人を当てろ！真実の扉を開けるのは君だ！
`
  },
  {
    icon: "/icons/1-3.JPG",
    place: "3棟4階 1-3教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "値。〜君とカップの距離 カップの軌跡〜",
    organization: "",
    description: ""
  },
  {
    icon: "/icons/1-4.JPG",
    place: "3棟4階 1-4教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "カジノ" },
    ],
    title: "和洋折衷カジノ",
    organization: "",
    description: `ここは異世界のカジノ。
和の雅と洋の華が交差する「和洋折衷カジノ」へようこそ。
ブラックジャック、大富豪、ダーツ、ルーレット、そしてチンチロリン。
運と知略が交わるゲームの数々が、あなたを待っています。
ディーラーを務めるのは、なんと男の子メイドたち!?
キュート全開の笑顔で、あなたを夢のひとときへご案内します。
勝っても負けても景品プレゼント!ここだけの特別な体験をぜひお楽しみください。`
  },
  {
    icon: "/icons/1-5.JPG",
    place: "4棟4階 1-5教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "Sweets lawless area 〜バグを狙撃せよ〜",
    organization: "",
    description: ""
  },
  {
    icon: "/icons/1-6.JPG",
    place: "4棟4階 1-6教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "お化け屋敷" },
    ],
    title: "お化け屋敷「游」",
    organization: "",
    description: `廃墟となっていた学校に肝試しに行った主人公一行
、そこで現れたのは子供の幽霊ポモであった！ポモは生前、両親に遊んで貰えなかった。その代わりに主人公達にいたずらをしてくる。そのいたずらに耐えて、ポモを満足させ御札を使い成仏させよう！
`
  },
  {
    icon: "/icons/1-7.JPG",
    place: "4棟4階 1-7教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "お化け屋敷" },
    ],
    title: "タカヤシキ",
    organization: "",
    description: `高谷財閥前当主が突然行方不明になってしまった...そこで行方不明になった父を探すため、息子である現高屋財閥当主は多額の懸賞金をかけた。その懸賞金目当てに多くのチャレンジャーが集まるがみな行方不明となってしまう。いつしか現当主もその屋敷を離れ屋敷は廃墟となってしまう。奇妙な屋敷通称「タカヤシキ」を探索し、無事に高谷先生を見つけ出すことはできるのか…`
  },
  {
    icon: "/icons/2-1.JPG",
    place: "3棟3階 2-1教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "トロッコアドベンチャー",
    organization: "",
    description: `トロッコアドベンチャーへようこそ！2年1組では、トロッコにのって擬似的にネプリーグのような世界観を味わいながら2択クイズを解いていく臨場感のある体験を味わうことができます！身近なジャンルからマニアックなジャンルまでありとあらゆるクイズがピックアップ！果たして、全問正解するのは誰だ！？`
  },
  {
    icon: "/icons/2-2.JPG",
    place: "3棟3階 2-2教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "お化け屋敷" },
    ],
    title: "YOKO's is corsed roum 〜ようこの呪いの部屋〜",
    organization: "",
    description: ""
  },
  {
    icon: "/icons/2-3.JPG",
    place: "3棟3階 2-3教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "脱出ゲーム" },
    ],
    title: "YOSHIKI BROS.",
    organization: "",
    description: ""
  },
  {
    icon: "/icons/2-4.JPG",
    place: "3棟3階 2-4教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "Tangled",
    organization: "",
    description: `〜今日は、夜空がランタンでいっぱいになる日。それは一年に一度だけの特別な夜。いつも遠くから眺めていたけれど、今日は違う〜

あなたのためだけに夜空が明るく照らされます。幻想的な空間であなたも主人公になりませんか？
2年4組のトロッコアトラクション"Tangled"
ぜひお越しください。
`
  },
  {
    icon: "/icons/2-5.JPG",
    place: "4棟3階 2-5教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "お化け屋敷" },
    ],
    title: "呪詛廻り",
    organization: "",
    description: `ここは数十年前、突然閉鎖された廃校舎。
夜な夜な奇妙な音のするこの場所では数多く若者たちの失踪が報告されているらしい……。
あなた方の使命は校内に隠された“呪物”を見つけ出し、封印すること。
足を踏み入れた瞬間から、時計の針はもう戻らない。
呪いを鎮め、無事に帰還することができますか？

2年5組 クラス企画
お化け屋敷 “呪詛廻り”
`
  },
  {
    icon: "/icons/2-6.JPG",
    place: "4棟3階 2-6教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "リアルでマイクラ！？ 〜梅苑祭の夜を生き抜け！〜",
    organization: "",
    description: `ここはあの映画化した大人気ゲーム｢マインクラフト｣の世界！！マイクラの世界にいきなり放り出されたプレイヤーになりきって村人たちと交易したり、マイクラならではのクラフトをしたりして、目指すはボス（敵MOB）のところへ！！無事ボスを倒して現実の世界に戻ることは出来るのか！？`
  },
  {
    icon: "/icons/2-7.JPG",
    place: "4棟3階 2-7教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "アトラクション" },
    ],
    title: "ミニオンライド",
    organization: "",
    description: `2年7組はミニオンをテーマとしたアトラクションを作りました。
動くカートに乗りながら3つのミニゲームに挑戦しましょう！
かわいいミニオン達に囲まれる楽しい一時をお過ごしください🍌
皆様のご来場をお待ちしております。
`
  },
  {
    icon: "/icons/3-1.JPG",
    place: "3棟2階 3-1教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "体験型劇" },
    ],
    title: "山猫軒 〜注文だらけの晩餐会〜",
    organization: "",
    description: ``
  },
  {
    icon: "/icons/3-2.JPG",
    place: "3棟2階 3-2教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "STARWARS EPISODE3-2 〜月の使者と金髪の悪魔〜",
    organization: "",
    description: `―3-2が贈る、衝撃のクロスオーバー…！

STARWARS episode3-2
〜月の使者と金髪の悪魔〜

※この劇では光の点滅や大きな音などの
演出がございます。
`
  },
  {
    icon: "/icons/3-3.JPG",
    place: "3棟2階 3-3教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "伝説の剣、抜けました。",
    organization: "",
    description: ""
  },
  {
    icon: "/icons/3-4.JPG",
    place: "3棟2階 3-4教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "出撃 H.O.P.E.",
    organization: "",
    description: `3-4ロボット劇『出撃 H.O.P.E.』
少年少女がロボットを駆使し平和を脅かす敵に立ち向かっていくSFアクション！！
完全オリジナルの脚本をお楽しみください
`,
    modalDescription: <>
      <p>3-4ロボット劇『出撃 H.O.P.E.』
        少年少女がロボットを駆使し平和を脅かす敵に立ち向かっていくSFアクション！！
        完全オリジナルの脚本をお楽しみください</p>
      <img src='3-4table.jpg' />
    </>
  },
  {
    icon: "/icons/3-5.JPG",
    place: "4棟2階 3-5教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "カイジ 〜運命の一手〜",
    organization: "",
    description: ""
  },
  {
    icon: "/icons/3-6.JPG",
    place: "4棟2階 3-6教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "アラジン",
    organization: "",
    description: "",
    modalDescription: <img src='3-6table.jpg' />
  },
  {
    icon: "/icons/3-7.JPG",
    place: "4棟2階 3-7教室",
    tags: [
      { color: "blue", text: "クラス企画" },
      { color: "blue", text: "劇" },
    ],
    title: "昔話法廷",
    organization: "",
    description: ``
  },

]

export default datas