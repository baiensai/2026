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
              <div key={time} className={`h-[120px] text-center`}>
                {/* h-[120px] mean 6 * BASE_HEIGHT, height for 30min */}
                {time}
              </div>
            ))}

          </div>

          <div className="w-3/7 bg-white py-2">
            1日目
            <div className="relative mx-4" style={{ top: '13px' }}>
              {/* <div className='z-10 absolute rounded-md bg-green-200 w-full shadow' style={{ top: '120px', height: '120px' }}>10:00-10:30</div> */}

              <div
                className="absolute z-10 flex w-full flex-col items-start justify-center rounded-xl border-l-[6px] bg-green-50 px-2 py-1 shadow-md"
                style={{
                  top: '120px',
                  height: '120px',
                  color: 'rgb(27, 94, 32)',
                  borderLeftColor: 'rgb(76, 175, 80)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  boxSizing: 'border-box',
                  backdropFilter: 'blur(4px)',
                  opacity: 0.95,
                }}
              >
                <div className="mb-1 text-base font-semibold">武蔵のパクり</div>
                <div className="mb-[1px] text-sm font-medium opacity-85" style={{ color: 'rgb(27, 94, 32)' }}>
                  ごめんよあへあへ
                </div>
                <div className="mt-auto text-sm font-normal text-gray-700">10:00 - 10:30</div>
              </div>



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