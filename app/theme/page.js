import Image from "next/image"
import Illustration from "../../public/illustration.jpg"

function Theme() {
  return (
    <div className="px-2 sm:px-4 max-w-3xl mx-auto mt-10">
      <p className="text-gray-800 text-2xl font-semibold mb-2">梅苑祭について</p>
      <p className="mb-12">梅苑祭は男子校時代である、1970年頃から続く福島高校伝統の文化祭です。県内唯一の毎年公開の文化祭であり、時代は変わっても、梅苑祭に対する福高生の情熱、個性を表現する場として梅苑祭の存在は始まった当時と変わらずに受け継がれてきました。</p>

      <Image alt="テーマイラスト" src={Illustration} className="max-w-[500px] w-full md:w-150 mx-auto rounded-xl border-gray-600 border-3 mt-2 mb-5" />
      <p className="text-gray-800 text-2xl font-semibold mb-2 mt-12">スローガンについて</p>      
      <p className="mb-2">
        今年度の梅苑祭スローガンは「Sparkling!!!」(可能性を超えろ)。このスローガンは大阪・関西万博を連想させる「EXPO」を含み、今年度の梅苑祭が、本校生一人一人が限界にとらわれず、可能性を超えて個性や情熱を表現するいわば福高生にとっての"万博"になること期待しています。
      </p>
      <p>
        ご来場の皆様にも、歴史ある梅苑祭の一端で、未来への可能性を感じるような体験や感動をお届けできましたら幸いです。
      </p>

      <p className="text-gray-800 text-2xl font-semibold mb-2 mt-12">実行委員長あいさつ</p>
      <p className="mb-2">皆さんこんにちは！令和8年度梅苑祭実行委員長の星隆晃です。この度は福高生の知性と情熱、独特な感性を結集した梅苑祭にお越しくださり誠にありがとうございます。今年度の梅苑祭スローガンは「Sparkling!!!」。このスローガンには、福高生の「ひらめき」や「才気あふれる」「生き生きとした」企画や発表を表現するものとなっています。</p>
      <p className="mb-2">そして、梅苑祭の見どころといえば、クラスによって趣向が大きく異なるクラス企画。様々な垣根を超えた、型にとらわれない福高生による多種多様な有志企画。その他においても本気で取り組む福高生の姿をご覧いただけると思います。</p>
      <p className="mb-2">今日はぜひご来場の皆様に梅苑祭を存分に楽しんでいただき、心を揺さぶる体験や感動をお届けできましたら幸いです。</p>
      <p className="mb-2">最後になりますが、残暑が厳しい中、足を運んでくださったご来場の皆様、梅苑祭を盛り上げる生徒の皆様、先生方、梅苑祭の開催にご尽力いただいた全ての皆様に感謝申し上げます。</p>
      <p className="mb-8">梅苑祭、一緒に「弾けあい」ましょう！！</p>
    </div>
  )
}

export default Theme