import { HiExclamation, HiCalendar, HiMap, HiQuestionMarkCircle } from "react-icons/hi"
import { Accordion, AccordionContent, AccordionPanel, accordionTheme, AccordionTitle, ThemeProvider } from "flowbite-react"

function TimeTable() {
  return (
    <div>
      <p className="text-3xl font-semibold text-center mt-6">1体タイムテーブル</p>

      <div className="px-4 sm:px-10 mt-6 mb-8">


        <div className="flex w-full">
          <div className="w-1/7 bg-gray-100 p-2">
            <div className='text-center'>時間</div>
            <div className="h-[120px] text-center">9:30</div>
            <div className="h-[120px] text-center">10:00</div>
            <div className="h-[120px] text-center">10:30</div>
            <div className="h-[120px] text-center">11:00</div>

          </div>

          <div className="w-3/7 bg-white py-2">
            1日目
            <div className="relative mx-4" style={{ top: '13px' }}>
              <div className='absolute rounded-md bg-green-200 w-full shadow' style={{ top: '0px', height: '120px' }}>9:30-10:00</div>
              <div className='absolute rounded-md bg-green-200 w-full shadow' style={{ top: '140px', height: '80px' }}>10:05-10:25</div>
              <div className='absolute rounded-md bg-green-200 w-full shadow' style={{ top: '240px', height: '40px' }}>10:30-10:40</div>
            </div>
            <div className='relative' style={{ top: '13px' }}>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
            </div>
          </div>

          <div className="w-3/7 bg-white py-2 pr-2">
          2日目
          <div className='relative' style={{ top: '13px' }}>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
              <div className='border-t-1 border-slate-700 h-[20px]'></div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default TimeTable