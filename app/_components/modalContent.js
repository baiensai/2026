import { IoMdPin, IoMdHeart } from "react-icons/io"
import { GoDotFill } from "react-icons/go"
import Image from "next/image"


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

      <div className="mt-2 flex items-start">
        <GoDotFill className="text-pink-600 mt-[7px]" />
        <div>
          <p className="text-lg font-medium">場所</p>
        </div>
      </div>
      <p>マップは現在工事中</p>

    </div>
  )
}

export default ModalContent