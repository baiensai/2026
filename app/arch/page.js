import Image from "next/image"
import ArchIllustration from "../../public/archillustration.jpg"

function Arch() {
  return (
    <div className="px-2 sm:px-4 max-w-3xl mx-auto mt-10">
      <p className="text-gray-800 text-2xl font-semibold mb-2">アーチ紹介</p>
      <Image alt="アーチの写真" src={ArchIllustration} className="max-w-[500px] w-full md:w-150 mx-auto rounded-xl border-gray-600 border-3 mt-2 mb-5" />
      {}
      <p className="text-gray-800 text-2xl font-semibold mb-2 mt-12">デザイン部門長によるアーチに込めた想い</p>
      <p className="mb-2">今年の梅苑祭のスローガンは「Sparkling!!!」ということで、今年のアーチは数多の星が瞬く星空や宇宙をイメージしたデザインにしました。</p>
      <p className="mb-2">アーチをくぐると、壁一面に広がる宇宙と吊るされた星型のモビールが、梅苑祭に来た皆さんをお出迎え！昨年度の反省を踏まえ、多くの人にアーチをくぐってもらうために、モビールをつけて興味を持ってもらう工夫をしました。光の当たり方によってキラキラ光るホログラム仕様になっていますので、ぜひぜひくぐってみてください！</p>
    </div>
  )
}

export default Arch