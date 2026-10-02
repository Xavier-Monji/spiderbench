# iPad / A14 向け Spiderbench

対象: iPad 第10世代相当（A14、RAM 4 GB）、WebGL2 対応ブラウザ。
**30 fps は目標値で、実機での達成・長時間の無クラッシュを保証するものではありません。実際の A14 / Safari は未測定です。**

## 成果物

- `dist/`: jsDelivr 用の実ビルド。JS・CSS・画像・モデル・フォント・音声を含みます。
- `deployment/spiderbench-cdn.zip`: 上記 `dist/` と起動ファイル、設定情報、LICENSE の保存用パッケージ。
- `deployment/spiderbench-cdn.zip.sha256`: ZIP の SHA-256。
- `deployment/launcher.html`: 1 KB 未満の起動HTML。ゲーム本体は含めず、CDN から取得します。
- `deployment/launcher.data-uri.txt`: **1行**の Data URI。UTF-8 HTML の Base64 です。
- `deployment/build-info.json`: 実際のCDN URL、バイト数、公開・検証状態。
- `deployment/release.json`: 配信専用コミットの40桁SHAとGitツリー、アセット総サイズ。

`dist/` はソースの作業ツリーでは従来どおり Git 管理対象外です。公開時には `dist/` と LICENSE **だけ**のGitツリーを別コミットに保存し、固定セッションブランチのソースコミットの第2親として履歴に保持します。ソース／デスクトップ用原本はそのまま残します。ZIPや公開コミットからも復元できます。

## 操作

| 操作 | タッチUI |
|---|---|
| 移動 | 左下のアナログパッド。スティックの倒し量に応じて移動 |
| カメラ | ボタン／パッド以外のゲーム画面をドラッグ |
| ジャンプ | `JUMP`。押し続けてチャージ、離してジャンプ |
| ウェブスイング | 空中で `SWING` を押し続ける。離すと解除。前方の建物がアンカーになる |
| ジップ／ポイントランチ | `ZIP` |
| ブースト／ダイブ | `BOOST` / `DIVE` |
| インタラクション | `USE`。長押しを要するタワー等にも対応 |
| パルクール／ロープ等 | `…` で補助ボタンを展開 |
| 戦闘 | 戦闘中に攻撃、回避、ウェブ、ストライク、投げ、フィニッシャー、回復へ切替 |
| 地図／一時停止 | 上部 `MAP` / `MENU`。メニューの `Resume` で戻る |

移動・カメラ・スイングは同時に別の指で操作できます。pointer cancel、回転・サイズ変更、フォーカス喪失、メニュー移行で押しっぱなしを解除します。全画面表示はブラウザが対応する場合のみ利用できます。キーボード／マウス／標準ゲームパッドの従来の割り当ては残しています。
地図は指でパン／タップ選択、Photo Mode は指ドラッグでカメラ／ステッカーを操作できます。

## 必要な範囲の軽量化

