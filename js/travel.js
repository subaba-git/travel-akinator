const questionImages = {"nature": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1000&q=80", "city": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80", "food": "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1000&q=80", "sea": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80", "relax": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80", "active": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80", "photo": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80", "history": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1000&q=80", "train": "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=1000&q=80", "near": "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80", "far": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80", "balanced": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"};

const questions = [
  { title: "旅行で一番楽しみたいのは？", answers: [["🍜 おいしいもの","food"],["🌿 自然・景色","nature"],["🏙️ 街歩き・観光","city"],["♨️ 温泉・のんびり","relax"]] },
  { title: "旅行中の朝はどうしたい？", answers: [["☀️ 朝から動きたい","active"],["☕ ゆっくり起きたい","relax"],["🥐 朝ごはんを楽しみたい","food"],["📸 朝の景色を見たい","photo"]] },
  { title: "観光するとしたら一番惹かれるのは？", answers: [["🏛️ 歴史ある街並み","history"],["🌊 海・港","sea"],["🌲 森・山・高原","nature"],["🏙️ 都会のスポット","city"]] },
  { title: "食べ歩きは好き？", answers: [["😍 大好き！","food"],["😊 かなりしたい","food"],["😌 ほどほどでOK","balanced"],["🚶 観光を優先したい","active"]] },
  { title: "旅行のペースは？", answers: [["🏃 予定いっぱいで動く","active"],["🚶 程よく回る","balanced"],["🛋️ ゆったり過ごす","relax"],["📷 写真を撮りながら歩く","photo"]] },
  { title: "どんな景色に一番惹かれる？", answers: [["🌊 海・水平線","sea"],["⛰️ 山・高原","nature"],["🌇 街の景色・夜景","city"],["🏘️ レトロな街並み","history"]] },
  { title: "旅行先までの移動は？", answers: [["🚃 近めがうれしい","near"],["🚄 多少遠くてもOK","far"],["🚅 電車旅も楽しみたい","train"],["🗺️ 移動時間は気にしない","far"]] },
  { title: "写真を撮るなら何を一番撮りたい？", answers: [["📸 絶景・自然","photo"],["🍰 食べ物・カフェ","food"],["🏛️ 建物・街並み","history"],["🫶 ふたりの思い出写真","photo"]] },
  { title: "旅行で絶対に外せないのは？", answers: [["♨️ 癒やし・温泉","relax"],["🍴 ごはん","food"],["🛍️ 観光・ショッピング","city"],["🌳 自然の中で過ごすこと","nature"]] },
  { title: "少し特別な旅行にするなら？", answers: [["💎 おしゃれなホテル・街","city"],["♨️ 温泉旅館","relax"],["🌲 自然の中で非日常","nature"],["🍰 カフェやスイーツ巡り","food"]] },
  { title: "旅行中、どちらの時間が好き？", answers: [["🚶 たくさん歩いて発見する","active"],["🛋️ 景色を眺めてのんびり","relax"],["📸 きれいな場所を探す","photo"],["🍴 お店を探して食べる","food"]] },
  { title: "今いちばん行きたい場所の雰囲気は？", answers: [["🌊 海辺のリゾート","sea"],["🌲 緑いっぱいの場所","nature"],["🏙️ おしゃれな街","city"],["♨️ 温泉街","relax"]] },
  { title: "旅館・ホテルを選ぶなら？", answers: [["♨️ 温泉が充実している","relax"],["🪟 景色が最高","photo"],["🍽️ 食事がおいしい","food"],["📍 観光地に近い","city"]] },
  { title: "海がある旅行先なら何をしたい？", answers: [["🏖️ 海を眺めてのんびり","sea"],["🐟 海鮮を食べたい","food"],["📸 海の絶景を撮りたい","photo"],["🚶 海沿いを歩きたい","active"]] },
  { title: "山・自然がある旅行先なら？", answers: [["🌲 森を散策したい","nature"],["📸 絶景を見たい","photo"],["🥾 しっかり歩きたい","active"],["☕ 景色を見ながら休みたい","relax"]] },
  { title: "温泉旅行で一番大事なのは？", answers: [["🛁 とにかく温泉","relax"],["🍱 食事も大事","food"],["🏘️ 温泉街の散策","city"],["🌿 周りの自然","nature"]] },
  { title: "街歩きで楽しいのは？", answers: [["🏛️ 歴史的な建物","history"],["☕ カフェ・雑貨店","city"],["🍡 食べ歩き","food"],["📸 写真映えする路地","photo"]] },
  { title: "旅行中の夜はどう過ごしたい？", answers: [["♨️ 温泉に入ってゆっくり","relax"],["🌃 夜景・街歩き","city"],["🍴 おいしい夕食","food"],["📸 夜の景色を撮りたい","photo"]] },
  { title: "旅行で『非日常』を感じるなら？", answers: [["🌊 海の景色","sea"],["🌲 山や森","nature"],["🏮 昔ながらの街","history"],["♨️ 温泉旅館","relax"]] },
  { title: "お土産選びで重視するのは？", answers: [["🍰 ご当地グルメ","food"],["🧸 かわいい・おしゃれなもの","city"],["🏮 その土地らしい伝統品","history"],["📸 思い出に残るもの","photo"]] },
  { title: "移動そのものを楽しむなら？", answers: [["🚅 新幹線・特急で遠出","train"],["🚃 ローカル線の旅","train"],["🚶 現地で歩く時間が好き","active"],["🚗 景色を見ながらゆっくり","balanced"]] },
  { title: "旅行先の距離感はどれが理想？", answers: [["🏠 すぐ行ける近場","near"],["🚆 2〜3時間くらい","balanced"],["🚄 半日かけても行きたい","far"],["🗺️ 遠くても特別ならOK","far"]] },
  { title: "観光スポットはどれくらい回りたい？", answers: [["🔥 できるだけたくさん","active"],["🙂 主要スポットをほどよく","balanced"],["🌿 1〜2か所をじっくり","relax"],["📸 写真映えを優先","photo"]] },
  { title: "旅行中に時間を使うなら？", answers: [["🍴 食事・スイーツ","food"],["🌿 景色・自然","nature"],["🏙️ 観光・買い物","city"],["♨️ ホテル・温泉","relax"]] },
  { title: "どちらの旅行が思い出に残りそう？", answers: [["🌊 海を見た感動","sea"],["🗻 絶景に出会う旅","photo"],["🏮 街の歴史を感じる旅","history"],["🫶 ゆっくりふたりで過ごす旅","relax"]] },
  { title: "旅行先で『おいしい！』を最優先したい？", answers: [["😍 かなり優先したい","food"],["😊 できれば重視したい","food"],["😌 景色や観光が先","balanced"],["🌿 食事より自然を楽しみたい","nature"]] },
  { title: "旅行でちょっと冒険するなら？", answers: [["🥾 自然の中を歩く","active"],["🗺️ 知らない街を巡る","city"],["🚄 少し遠い場所へ行く","far"],["📸 絶景スポットを探す","photo"]] },
  { title: "理想の旅行写真は？", answers: [["🗻 圧倒的な絶景","photo"],["🍜 おいしそうな料理","food"],["🏘️ 雰囲気のある街並み","history"],["🫶 ふたりが写った写真","photo"]] },
  { title: "旅行で疲れたとき、したいのは？", answers: [["🛁 温泉で回復","relax"],["☕ カフェで休憩","food"],["🌿 自然を眺める","nature"],["🚶 軽く街を歩く","balanced"]] },
  { title: "『また行きたい』と思う旅行先は？", answers: [["🌊 海がきれいな場所","sea"],["♨️ 温泉が最高な場所","relax"],["🍜 食べ物がおいしい場所","food"],["🏙️ 街歩きが楽しい場所","city"]] },
  { title: "最後に、今の気分に一番近いのは？", answers: [["🌊 海を見に行きたい！","sea"],["🌲 自然に癒やされたい！","nature"],["🍴 おいしいものを楽しみたい！","food"],["✨ いつもと違う場所へ行きたい！","city"]] }
];

const destinations = {
  "伊豆高原": {
    "score": {
      "food": 5,
      "nature": 8,
      "city": 2,
      "relax": 8,
      "active": 3,
      "balanced": 4,
      "photo": 8,
      "history": 2,
      "sea": 7,
      "near": 2,
      "far": 5,
      "train": 2
    },
    "comment": "海と自然、そして温泉。景色を楽しみながらゆったり過ごす誕生日旅行にぴったり！",
    "tags": [
      "🌿 自然",
      "♨️ 温泉",
      "📸 写真"
    ],
    "details": "海沿いの景色や自然を楽しみながら、温泉でのんびり。ふたりでゆっくり過ごしたい旅におすすめ。"
  },
  "河口湖": {
    "score": {
      "food": 4,
      "nature": 9,
      "city": 1,
      "relax": 6,
      "active": 4,
      "balanced": 5,
      "photo": 10,
      "history": 2,
      "sea": 0,
      "near": 3,
      "far": 5,
      "train": 3
    },
    "comment": "富士山と湖の絶景を楽しむ、思い出に残る2日間！",
    "tags": [
      "🗻 富士山",
      "🌊 湖",
      "📸 絶景"
    ],
    "details": "湖畔から富士山を眺めたり、カフェを巡ったり。写真に残したくなる景色がいっぱい。"
  },
  "熱海": {
    "score": {
      "food": 7,
      "nature": 3,
      "city": 7,
      "relax": 9,
      "active": 3,
      "balanced": 5,
      "photo": 7,
      "history": 3,
      "sea": 9,
      "near": 6,
      "far": 2,
      "train": 7
    },
    "comment": "海、温泉、グルメを全部楽しめる、気軽だけど特別な旅へ！",
    "tags": [
      "🌊 海",
      "♨️ 温泉",
      "🍴 グルメ"
    ],
    "details": "アクセスしやすく、温泉街や海辺の散策も楽しめる。1泊2日にちょうどいい旅行先。"
  },
  "下田": {
    "score": {
      "food": 8,
      "nature": 8,
      "city": 2,
      "relax": 7,
      "active": 4,
      "balanced": 4,
      "photo": 9,
      "history": 2,
      "sea": 10,
      "near": 1,
      "far": 7,
      "train": 4
    },
    "comment": "きれいな海とリゾート気分。いつもより少し特別な時間を！",
    "tags": [
      "🏖️ 海",
      "🐟 海鮮",
      "📸 写真"
    ],
    "details": "海を見ながらのんびり過ごしたいならぴったり。海鮮や絶景も楽しめる。"
  },
  "館山・南房総": {
    "score": {
      "food": 8,
      "nature": 8,
      "city": 1,
      "relax": 7,
      "active": 5,
      "balanced": 4,
      "photo": 8,
      "history": 2,
      "sea": 10,
      "near": 4,
      "far": 4,
      "train": 2
    },
    "comment": "海鮮と海、ドライブ気分で楽しむのんびり旅！",
    "tags": [
      "🌊 海",
      "🐟 海鮮",
      "🚗 ドライブ"
    ],
    "details": "海沿いを巡りながら、おいしい海鮮を楽しむ。景色もグルメも欲張れる旅。"
  },
  "鴨川": {
    "score": {
      "food": 6,
      "nature": 9,
      "city": 1,
      "relax": 7,
      "active": 7,
      "balanced": 4,
      "photo": 7,
      "history": 1,
      "sea": 9,
      "near": 3,
      "far": 5,
      "train": 2
    },
    "comment": "海と自然、ちょっとアクティブな観光も楽しめる旅へ！",
    "tags": [
      "🌊 海",
      "🌿 自然",
      "🎡 観光"
    ],
    "details": "海辺を楽しみながら、自然や観光スポットも回れるバランスのいい旅行先。"
  },
  "箱根": {
    "score": {
      "food": 5,
      "nature": 8,
      "city": 2,
      "relax": 10,
      "active": 3,
      "balanced": 6,
      "photo": 8,
      "history": 5,
      "sea": 0,
      "near": 5,
      "far": 4,
      "train": 8
    },
    "comment": "温泉と自然で、誕生日らしい少し贅沢な2日間を。",
    "tags": [
      "♨️ 温泉",
      "🌲 自然",
      "🛌 のんびり"
    ],
    "details": "景色を楽しみながら移動して、温泉でゆっくり。特別感のある誕生日旅行にぴったり。"
  },
  "草津温泉": {
    "score": {
      "food": 7,
      "nature": 6,
      "city": 5,
      "relax": 10,
      "active": 2,
      "balanced": 5,
      "photo": 8,
      "history": 6,
      "sea": 0,
      "near": 1,
      "far": 8,
      "train": 5
    },
    "comment": "温泉をとことん楽しむならここ。湯畑の景色も思い出に残る！",
    "tags": [
      "♨️ 温泉",
      "♨️ 湯畑",
      "🍡 食べ歩き"
    ],
    "details": "温泉街を歩いて、おいしいものを食べて、ゆっくり温泉へ。王道の温泉旅行。"
  },
  "四万温泉": {
    "score": {
      "food": 4,
      "nature": 9,
      "city": 1,
      "relax": 10,
      "active": 1,
      "balanced": 4,
      "photo": 7,
      "history": 2,
      "sea": 0,
      "near": 1,
      "far": 8,
      "train": 2
    },
    "comment": "静かな温泉と自然の中で、ふたりだけの時間をゆっくり。",
    "tags": [
      "♨️ 温泉",
      "🌲 自然",
      "🫶 のんびり"
    ],
    "details": "にぎやかな観光より、静かに癒やされたい気分なら相性抜群。"
  },
  "鬼怒川温泉": {
    "score": {
      "food": 5,
      "nature": 8,
      "city": 3,
      "relax": 9,
      "active": 6,
      "balanced": 6,
      "photo": 8,
      "history": 4,
      "sea": 0,
      "near": 3,
      "far": 6,
      "train": 7
    },
    "comment": "温泉と渓谷の景色を楽しみながら、ほどよく観光も！",
    "tags": [
      "♨️ 温泉",
      "⛰️ 渓谷",
      "📸 景色"
    ],
    "details": "温泉だけでなく周辺観光も楽しめるので、のんびりと観光のバランスがいい旅。"
  },
  "伊香保温泉": {
    "score": {
      "food": 8,
      "nature": 5,
      "city": 6,
      "relax": 10,
      "active": 3,
      "balanced": 6,
      "photo": 8,
      "history": 8,
      "sea": 0,
      "near": 3,
      "far": 6,
      "train": 4
    },
    "comment": "石段の温泉街を歩いて、食べて、ゆっくり温泉へ！",
    "tags": [
      "♨️ 温泉",
      "🏘️ 石段",
      "🍡 食べ歩き"
    ],
    "details": "レトロな温泉街の雰囲気と食べ歩きが魅力。写真も思い出も残せる。"
  },
  "越後湯沢": {
    "score": {
      "food": 9,
      "nature": 8,
      "city": 2,
      "relax": 9,
      "active": 5,
      "balanced": 5,
      "photo": 7,
      "history": 2,
      "sea": 1,
      "near": 2,
      "far": 7,
      "train": 10
    },
    "comment": "新幹線で行く温泉と山の旅。ご当地グルメも楽しみ！",
    "tags": [
      "♨️ 温泉",
      "⛰️ 山",
      "🍴 グルメ"
    ],
    "details": "電車旅も楽しみたいならおすすめ。温泉と自然、地元のおいしいものを満喫。"
  },
  "軽井沢": {
    "score": {
      "food": 7,
      "nature": 10,
      "city": 4,
      "relax": 8,
      "active": 4,
      "balanced": 5,
      "photo": 10,
      "history": 2,
      "sea": 0,
      "near": 1,
      "far": 8,
      "train": 9
    },
    "comment": "高原の自然とカフェ。おしゃれで少し特別な2日間に！",
    "tags": [
      "🌲 高原",
      "☕ カフェ",
      "📸 絶景"
    ],
    "details": "緑の中をのんびり歩いたり、カフェに寄ったり。日常から少し離れて過ごせる旅。"
  },
  "那須高原": {
    "score": {
      "food": 7,
      "nature": 10,
      "city": 1,
      "relax": 8,
      "active": 8,
      "balanced": 5,
      "photo": 8,
      "history": 1,
      "sea": 0,
      "near": 2,
      "far": 7,
      "train": 5
    },
    "comment": "高原の自然を楽しみながら、レジャーもできる欲張り旅！",
    "tags": [
      "🌲 高原",
      "🎢 レジャー",
      "🍴 グルメ"
    ],
    "details": "自然の中で遊びたい、でものんびりもしたい。そんな気分に合う旅行先。"
  },
  "安曇野": {
    "score": {
      "food": 5,
      "nature": 10,
      "city": 1,
      "relax": 10,
      "active": 3,
      "balanced": 4,
      "photo": 10,
      "history": 3,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 4
    },
    "comment": "山と田園の景色に癒やされる、ゆったり大人な旅へ。",
    "tags": [
      "⛰️ 山",
      "🌾 自然",
      "🫶 ゆったり"
    ],
    "details": "絶景や自然を楽しみながら、時間を気にせずゆっくり過ごしたいふたり向け。"
  },
  "松本": {
    "score": {
      "food": 9,
      "nature": 4,
      "city": 8,
      "relax": 4,
      "active": 7,
      "balanced": 6,
      "photo": 8,
      "history": 10,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 7
    },
    "comment": "城下町を歩いて、ご当地グルメを楽しむ観光旅！",
    "tags": [
      "🏯 城下町",
      "🍴 グルメ",
      "🚶 街歩き"
    ],
    "details": "松本城や街並みを楽しみながら、食べ歩きやカフェも楽しめる。"
  },
  "諏訪湖": {
    "score": {
      "food": 5,
      "nature": 9,
      "city": 2,
      "relax": 9,
      "active": 3,
      "balanced": 5,
      "photo": 10,
      "history": 2,
      "sea": 0,
      "near": 1,
      "far": 9,
      "train": 5
    },
    "comment": "湖と山、温泉と景色。静かでロマンチックな旅行に。",
    "tags": [
      "🌊 湖",
      "♨️ 温泉",
      "📸 景色"
    ],
    "details": "湖畔の景色を楽しみながらゆっくり。写真にも思い出にも残る旅。"
  },
  "富士急ハイランド＋どこか": {
    "score": {
      "food": 7,
      "nature": 6,
      "city": 4,
      "relax": 2,
      "active": 10,
      "balanced": 4,
      "photo": 9,
      "history": 1,
      "sea": 0,
      "near": 3,
      "far": 6,
      "train": 6
    },
    "comment": "思いっきり遊んで、もう1か所も楽しむアクティブな2日間！",
    "tags": [
      "🎢 絶叫",
      "🔥 アクティブ",
      "📸 思い出"
    ],
    "details": "アトラクションを楽しみたい気分なら最有力。2日目の行き先を組み合わせる楽しさも。"
  },
  "山形＋蔵王": {
    "score": {
      "food": 10,
      "nature": 10,
      "city": 3,
      "relax": 9,
      "active": 7,
      "balanced": 5,
      "photo": 9,
      "history": 5,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 8
    },
    "comment": "山、温泉、ご当地グルメ。遠出するからこその特別な旅！",
    "tags": [
      "⛰️ 山",
      "♨️ 温泉",
      "🍴 グルメ"
    ],
    "details": "普段より少し遠くまで行って、自然と温泉と食をまとめて楽しむ。"
  },
  "長野＋善光寺": {
    "score": {
      "food": 8,
      "nature": 6,
      "city": 8,
      "relax": 5,
      "active": 6,
      "balanced": 7,
      "photo": 7,
      "history": 10,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 10
    },
    "comment": "歴史ある街を歩いて、おいしいものも楽しむ旅へ！",
    "tags": [
      "⛩️ 歴史",
      "🚶 街歩き",
      "🍴 食べ歩き"
    ],
    "details": "善光寺周辺を散策しながら、長野ならではのグルメを楽しめる。"
  },
  "小布施＋長野": {
    "score": {
      "food": 10,
      "nature": 4,
      "city": 8,
      "relax": 7,
      "active": 4,
      "balanced": 7,
      "photo": 8,
      "history": 9,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 9
    },
    "comment": "栗グルメと街歩き。ゆったりおしゃれな食の旅！",
    "tags": [
      "🌰 栗グルメ",
      "🏘️ 街歩き",
      "📸 写真"
    ],
    "details": "おいしいものを中心に、歴史ある街並みやカフェも楽しみたいならぴったり。"
  },
  "上田＋別所温泉": {
    "score": {
      "food": 7,
      "nature": 5,
      "city": 7,
      "relax": 9,
      "active": 4,
      "balanced": 7,
      "photo": 7,
      "history": 10,
      "sea": 0,
      "near": 1,
      "far": 9,
      "train": 9
    },
    "comment": "城下町と温泉を一度に。観光も癒やしも楽しめる旅！",
    "tags": [
      "🏯 歴史",
      "♨️ 温泉",
      "🚶 街歩き"
    ],
    "details": "上田の街を楽しんだあと、別所温泉でゆっくり。1泊2日にメリハリがある。"
  },
  "日光": {
    "score": {
      "food": 6,
      "nature": 10,
      "city": 4,
      "relax": 8,
      "active": 7,
      "balanced": 7,
      "photo": 10,
      "history": 10,
      "sea": 0,
      "near": 4,
      "far": 6,
      "train": 9
    },
    "comment": "世界遺産と自然、温泉まで。見どころたっぷりの2日間！",
    "tags": [
      "🏛️ 世界遺産",
      "🌲 自然",
      "♨️ 温泉"
    ],
    "details": "歴史ある建物も自然の景色も楽しめる。観光をしっかり楽しみたいときに。"
  },
  "会津若松": {
    "score": {
      "food": 9,
      "nature": 5,
      "city": 8,
      "relax": 5,
      "active": 7,
      "balanced": 6,
      "photo": 8,
      "history": 10,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 8
    },
    "comment": "歴史ある街を歩いて、ご当地グルメを満喫する旅へ！",
    "tags": [
      "🏯 歴史",
      "🍴 グルメ",
      "🚶 街歩き"
    ],
    "details": "城や歴史ある街並みを見ながら、会津ならではの食も楽しめる。"
  },
  "福島＋飯坂温泉": {
    "score": {
      "food": 9,
      "nature": 6,
      "city": 7,
      "relax": 10,
      "active": 4,
      "balanced": 7,
      "photo": 7,
      "history": 5,
      "sea": 0,
      "near": 1,
      "far": 9,
      "train": 10
    },
    "comment": "温泉で癒やされながら、街歩きとおいしいものも楽しむ旅！",
    "tags": [
      "♨️ 温泉",
      "🍑 グルメ",
      "🚶 街歩き"
    ],
    "details": "温泉をメインにしつつ、福島ならではの食や観光も楽しめる。"
  },
  "新潟": {
    "score": {
      "food": 10,
      "nature": 4,
      "city": 9,
      "relax": 6,
      "active": 5,
      "balanced": 7,
      "photo": 7,
      "history": 4,
      "sea": 8,
      "near": 0,
      "far": 10,
      "train": 10
    },
    "comment": "海鮮やご当地グルメを満喫！街歩きも楽しめる遠出旅。",
    "tags": [
      "🐟 海鮮",
      "🍶 グルメ",
      "🏙️ 街歩き"
    ],
    "details": "新幹線で遠出して、おいしいものをたくさん楽しみたいならおすすめ。"
  },
  "秩父＋長瀞": {
    "score": {
      "food": 8,
      "nature": 10,
      "city": 3,
      "relax": 6,
      "active": 9,
      "balanced": 6,
      "photo": 9,
      "history": 4,
      "sea": 0,
      "near": 8,
      "far": 2,
      "train": 6
    },
    "comment": "自然の中で遊んで、食べ歩きも！気軽で楽しい1泊2日。",
    "tags": [
      "🌿 自然",
      "🏞️ 川",
      "🍡 食べ歩き"
    ],
    "details": "近めの旅行先で、自然とアクティビティをしっかり楽しみたいときにぴったり。"
  },
  "甲府＋石和温泉": {
    "score": {
      "food": 9,
      "nature": 8,
      "city": 5,
      "relax": 10,
      "active": 4,
      "balanced": 6,
      "photo": 9,
      "history": 4,
      "sea": 0,
      "near": 2,
      "far": 8,
      "train": 7
    },
    "comment": "温泉と山、ワインやグルメも楽しめる大人な旅へ！",
    "tags": [
      "♨️ 温泉",
      "🍷 ワイン",
      "⛰️ 山"
    ],
    "details": "温泉でゆっくりしながら、山梨らしいグルメや景色も楽しめる。"
  }
};

let current = 0;
let selected = [];
let historyValues = [];

const introCard = document.getElementById("introCard");
const quizArea = document.getElementById("quizArea");
const thinkingBox = document.getElementById("thinkingBox");
const resultBox = document.getElementById("travelResult");

function render() {
  const q = questions[current];
  document.getElementById("questionTitle").textContent = q.title;
  const imageKey = q.answers[0]?.[1] || "nature";
  document.getElementById("questionImage").src = questionImages[imageKey] || questionImages.nature;
  document.getElementById("questionNumber").textContent = `QUESTION ${String(current + 1).padStart(2, "0")}`;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.answers.forEach(([label, value]) => {
    const b = document.createElement("button");
    b.className = "answer-button";
    b.textContent = label;
    b.onclick = () => choose(value);
    answers.appendChild(b);
  });

  document.getElementById("progressText").textContent = `${current + 1} / ${questions.length}`;
  document.getElementById("progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
  document.getElementById("backButton").disabled = current === 0;
}

function startQuiz() {
  introCard.classList.add("is-hidden");
  quizArea.classList.remove("is-hidden");
  render();
  window.scrollTo({top: 0, behavior: "smooth"});
}

function choose(value) {
  selected[current] = value;
  historyValues[current] = value;
  current++;

  if (current < questions.length) {
    render();
    window.scrollTo({top: 0, behavior: "smooth"});
  } else {
    showThinking();
  }
}

function goBack() {
  if (current <= 0) return;
  current--;
  render();
  window.scrollTo({top: 0, behavior: "smooth"});
}

function showThinking() {
  quizArea.classList.add("is-hidden");
  thinkingBox.classList.remove("is-hidden");
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(showResult, 1450);
}

function showResult() {
  const count = {};
  selected.forEach(v => count[v] = (count[v] || 0) + 1);

  // MBTI風の4軸：自然/街、行動/癒やし、食/文化、遠出/近場
  const axes = [
    ["nature", "city"],
    ["active", "relax"],
    ["food", "history"],
    ["far", "near"]
  ];
  const letters = [
    (count.nature || 0) >= (count.city || 0) ? "N" : "C",
    (count.active || 0) >= (count.relax || 0) ? "A" : "R",
    (count.food || 0) >= (count.history || 0) ? "F" : "H",
    (count.far || 0) >= (count.near || 0) ? "D" : "L"
  ];
  const typeCode = letters.join("");
  
  const labels = {N:"自然派",C:"街派",A:"アクティブ派",R:"癒やし派",F:"グルメ派",H:"文化派",D:"遠出派",L:"近場派"};
  const typeLabel = letters.map(x=>labels[x]).join(" × ");

  // 4軸の方向性と旅行先スコアを比較。副属性は弱く加点して結果を細分化。
  let sorted=[];
  Object.entries(destinations).forEach(([name,data])=>{
    const s=data.score || {}; let score=0;
    axes.forEach(([a,b])=>{
      const user=(count[a]||0)-(count[b]||0);
      const place=Number(s[a]||0)-Number(s[b]||0);
      score += user * place;
    });
    ["photo","sea","train","balanced"].forEach(k=>{ score += (count[k]||0) * ((Number(s[k]||0)-5) * 0.15); });
    sorted.push([name,data,score]);
  });
  sorted.sort((a,b)=>b[2]-a[2]);
  const winner=sorted[0][0], destination=sorted[0][1];

  thinkingBox.classList.add("is-hidden");
  resultBox.classList.remove("is-hidden");
  document.getElementById("destinationResult").textContent = winner;
  document.getElementById("destinationComment").textContent = `${typeCode}｜${typeLabel}`;
  const tags=document.getElementById("destinationTags"); tags.innerHTML="";
  destination.tags.forEach(tag=>{const span=document.createElement("span");span.textContent=tag;tags.appendChild(span);});
  document.getElementById("destinationDetails").textContent = destination.comment + " " + destination.details;
  const resultReveal=document.querySelector(".result-reveal"); resultReveal.classList.add("result-pop");
  setTimeout(()=>resultReveal.classList.remove("result-pop"),650);
  window.scrollTo({top:0,behavior:"smooth"});
}

document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("backButton").addEventListener("click", goBack);
const restartButton = document.getElementById("restartButton");
if (restartButton) {
  restartButton.addEventListener("click", () => {
    current = 0;
    selected = [];
    historyValues = [];
    resultBox.classList.add("is-hidden");
    thinkingBox.classList.add("is-hidden");
    introCard.classList.remove("is-hidden");
    window.scrollTo({top: 0, behavior: "smooth"});
  });
}

render();
