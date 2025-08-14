import { IoMdPin, IoMdHeart } from "react-icons/io"

function Card() {
  return (
    <div className="w-full p-1 border-[2px] border-red-300 rounded-xl bg-[#FFFFFF]">

      <div className="flex flex-col md:flex-row items-center">
        <img src='/test-icon.webp' className="w-15 h-15 md:w-20 md:h-20 rounded-md mr-auto md:mr-2" />
        <div className="w-full mt-2 md:mt-0">
          <div className="flex items-center mb-1">
            <IoMdPin className="w-4 h-4 md:w-5 md:h-5 mr-1" />
            <p className="text-sm md:text-base">3棟2階 3-2教室</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-1">
              <p className="border-2 rounded-full border-blue-500 bg-blue-100 px-1 text-xs md:text-sm">クラス企画</p>
              <p className="border-2 rounded-full border-blue-500 bg-blue-100 px-1 text-xs md:text-sm">劇</p>
            </div>
            {/* <IoMdHeart className="w-6 h-6 mr-1 text-red-600" /> これ実装する余裕あるかわからないのでコメントで残しときます */}
          </div>
        </div>
      </div>

      <div className="flex my-2">
        <div>
          <p className="text-base md:text-lg text-rose-600 font-semibold">あへあへあへあへ</p>
          <p className="text-xs md:text-sm text-gray-500">部活のときとかの</p>
        </div>
      </div>

      <p className="text-sm md:text-base w-full line-clamp-2 md:line-clamp-3">レイアウトをパクるのにとどまらずテストの文章まで五月祭のサイトから引っこ抜いてくるなど地球惑星科学を専攻する学生が主催する企画です！展示や実験、シミュレーションのほか雑誌や地層パフェの提供も行います！地球惑星科学を専攻する学生が主催する企画です！展示や実験、シミュレーションのほか雑誌や地層パフェの提供も行います！地球惑星科学を専攻する学生が主催する企画です！展示や実験、シミュレーションのほか雑誌や地層パフェの提供も行います！</p>
    </div>
  )
}

export default Card