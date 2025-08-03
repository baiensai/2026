import Link from "next/link"

function Index() {
  return (
    <div>
      <p>タイトル</p>
      <p>テーマ</p>
      <p>A/B-C/D 開催</p>
      <Link href="/theme">テーマについて</Link>
      <p>改めて時間と場所</p>
      <p>注意事項・よくある質問はこちら</p>
      <p>お知らせ、height決めてスクロール</p>
    </div>
  )
}

export default Index