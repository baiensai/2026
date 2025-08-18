'use client'

import React, { useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { Button } from "flowbite-react"

const floors34 = [
  { value: 1, label: "1階" },
  { value: 2, label: "2階" },
  { value: 3, label: "3階" },
  { value: 4, label: "4階" },
]

const floors12 = [
  { value: 1, label: "1階" },
  { value: 2, label: "2階" },
  { value: 3, label: "3階" },
]

function FloorSelector({ onSelect, setSelected, selected, floors }) {
  const handleSelect = (floor) => {
    setSelected(floor)
    if (onSelect) onSelect(floor)
  }

  return (
    <div className="">
      <div className="flex gap-3">
        {floors.map((f) => (
          <Button
            key={f.value}
            color={selected === f.value ? "pink" : "light"}
            pill
            size="sm"
            onClick={() => handleSelect(f.value)}
          >
            {f.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

function ZoomableMap({ aspect, imgSrc }) {
  return (
    <div className={`w-full aspect-[${aspect}]`}>
      <TransformWrapper wheel={{ step: 0.1 }} pinch={{ step: 5 }} doubleClick={{ disabled: true }}>
        {({ state }) => (
          <TransformComponent
            wrapperStyle={{ width: "100%", height: "100%", overflow: "hidden" }}
            contentStyle={{ width: "fit-content", height: "fit-content" }}
          >
            <div className="relative inline-block">
              <img src={imgSrc} alt="illustration" className="block" />
              <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
                <div className="h-[20px] w-[20px] bg-sky-400 absolute top-[20px] bottom[20px] rounded-full" onClick={() => console.log('aheahe')} />
              </div>
            </div>
          </TransformComponent>
        )}
      </TransformWrapper>
    </div>
  )
}

export default function Map() {
  const [selected34, setSelected34] = useState(1)
  const [selected12, setSelected12] = useState(1)

  return (
    <div className="flex justify-center">
      <div className="px-4 sm:px-10 mx-2 md:mx-auto max-w-[700px]">
        <p className="text-3xl font-semibold text-center mt-6 mb-6">校内マップ</p>

        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">3,4棟</p>
          <FloorSelector setSelected={setSelected34} selected={selected34} floors={floors34} />
        </div>
        <ZoomableMap aspect={'1'} imgSrc={`/maps/${selected34}.png`} />

        <div className="flex justify-between items-center mb-4 mt-12">
          <p className="text-xl font-semibold">1,2棟</p>
          <FloorSelector setSelected={setSelected12} selected={selected12} floors={floors12} />
        </div>
        <ZoomableMap aspect={'1.16'} imgSrc={`/maps/${selected12 + 4}.png`} />

        <div className="flex justify-between items-center mb-4 mt-12">
          <p className="text-xl font-semibold">1体</p>
        </div>
        <ZoomableMap aspect={'1.38'} imgSrc={`/maps/8.png`} />

        <div className="flex justify-between items-center mb-4 mt-12">
          <p className="text-xl font-semibold">2体</p>
        </div>
        <ZoomableMap aspect={'1.2'} imgSrc={`/maps/9.png`} />

      </div>
    </div>
  )
}
