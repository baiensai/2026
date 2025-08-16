import { Accordion, ThemeProvider } from "flowbite-react"
import { AccordionItem, AccordionTheme } from "../info/page"
import Search from "./_search"

function AAA() {
  return (
    <div>
      <div className="px-0">
        <ThemeProvider theme={{ accordion: AccordionTheme }} root={true}>
          <Accordion collapseAll className="mt-2">
            {FAQ.map((v, i) => (
              <AccordionItem key={i} question={v.question} answer={v.answer} />
            ))}
          </Accordion>
        </ThemeProvider>
      </div>
    </div>
  )
}


const FAQ = [
  { question: "年齢制限はありますか？", answer: "但し、高校生のパワーが漲る梅苑「祭」ですので、大きい声や音が鳴る企画もあります。母子室等は用意しておりませんので、小さなお子様などとの来場の際はくれぐれもご注意ください。" },
  { question: "来場の際にチケットなどは必要ですか？", answer: "チケットの用意はいたしません。ご自由にご参加ください。" },
  { question: "入場料は無料ですか？", answer: "入場料は無料です。販売されているグッズや食事を購入する際には現金が必要となりますので、梅苑祭を最大限に楽しみたい方はお財布のご用意を忘れずにお願いします。" },
]

function Projects() {


  return (
    <div>



      <p className="text-3xl font-semibold text-center mt-6">企画一覧</p>

      <div className="px-2 md:px-12 max-w-[1000px] mx-auto mb-10">
        <AAA />
        <Search />

        {/* カラータグのスタイル適用用の隠し要素  */}
        <div className="hidden">
          <p className="border-blue-500 bg-blue-100" />
        </div>
      </div>

    </div>
  )
}

export default Projects