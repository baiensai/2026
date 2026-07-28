import Image from "next/image"
import Illustration from "../../public/illustration.jpg"

function Temporary() {
  return (
    <div className="px-2 sm:px-4 max-w-3xl mx-auto mt-10">
      <p className="text-gray-800 text-2xl font-semibold mb-2">梅苑祭2026「Sparkling!!!」ホームページ　現在準備中</p>
      <Image alt="テーマイラスト" src={Illustration} className="max-w-[500px] w-full md:w-150 mx-auto rounded-xl border-gray-600 border-3 mt-2 mb-5" />
      <p className="mb-12">梅苑祭2026「Sparkling!!!」の公式ホームページは現在準備中です。公開までしばらくお待ちください。</p>
      </div>
  )
}

export default Temporary