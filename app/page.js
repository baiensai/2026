import Link from "next/link"
import { Button } from "flowbite-react"
import { HiOutlineArrowRight } from "react-icons/hi"

function Index() {
  return (
    <div className="p-4">
      <div className="mb-6">
        <p className="text-xl font-medium mb-4">福島高校文化祭 梅苑祭2025</p>
        <p className="text-4xl font-bold"><span className="text-red-500">EX</span>CEED <span className="text-blue-500">PO</span>TETIAL</p>
        <p className="text-lg">可能性を超えろ</p>
        <p>2025.08.23-24</p>
        <div className="flex justify-center mt-4">
          <div className="w-40">
            <Button color="alternative" pill as={Link} href="/theme"><HiOutlineArrowRight className="mr-2 h-3 w-3" />テーマについて</Button>
          </div>
        </div>
      </div>

      <p>開催日時</p>
      <p>8/23(SAT) - 8/24(SUN)</p>
      <p>Day1 11:00-15:30 (オープニングセレモニー 10:50~)</p>
      <p>Day2 09:30-14:30</p>
      <p>入場は終了時刻30分前まで</p>
      <p>場所</p>
      <p>福島県立福島高等学校</p>
      <p>福島県福島市森合町5-72</p>
      <p>embended google-map</p>
      <Link href="/info">注意事項・よくある質問はこちら</Link>
      <p>お知らせ、height決めてスクロール</p>
    </div>
  )
}

export default Index 