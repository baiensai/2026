import { HiExclamation, HiCalendar, HiMap, HiQuestionMarkCircle } from "react-icons/hi"
import { Accordion, AccordionContent, AccordionPanel, accordionTheme, AccordionTitle, ThemeProvider } from "flowbite-react"
import { IoFastFood } from "react-icons/io5";
import Image from "next/image"
const precautions = [
  "上履きをご持参ください。",
  "ごみは設置してあるゴミ箱に捨ててください。",
  "迷子や落とし物に関してはお近くの梅苑祭実行委員までお問い合わせください。",
  "食べ歩きはご遠慮ください。",
  "水分補給等を十分に行い熱中症対策をしてください。",
  "感染症対策として教室に入る際は、手指消毒をお願いします。"
]

const FAQ = [
  { question: "何時頃が混み合いますか？", answer: "例年、開場時間から昼頃までが混雑しています。ご覧になりたいステージ発表等の時間も踏まえながら来場する時間をご検討ください。" },
  { question: "来場の際にチケットなどは必要ですか？", answer: "チケットの用意はいたしません。ご自由にご来場ください。" },
  { question: "お金などはかかりますか？また、電子決済は利用できますか？", answer: "入場料は無料です。販売されているグッズや食事を購入する際には “現金” が必要となりますので、梅苑祭を最大限に楽しみたい方はお財布のご用意を忘れずにお願いします。" },
  { question: "年齢制限はありますか？", answer: "年齢制限は特に設けません。ただし、高校生のパワーがみなぎる梅苑「祭」ですので、大きい声や音が鳴る企画もあります。母子室等は用意しておりませんので、小さなお子様などとの来場の際はくれぐれもご注意ください。" },
  { question: "校内で写真撮影は可能ですか？", answer: "基本的には撮影可能です。ただし、プライバシーの観点から、SNS 上に撮影した写真・動画等を投稿するのはご遠慮ください。" },
  { question: "トラブル発生時はどこへ報告すれば良いですか？また、校内がよくわからない場合案内してくれる人はいますか？", answer: "お近くにいる赤い法被を着た梅苑祭実行委員にお申し付けください。" },
  { question: "落とし物はどこに届ければ良いですか？", answer: "お近くにいる赤い法被を着た梅苑祭実行委員もしくは受付に届けてください。" },
  { question: "ゴミはどこに捨てれば良いですか？", answer: "お近くにあるゴミ箱に捨てていただいて構いません。" },
  { question: "エレベーターを使用していいですか？", answer: "基本的に使用はできません。ただし、足の不自由な方や急な体調不良などの場合は使用していただいても問題ありません。" },
]

export const AccordionTheme = {
  root: {
    base: "!border-none",
    flush: {
      off: "",
      on: "",
    },
  },
  content: {
    base:
      "p-4 bg-white text-black !rounded-b-md border-b-1 border-l-1 border-r-1 border-neutral-400 !shadow-none",
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0 text-state-400",
      open: {
        off: "",
        on: "rotate-180",
      },
    },
    base:
      "flex w-full items-center justify-between p-4 text-left font-medium text-black bg-neutral-100 !rounded-md mt-3 !border-b-0 !shadow-none",
    flush: {
      off: "hover:!bg-neutral-50 focus:!ring-0",
      on: "bg-transparent",
    },
    heading: "",
    open: {
      off: "!rounded-md",
      on: "bg-white text-black !rounded-t-md !rounded-b-none border-t-1 border-l-1 border-r-1 border-neutral-400 hover:!bg-white",
    },
  },
}

export function AccordionItem({ question, answer }) {
  return (
    <AccordionPanel className="overflow-hidden !rounded-md">
      <AccordionTitle className="text-base font-semibold">
        {question}
      </AccordionTitle>
      <AccordionContent className="text-base">
        {answer}
      </AccordionContent>
    </AccordionPanel>
  )
}

function Info() {
  return (
    <div className="px-2 md:px-12 max-w-[1000px] mx-auto mb-10">
      <p className="text-3xl font-semibold text-center mt-6">ご案内</p>

      <div className="px-4 sm:px-10">

        <div className="mt-10">
          <div className="flex items-center">
            <HiCalendar className="w-12 h-12 mr-4" />
            <p className="text-2xl font-medium">開催日時</p>
          </div>
          <div className="pl-4 mt-4">
            <p className="text-lg">2026/8/22(土) 11:00~15:30(10:40からオープニングセレモニー)</p>
            <p className="text-lg">2026/8/23(日) 9:30~14:30</p>
            <p className="text-base text-gray-600">入場は終了時間の30分前まで</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center">
            <HiExclamation className="w-12 h-12 mr-4" />
            <p className="text-2xl font-medium">注意事項</p>
          </div>
          <div className="pl-4 mt-2">
            {precautions.map((v, i) => (
              <p className="text-base mb-2" key={i}>{v}</p>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center">
            <IoFastFood className="w-12 h-12 mr-4" />
            <p className="text-2xl font-medium">キッチンカーのメニュー</p>
          </div>
          <div className="pl-4 mt-2 flex flex-col md:flex-row gap-4 justify-center">
            <Image alt='' width={1667} height={1049} src='/menu/1.jpg' className="rounded-xl mb-8 md:mb-0 w-full max-w-sm" />
            <Image alt='' width={1667} height={1049} src='/menu/2.jpg' className="rounded-xl mb-8 md:mb-0 w-full max-w-sm" />
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="flex items-center">
            <HiQuestionMarkCircle className="w-12 h-12 mr-4" />
            <p className="text-2xl font-medium">よくある質問</p>
          </div>
          <div className="px-4">
            <ThemeProvider theme={{ accordion: AccordionTheme }} root={true}>
              <Accordion collapseAll className="mt-2">
                {FAQ.map((v, i) => (
                  <AccordionItem key={i} question={v.question} answer={v.answer} />
                ))}
              </Accordion>
            </ThemeProvider>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center">
            <HiMap className="w-12 h-12 mr-4" />
            <p className="text-2xl font-medium">場所</p>
          </div>
          <div className="pl-4 mt-2">
            <p className="text-lg mb-2 font-medium">福島県立福島高等学校</p>
            <p className="text-base text-gray-600 mb-2">福島県福島市森合町5-72</p>
            <p className="text-lg">駐車場がありませんので、公共交通機関をご利用ください。</p>
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
  )
}

export default Info