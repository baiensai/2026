import { IoMdPin, IoMdHeart } from "react-icons/io"
import { GoDotFill } from "react-icons/go"
import Image from "next/image"

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

function ModalContent({ data }) {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="flex flex-row md:flex-row items-center">
        <div className="relative w-30 h-30 flex-shrink-0">
          <Image
            src={`${data.icon}`}
            alt="アイコン"
            fill
            className="object-cover rounded-lg"
            sizes="120px"
          />
        </div>

        <div className="w-full mt-0 pl-4 shrink">
          <div className="flex items-center mb-1">
            <IoMdPin className="w-4 h-4 md:w-5 md:h-5 mr-1" />
            <p className="text-base md:text-base">{data.place}</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-1 flex-col items-start">
              {data.tags.map((tag, i) => (
                <p key={i} className={`border-2 rounded-full px-1 text-sm md:text-sm border-${tag.color}-500 bg-${tag.color}-100`}>
                  {tag.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex my-2">
        <div>
          <p className="text-lg md:text-xl text-rose-600 font-semibold">{data.title}</p>
          <p className="text-sm md:text-sm text-gray-500">{data.organization}</p>
        </div>
      </div>

      <div className="mt-2 flex items-start">
        <GoDotFill className="text-pink-600 mt-[7px]" />
        <div>
          <p className="text-lg font-medium">説明</p>
        </div>
      </div>
      <div className="text-base md:text-base w-full">{data.modalDescription ?? data.description}</div>

      <div className="mt-2 flex items-start">
        <GoDotFill className="text-pink-600 mt-[7px]" />
        <div>
          <p className="text-lg font-medium">時間</p>
        </div>
      </div>
      <div className="text-base md:text-base w-full">{data.timeDescription ?? null}</div>

      {data.map ?
        <>
          <div className="mt-2 flex items-start">
            <GoDotFill className="text-pink-600 mt-[7px]" />
            <div>
              <p className="text-lg font-medium mb-2">場所</p>
              <p className="">{data.place}</p>
            </div>
          </div>
          <div className={`w-full aspect-[${data.map < 5 ? 1 : 1.16}]`}>
            <TransformWrapper wheel={{ step: 0.1 }} pinch={{ step: 5 }} doubleClick={{ disabled: true }}>
              {({ state }) => (
                <TransformComponent
                  wrapperStyle={{ width: "100%", height: "100%", overflow: "hidden" }}
                  contentStyle={{ width: "fit-content", height: "fit-content" }}
                >
                  <div className="relative inline-block">
                    <img src={`/maps/${data.map}.png`} alt="illustration" className="block" />
                    <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
                      <Image alt='' height={33} width={33} src={data.icon} className={`absolute border-pink-500 border-1 rounded-sm`} style={{ top: `${data.pos[0] / 337 * 100}%`, left: `${data.pos[1] / 337 / (data.map < 5 ? 1 : 1.16) * 100}%`, pointerEvents: "all", width: `${33 / 337 * 100}%`, height: `${33 / 337 * 100}%` }} />
                    </div>
                  </div>
                </TransformComponent>
              )}
            </TransformWrapper>
          </div>
        </>
        : null
      }

    </div>
  )
}

export default ModalContent