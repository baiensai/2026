"use client"

import { Modal, ModalBody } from "flowbite-react"
import { useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5"
import datas from "../projects/_data"
import ModalContent from "../_components/modalContent"

const BASE = 4 // 4px per 1min

const TimeTableData = {
  date1: [
    { start: "10:00", length: 5, title: "with piano", discription: "バンド", subTitle: null, color: "orange" },
    { start: "10:15", length: 15, title: "過疎中", discription: "バンド", subTitle: null, color: "orange" },
    { start: "10:40", length: 25, title: "梅高軽音同好会", discription: "バンド", subTitle: null, color: "orange" },
    { start: "11:15", length: 25, title: "バタークッキー", discription: "バンド", subTitle: null, color: "orange" },
    { start: "11:50", length: 15, title: "会長と愉快な仲間たち", discription: "バンド", subTitle: null, color: "orange" },
    { start: "12:05", length: 10, title: "書道部", discription: "パフォーマンス, 体育館後方", subTitle: null, color: "pink" },
    { start: "12:35", length: 30, title: "梅響", discription: "管弦楽演奏", subTitle: null, color: "orange" },
    { start: "13:15", length: 25, title: "2026 有志吹奏楽団", discription: "吹奏楽演奏", subTitle: null, color: "orange" },
    { start: "14:05", length: 30, title: "福高チアリーダー部", discription: "ダンス", subTitle: null, color: "pink" },
    { start: "14:35", length: 30, title: "RAWKZM(ローズ)", discription: "ダンス", subTitle: null, color: "pink" },
    { start: "15:05", length: 25, title: "じゅりっこ", discription: "ダンス", subTitle: null, color: "pink" },
  ],
  date2: [
    { start: "09:30", length: 15, title: "無念晴ラスメント", subTitle: null, discription: "バンド", color: "orange"},
    { start: "09:55", length: 15, title: "GaiZies（ギャイザイズ）", subTitle: null, discription: "バンド", color: "orange" },
    { start: "10:20", length: 25, title: "残業AED", subTitle: null, discription: "バンド", color: "orange" },
    { start: "10:55", length: 20, title: "Jazz研究部", subTitle: null, discription: "ジャズ演奏", color: "orange" },
    { start: "11:25", length: 25, title: "Take Five", subTitle: null, discription: "バンド", color: "orange" },
    { start: "12:05", length: 15, title: "ROSEA", subTitle: null, discription: "ダンス", color: "pink" },
    { start: "12:20", length: 15, title: "月人（るなんちゅ）", subTitle: null, discription: "ダンス", color: "pink" },
    { start: "12:40", length: 10, title: "Uni Bloom", subTitle: null, discription: "パフォーマンス", color: "pink" },
    { start: "13:00", length: 10, title: "All for D", subTitle: null, discription: "ダンス＆DJ", color: "pink" },
    { start: "13:30", length: 60, title: "福島高校クイズ研究会", subTitle: null, discription: "クイズ", color: "pink" }
  ]
}

function getStartAndEndTime(startTimeStr, durationMinutes) {
  const [startHourStr, startMinStr] = startTimeStr.split(':');
  const startHour = parseInt(startHourStr, 10);
  const startMin = parseInt(startMinStr, 10);

  const totalStartMinutes = startHour * 60 + startMin;
  const totalEndMinutes = totalStartMinutes + durationMinutes;

  const endHour = Math.floor(totalEndMinutes / 60);
  const endMin = totalEndMinutes % 60;

  return {
    startHour,
    startMin,
    endHour,
    endMin
  };
}

function TimeTableItem({ start, length, title, subTitle, discription, color, setOpenModal, ind }) {
  const times = getStartAndEndTime(start, length)
  const top = ((times.startHour - 9) * 60 + times.startMin - 30) * BASE
  const height = length * BASE - 1

  return (
    <div
      className={`absolute z-10 flex w-full flex-col items-center justify-center rounded-2xl border-l-[4px] bg-${color}-50 px-1 shadow-md border-${color}-400 text-gray-600`}
      style={{
        top: top + 'px',
        height: height + 'px',
        boxSizing: 'border-box',
      }}
      onClick={() => { setOpenModal(datas[ind]) }}
    >
      {length >= 15 ?
        <>
          {/* 普通のサイズのときの */}
          <div className={`font-semibold text-${color}-900 text-sm sm:text-sx text-center`}>
            {title}
            <span className="text-gray-500 text-xs sm:text-sm lg:text-sm">
              {discription ? `(${discription})` : null}
            </span>
          </div>
          <div className="mb-0 text-sm font-medium">
            {subTitle}
          </div>
          <div className="text-sm font-normal text-black">
            {times.startHour}:{times.startMin.toString().padStart(2, '0')} - {times.endHour}:{times.endMin.toString().padStart(2, '0')}
          </div>
        </> :
        <>
          {length > 5 ?
            <>
              {/* 狭いときに文字小さくして...で省略するやつ */}
              <div className={`text-sm sm:text-sx font-semibold text-${color}-900 truncate text-center w-full`}>{title}<span className="text-gray-500 text-xs"> {discription ? `(${discription})` : null}</span></div>
              <div className="text-xs font-normal text-black">
                {times.startHour}:{times.startMin.toString().padStart(2, '0')} - {times.endHour}:{times.endMin.toString().padStart(2, '0')}
              </div>
            </>
            : <div className={`text-sm sm:text-sx font-semibold text-${color}-900 truncate text-center w-full`}>{title}<span className="text-gray-500 text-xs"> {discription ? `(${discription})` : null}</span></div>
            //  ↑ガチで狭いときに時間も省くやつ
          }
        </>
      }


    </div>
  )
}

function TimeTable() {
  const times = Array.from({ length: 12 }, (_, i) => {
    const hour = 9 + Math.floor((i + 1) / 2)
    const minute = (i + 1) % 2 === 0 ? '00' : '30'
    return `${hour.toString().padStart(2, '0')}:${minute}`
  })

    const [openModal, setOpenModal] = useState(null)

  return (
    <div>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(null)} className="[&_*]:focus-visible:outline-none">
        <ModalBody>
          <div className="flex flex-row-reverse">
            <IoCloseCircleOutline className="w-7 h-7" onClick={() => setOpenModal(null)} />
          </div>
          <div className="">
            <ModalContent data={openModal} />
          </div>
        </ModalBody>
      </Modal>

      <p className="text-3xl font-semibold text-center mt-6">1体タイムテーブル</p>

      <div className="mx-2 md:mx-8 sm:px-10 mt-6 mb-8">

        <div className="flex justify-center items-center pb-6">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-purple-200" />
              <div className="text-lg">校内公開の時間</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-sky-200" />
              <div className="text-lg">一般公開終了後</div>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-1/7 bg-gray-100 p-2">
            <div className='text-center text-base font-medium my-[2px]'>時間</div>
            {times.map((time) => (
              <div key={time} className={`h-[120px] text-center`}>
                {time}
              </div>
            ))}
          </div>

          <div className="w-3/7 bg-white py-2">
            <div className="text-center text-lg font-semibold">1日目 (8/22)</div>
            <div className="relative mx-2 md:mx-8" style={{ top: '11px' }}>
              {TimeTableData.date1.map((v, i) => (
                <TimeTableItem setOpenModal={setOpenModal} start={v.start} length={v.length} title={v.title} subTitle={v.subTitle} discription={v.discription} key={i} color={v.color} ind={i} />
              ))}
            </div>
            <div className="relative" style={{ top: '11px' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="mx-0 md:mx-4">
                  {Array.from({ length: 12 * 6 }, (_, i) => (
                    <div
                      key={i}
                      className={`h-[20px] ${i <= 17 ? 'bg-purple-200' : ""} ${i == 17 ? "rounded-b-full" : ""}`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative">
                {Array.from({ length: 12 * 6 }, (_, i) => (
                  <div
                    key={i}
                    className={`border-t h-[20px] w-full ${i % 6 === 0 ? 'border-slate-400' : 'border-slate-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-3/7 bg-white py-2 pr-1 md:pr-2">
            <div className="text-center text-lg font-semibold">2日目 (8/23)</div>
            <div className="relative mx-2 md:mx-8" style={{ top: '11px' }}>
              {TimeTableData.date2.map((v, i) => (
                <TimeTableItem setOpenModal={setOpenModal} start={v.start} length={v.length} title={v.title} subTitle={v.subTitle} discription={v.discription} key={i} color={v.color} ind={i+11} /> //ind = i + (1日目の1体発表団体数)
              ))}
            </div>
            <div className="relative" style={{ top: '11px' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="mx-0 md:mx-4">
                  {Array.from({ length: 12 * 6 }, (_, i) => (
                    <div
                      key={i}
                      className={`h-[20px] ${i >= 60 ? 'bg-sky-200' : ""} ${i == 60 ? "rounded-t-full" : ""}`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative">
                {Array.from({ length: 12 * 6 }, (_, i) => (
                  <div
                    key={i}
                    className={`border-t h-[20px] w-full ${i % 6 === 0 ? 'border-slate-400' : 'border-slate-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="hidden">
        <div className="bg-pink-50" /><div className="border-pink-400" /><div className="text-pink-900" />
        <div className="bg-orange-50" /><div className="border-orange-400" /><div className="text-orange-900" />
        <div className="bg-yellow-50" /><div className="border-yellow-400" /><div className="text-yellow-900" />
        <div className="bg-rose-50" /><div className="border-rose-400" /><div className="text-rose-900" />
      </div>
    </div>
  )
}

export default TimeTable