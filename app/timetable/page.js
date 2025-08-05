import { HiExclamation, HiCalendar, HiMap, HiQuestionMarkCircle } from "react-icons/hi"
import { Accordion, AccordionContent, AccordionPanel, accordionTheme, AccordionTitle, ThemeProvider } from "flowbite-react"

const BASE_HEIGHT = 20 //20px per 5min

function TimeTable() {
  const times = Array.from({ length: 12 }, (_, i) => {
    const hour = 9 + Math.floor((i + 1) / 2)
    const minute = (i + 1) % 2 === 0 ? '00' : '30'
    return `${hour.toString().padStart(2, '0')}:${minute}`
  })

  return (
    <div>
      <p className="text-3xl font-semibold text-center mt-6">1体タイムテーブル</p>

      <div className="px-4 sm:px-10 mt-6 mb-8">


        <div className="flex w-full">
          <div className="w-1/7 bg-gray-100 p-2">
            <div className='text-center'>時間</div>
            {times.map((time) => (
              <div key={time} className={`h-[${6 * BASE_HEIGHT}px] text-center`}>
                {time}
              </div>
            ))}

          </div>

          <div className="w-3/7 bg-white py-2">
            1日目
            <div className="relative mx-4" style={{ top: '13px' }}>
              <div className='z-10 absolute rounded-md bg-green-200 w-full shadow' style={{ top: '120px', height: '120px' }}>10:00-10:30</div>
            </div>
            <div className='relative' style={{ top: '13px' }}>
              {Array.from({ length: 12 * 6 }, (_, i) => {
                return <div className='border-t-1 border-slate-300 h-[20px]' key={i} />
              })}
            </div>
          </div>

          <div className="w-3/7 bg-white py-2 pr-2">
            2日目
            <div className="relative mx-4" style={{ top: '13px' }}>
              <div className='z-10 absolute rounded-md bg-purple-200 w-full shadow' style={{ top: '380px', height: '80px' }}>11:05-11:25</div>
            </div>
            <div className='relative' style={{ top: '13px' }}>
              {Array.from({ length: 12 * 6 }, (_, i) => {
                return <div className='border-t-1 border-slate-300 h-[20px]' key={i} />
              })}
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default TimeTable