- iPadOS の「Macintosh」UA + マルチタッチも検出。モバイル／4 GB 以下の機器は `mobile` が既定。
- SSGI、SSR、TAA、ポストAO、光芒、平面反射、濡れ面処理、DOF／モーションブラー用の重いバッファは **確保しません**。モバイルに不要な SSR のアルファ符号化も省略。
- 建物の近距離影は残します（1024² × 1 cascade、140 m、3 taps、原則隔フレーム更新）。細かい屋上／装飾の影はオフ、動的プロップの影は近傍に限定。
- 空・雲、PBR、IBL、霧、ACES、カラーグレード、軽いブルーム、FXAA は維持。TAA なしの雲ノイズは固定＋軽い空のフィルター。半精度 HDR の非有限ハイライトから黒いブルーム斑が広がる問題も防御。
- 初期スケール 0.85、DPR 上限 1.25、描画バッファ **最大100万画素**。数秒単位の計測／ヒステリシスで下限 0.6 まで自動調整。メニューのスケールは自動調整の上限になります。制約機器／Data URI起動では品質UIをMobileに固定し、誤操作で旧デスクトップ用割当へ戻らないようにします。
- 詳細ファサード 420 m、装飾 240 m、街の簡易LOD 2400 m、カメラ far 6000 m。人口／プロップの更新・描画範囲にも上限。
- 全都市の高密度頂点を起動時に展開する代わりに、元のビルダー呼び出しを Float64 のコンパクトなレシピで保持。近傍を CPU 約3 ms のスライスで復元し、離れると **CPU 配列と GPU バッファの両方**を解放。元の三角形を削るデシメーションは行いません（上限に達した場合は遠い詳細から解放し、復元を待ちます）。再訪時のGPUアップロードも1属性ずつ段階化します。
- ストリーム対象の展開済みジオメトリは **256 MiB** の常駐上限。これはブラウザ全体の RAM 上限ではありません。遠景・地面、レシピ、衝突、テクスチャ、音声等は別途必要です。未ロードのファサードは簡易LODにフォールバック。
- 頂点位置／index／ワールドUVはそのまま。法線は normalized int16、色と小さな材質パラメータは半精度、part ID は uint8。衝突構築も typed storage 化。屋上占有グリッドと使い終わった構築バッファを解放。
- テクスチャと GLB 内画像のみを適度に縮小。ストリップのレイヤー数、モデルのメッシュ／骨／アニメーション／非画像 bufferView は維持。
- BGM 4 stem はモバイルのみ `HTMLAudioElement` → WebAudio でストリーミング。約287 MiB 相当の長いPCMバッファを一括デコードしません。OGG 非対応ブラウザには同梱AAC (`.m4a`) を使用。最初の操作で音声を解除し、非同期取得後に再度操作すると再試行します。
- 非表示タブ／GL context loss では GPU 提出を停止。復帰時にサイズと状態を戻し、回復できない場合は再読込ボタンを表示。

対象テクスチャのミップ付き RGBA **理論値**は約1004.5 → 191.1 MiB（約81%減）。これは GPU／RAM 実測値でも全アセットの合計でもありません。ビルドの `dist/mobile-assets.json` に寸法・レイヤー数・画像／GLBサイズを記録します。

## ビルド

Node.js 20.19+ または22.12+。

```sh
npm ci
npm run dev                 # 0.0.0.0:5173、相対URLの通常開発サーバー
npm run build               # 通常の dist。デスクトップ用原本とモバイル用画像の両方
npm run build:cdn           # 相対base ./、モバイル用画像に置換した dist、起動HTMLとData URI
npm run publish:cdn         # 配信用コミット作成＋起動URL固定＋セッションブランチだけをpush
npm run archive:cdn         # 最後のCDNビルドをZIPに保存
```

テクスチャ処理は Sharp を使い、再利用キャッシュは `.cache/mobile-assets/`。新規画像の展開を大量に並列実行しません。通常ビルドとCDNビルドは同じ `dist/` を上書きします。**公開・ZIP作成の前には最後に `build:cdn` を実行してください。**

モバイルを手動で選ぶ: 通常サーバーの `/?q=mobile&touch=1`。`touch=0` で仮想UIを非表示、`q=high` 等はデスクトップ用の明示指定です。iPad 上で高品質プリセットに上書きすると、このモバイルメモリ対策を外すことになるので推奨しません。

音源を更新した場合のみ、FFmpeg を用意して `npm run audio:aac`（または `FFMPEG=/path/to/ffmpeg npm run audio:aac`）。通常のビルド／起動には FFmpeg は不要です。

## 公開と起動

`deployment/launcher.data-uri.txt` の**1行全体**をブラウザのアドレス欄へ貼り付けて開きます。素材を読み込み、街を生成した後、そのままタッチ操作でプレイできます。別途サーバーを用意したり `dist/` を配置したりする必要はありません。`launcher.html` を開いても同じ起動処理になります。初回ダウンロード／生成には待ち時間があり、オフラインでは動きません。

配信URLは `deployment/build-info.json` に記録されています。形式は次のとおりで、可変のブランチ名ではなく**公開済みの配信専用コミットSHA**で固定します。

```text
https://cdn.jsdelivr.net/gh/Xavier-Monji/spiderbench@<40桁のSHA>/dist/
```

