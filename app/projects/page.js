import { Accordion, ThemeProvider } from "flowbite-react"
import { AccordionItem, AccordionTheme } from "../info/page"
import Search from "./_search"

function Projects() {
  return (
    <div>
      <p className="text-3xl font-semibold text-center mt-6">企画一覧</p>

      <div className="px-2 md:px-12 max-w-[1000px] mx-auto mb-10">
        <div className="px-0">
          <ThemeProvider theme={{ accordion: AccordionTheme }} root={true}>
            <Accordion collapseAll className="mt-2">
              <AccordionItem question="賞について" answer="やばい、考えてない、たすけて" />
            </Accordion>
          </ThemeProvider>
        </div>

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