import Link from "next/link"
import { Button } from "flowbite-react"
import { HiOutlineArrowRight, HiCalendar, HiMap, HiNewspaper } from "react-icons/hi"
import { GoDotFill } from "react-icons/go"

const news = [
  {
    title: "サイト更新",
    content: [
      "新たにキッチンカーのメニューを公開しました。詳細は「",
      { text: "案内", href: "/info" },
      "」ページをご覧ください。"
    ],
    date: "2026.08.15"
  },
  {
    title: "公式サイト開設",
    content: "梅苑祭2026公式ウェブサイトを開設しました。最新情報や詳細を確認できます。",
    date: "2026.08.13"
  },
]

function Index() {
  return (
    <>
      {/* フルワイドヒーローセクション */}
      <div 
        className="w-screen relative -ml-[calc((100vw-100%)/2)] mb-6 py-12 md:py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/herosection2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-white/10"></div>
        
        {/* コンテンツ */}
        <div className="relative z-10 px-4 sm:px-4 max-w-4xl mx-auto text-center">
          <p className="text-xl font-medium mb-4 text-white">福島高校文化祭 梅苑祭2026</p>
          <p className="text-[3.75em] font-bold">
          <img src="sparkling.svg"></img></p>
          {/* <p className="text-2xl">ー 可能性を超えろ</p> */}
          <div className="flex justify-center mt-4 mb-4">
            <div className="w-60"> 
              <Button color="light" pill as={Link} href="/theme"><HiOutlineArrowRight className="mr-2 h-3 w-3" />テーマについて</Button>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="px-2 sm:px-4 max-w-4xl mx-auto mt-10">

      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row">

          <div className="mt-10 md:w-1/2">
            <div className="flex items-center">
              <HiCalendar className="w-12 h-12 mr-4" />
              <p className="text-2xl font-medium">開催日時</p>
            </div>
            <div className="pl-4 mt-4">
              <p className="text-4xl mb-4 font-medium">2026.08.22-23</p>
              <p className="text-2xl mb-1">1日目 11:00-15:30</p>
              <p className="text-lg ml-4 mb-4">(オープニングセレモニー 10:50~)</p>
              <p className="text-2xl mb-4">2日目 09:30-14:30</p>
              <p>入場は終了時刻30分前まで</p>
            </div>
          </div>

          <div className="mt-10 md:w-1/2">
            <div className="flex items-center">
              <HiMap className="w-12 h-12 mr-4" />
              <p className="text-2xl font-medium">場所</p>
            </div>
            <div className="pl-4 mt-2">
              <p className="text-3xl mb-2 font-medium">福島県立福島高等学校</p>
              <p className="text-base text-gray-600">福島県福島市森合町5-72</p>
            </div>
            <div className="px-4 mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12616.19963752117!2d140.45184177143537!3d37.76542791183734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a85dd76f2fdf5%3A0xa88817bdb7977734!2z56aP5bO255yM56uL56aP5bO26auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1754281405073!5m2!1sja!2sjp" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 rounded-lg"
                title="県立福島高等学校のGoogleマップ"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-14 mb-14">
        <div className="w-100">
          <Button color="pink" pill as={Link} href="/info">注意事項・よくある質問はこちら</Button>
        </div>
      </div>

      <div className="mx-auto px-4 mb-14">
        <div className="flex items-center">
          <HiNewspaper className="w-12 h-12 mr-4" />
          <p className="text-2xl font-medium">最新情報</p>
        </div>
        <div className="pl-4 mt-2">
          {
            news.map((v, i) => (
              <div className="my-4 grid grid-cols-[auto_1fr] gap-x-2 items-start" key={i}>
                <GoDotFill className="text-pink-600 mt-1" />
                <div>
                  <p className="text-xl font-medium">{v.title}</p>
                  <p className="text-sm">{v.date}</p>
                  <p className="text-gray-700">
                    {Array.isArray(v.content) ? (
                      <>
                        {v.content.map((part, idx) => 
                          typeof part === 'string' ? (
                            <span key={idx}>{part}</span>
                          ) : (
                            <Link key={idx} href={part.href} className="text-blue-600 hover:underline">
                              {part.text}
                            </Link>
                          )
                        )}
                      </>
                    ) : (
                      v.content
                    )}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      </div>
    </>
  )
}

export default Index
