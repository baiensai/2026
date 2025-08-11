function Card() {
  return (
    <div className="w-full p-1 border-[4px] border-pink-500 rounded-xl">

      <div className="flex">
        <img src='/test-icon.webp' className="w-25 h-25" />
        <div>
          <p>！場所</p>
          <p>！ジャンル</p>
          <p>時間(あれば)</p>
        </div>
      </div>

      <div className="flex">
        <div>
          <p>タイトル</p>
          <p>団体名</p>
        </div>
        <p>ハート</p>
      </div>

      <p>説明文の最初の部分をここにいれたいんだけど長いだろうから途中で切って....って感じにしたいよね</p>
    </div>
  )
}

export default Card