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

function FloorSelector34({ onSelect, setSelected34, selected34 }) {
  const handleSelect = (floor) => {
    setSelected34(floor)
    if (onSelect) onSelect(floor)
  }

  return (
    <div className="">
      <div className="flex gap-3">
        {floors34.map((f) => (
          <Button
            key={f.value}
            color={selected34 === f.value ? "pink" : "light"}
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

function FloorSelector12({ onSelect, setSelected12, selected12 }) {
  const handleSelect = (floor) => {
    setSelected12(floor)
    if (onSelect) onSelect(floor)
  }

  return (
    <div className="">
      <div className="flex gap-3">
        {floors12.map((f) => (
          <Button
            key={f.value}
            color={selected12 === f.value ? "pink" : "light"}
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

export default function Map() {
  const [selected34, setSelected34] = useState(1)
  const [selected12, setSelected12] = useState(1)

  return (
    <div className="flex justify-center">
      <div className="px-4 sm:px-10 mx-2 md:mx-auto max-w-[700px]">
        <p className="text-3xl font-semibold text-center mt-6 mb-6">校内マップ</p>


        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">3,4棟</p>
          <FloorSelector34 setSelected34={setSelected34} selected34={selected34} />
        </div>

        <div className="w-full aspect-[1]">
          <TransformWrapper wheel={{ step: 0.1 }} pinch={{ step: 5 }} doubleClick={{ disabled: true }}>
            {({ state }) => (
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%", overflow: "hidden" }}
                contentStyle={{ width: "fit-content", height: "fit-content" }}
              >
                <div className="relative inline-block">
                  <img src={`/maps/${selected34}.png`} alt="illustration" className="block" />
                  <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
                    <div className="h-[20px] w-[20px] bg-sky-400 absolute top-[20px] bottom[20px] rounded-full" onClick={() => console.log('aheahe')} />
                  </div>
                </div>
              </TransformComponent>
            )}
          </TransformWrapper>
        </div>


        <div className="flex justify-between items-center mb-4 mt-12">
          <p className="text-xl font-semibold">1,2棟</p>
          <FloorSelector12 setSelected12={setSelected12} selected12={selected12} />
        </div>

        <div className="w-full aspect-[1.16]">
          <TransformWrapper wheel={{ step: 0.1 }} pinch={{ step: 5 }} doubleClick={{ disabled: true }}>
            {({ state }) => (
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%", overflow: "hidden" }}
                contentStyle={{ width: "fit-content", height: "fit-content" }}
              >
                <div className="relative inline-block">
                  <img src={`/maps/${selected12 + 4}.png`} alt="illustration" className="block" />
                  <div
                    className="absolute top-0 left-0 w-full h-full cursor-pointer"
                  />
                </div>
              </TransformComponent>
            )}
          </TransformWrapper>
        </div>


        <div className="flex justify-between items-center mb-4 mt-12">
          <p className="text-xl font-semibold">1体</p>
        </div>

        <div className="w-full aspect-[1.38]">
          <TransformWrapper wheel={{ step: 0.1 }} pinch={{ step: 5 }} doubleClick={{ disabled: true }}>
            {({ state }) => (
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%", overflow: "hidden" }}
                contentStyle={{ width: "fit-content", height: "fit-content" }}
              >
                <div className="relative inline-block">
                  <img src={`/maps/8.png`} alt="illustration" className="block" />
                  <div
                    className="absolute top-0 left-0 w-full h-full cursor-pointer"
                  />
                </div>
              </TransformComponent>
            )}
          </TransformWrapper>
        </div>


        <div className="flex justify-between items-center mb-4 mt-12">
          <p className="text-xl font-semibold">2体</p>
        </div>

        <div className="w-full aspect-[1.2]">
          <TransformWrapper wheel={{ step: 0.1 }} pinch={{ step: 5 }} doubleClick={{ disabled: true }}>
            {({ state }) => (
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%", overflow: "hidden" }}
                contentStyle={{ width: "fit-content", height: "fit-content" }}
              >
                <div className="relative inline-block">
                  <img src={`/maps/9.png`} alt="illustration" className="block" />
                  <div
                    className="absolute top-0 left-0 w-full h-full cursor-pointer"
                  />
                </div>
              </TransformComponent>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  )
}
