import { IoMdPin, IoMdHeart } from "react-icons/io"

function ModalContent({ data }) {
  return (
    <div className="w-full p-1 border-[2px] border-red-300 rounded-xl bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row items-center">
        <img src={data.icon} className="w-15 h-15 md:w-20 md:h-20 rounded-md mr-auto md:mr-2" />
        <div className="w-full mt-2 md:mt-0">
          <div className="flex items-center mb-1">
            <IoMdPin className="w-4 h-4 md:w-5 md:h-5 mr-1" />
            <p className="text-sm md:text-base">{data.place}</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-1 flex-col items-start">
              {data.tags.map((tag, i) => (
                <p className={`border-2 rounded-full border-${tag.color}-500 bg-${tag.color}-100 px-1 text-xs md:text-sm`} key={i}>{tag.text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex my-2">
        <div>
          <p className="text-base md:text-lg text-rose-600 font-semibold">{data.title}</p>
          <p className="text-xs md:text-sm text-gray-500">{data.organization}</p>
        </div>
      </div>

      <div className="text-sm md:text-base w-full line-clamp-2 md:line-clamp-3">{data.modalDescription ?? data.description}</div>
    </div>
  )
}

export default ModalContent