- `build:cdn` はビルドのみ。`publish:cdn` は現在の全ソース変更をコミットし、`arena/01a0fb2b-spiderbench` **だけ**にpushします。実行前に差分をレビューしてください。別ブランチ／タグ／mainへはpushしません。
- 公開コミットには原本の巨大なソースアセットを含めません。jsDelivr の標準制限（パッケージ150 MB、ファイル20 MB）に対して、配信ツリーのサイズを事前チェックします。
- ビルドは相対base `./`。HTMLを取得したランチャーが `<base href="公開コミットのdist URL">` を先頭へ挿入し、画像やモデルのランタイムURLはCDN上の `import.meta.url` を基準に解決します。これにより、ビルドへ自身のコミットSHAを埋め込む必要がありません。
- jsDelivr のHTMLは text/plain + nosniff のため、iframeやHTMLへの直接遷移ではなく `fetch` → `document.write` で起動します。取得する公開ソースを信頼できるSHAで固定してください。
- 公開後は `CDN_LIVE=1 npm run test:cdn`、または GitHub Actions の **Live CDN launch** で、実際のCDNへの取得とData URI起動を検証します。ライブモードはローカルビルド／サーバー／レスポンス差し替えを使いません。`published: true` は公開とライブ検証後にだけ記録します。

公開済みビルドをローカルに復元する場合:

```sh
SHA=$(node -p "JSON.parse(require('fs').readFileSync('deployment/release.json')).commit")
git archive "$SHA" dist | tar -x
```

**Data URI は不透明オリジンなので進行状況はメモリ内のみです。リロードで失われます。** 永続セーブが必要なら、同じ小さい起動HTMLを通常の HTTPS オリジンに置いてください。CDNエラーは起動画面に表示します。

Safari 等では開き方によりData URIのトップレベル遷移が制限されることがあります。リンクをタップするのではなく、アドレス欄へ1行全体を直接貼り付けてください。

## 検証と実機チェック

```sh
npm test                    # 配列／衝突／レシピ同一性／画像GLB保持／機器判定／画素上限／セーブ
npx playwright install chromium
npm run test:browser        # タッチ5ケース、軽量GLSL+HDR overflow、キーボード／ゲームパッド
npm run build:cdn
npm run test:cdn            # ローカルdistでCDNを模擬した全ゲーム統合テスト
CDN_LIVE=1 npm run test:cdn  # 公開済みjsDelivrのみから実ゲームを読み込むライブ検証
```

- `npm test` **24件**、`test:browser` **8件**、全ゲーム `test:cdn` の起動／操作検証が成功。
- Chromium153 + SwiftShader、1180×820 / DPR2 のタッチ環境で検証。**UA を Safari にしていても Safari エンジンの検証ではありません。**
- デフォルトのData URI統合テストはCDN応答をローカル `dist/` で模擬します。`CDN_LIVE=1` は応答を差し替えず、実際のCDNからHTML／モジュール／画像／モデルを取得します。JSONレポートの `mode` で両者を区別します。
- 本番のネイティブ画素予算は1199×833 ≤100万画素で確認。ソフトウェアGPUでの全都市画像キャプチャは `SMOKE_SCALE=0.35` に下げます（`SMOKE_SCALE=0.85 npm run test:cdn` で既定解像度のキャプチャ）。これは本番のスケール下限設定を変えません。
- 同時の実タッチから移動 `(0.8, 0.6)`、`mode=swing`／`web.active=true`、離して解除、MAP／Mobile固定設定／Resume、縦画面を確認。JS／シェーダーエラーとアセット取得失敗は0。
- 全都市起動後のストリーム常駐は約241 MiB（上限256 MiB）。Chrome の precise JS heap を GC 後に読むと約1.27 GiB（ArrayBuffer等を含む、全プロセスや GPU/RAM総量ではない）。最適化前の4 GBサンドボックスで起きた構築時OOMは、最新の統合起動では再発していません。実機のピークメモリ／発熱／fps は別途測定が必要です。
- ショートテストのログ／画像は `artifacts/cdn-smoke.json` と `artifacts/cdn-mobile-{landscape,portrait}.png`（Git対象外）。正常な描画を確認するテストはあり、**A14 での30 fps認定や長時間耐久テストではありません**。

実機の最終受入: 最新の iPadOS Safari で初回起動・10分以上のスイング・屋上移動、街区を何度も往復して常駐が増え続けないこと、3指操作／短いジャンプ／長押しUSE、縦横回転、MAP／設定／戦闘、バックグラウンド復帰、BGMとAAC、context recovery を確認してください。Web Inspector でフレーム時間とメモリ推移も確認し、必要に応じてスケール上限を下げてください。
