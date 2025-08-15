'use client'

import React, { useRef } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

export default function Map() {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    // 親コンテナの左上を基準にした座標を取得
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    console.log(`クリック位置: x=${x}, y=${y}`)
  }

  return (
    <div>
      <TransformWrapper wheel={{ step: 0.1 }} pinch={{ step: 5 }} doubleClick={{ disabled: true }}>
        {({ state }) => (
          <TransformComponent
            wrapperStyle={{ width: "100%", height: "80vh", overflow: "hidden" }}
            contentStyle={{ width: "fit-content", height: "fit-content" }}
          >
            <div className="relative inline-block" ref={containerRef}>
              <img src="/illustration.jpg" alt="illustration" className="block" />
              <div
                className="absolute top-0 left-0 w-full h-full cursor-pointer"
                onClick={handleClick}
              />
            </div>
          </TransformComponent>
        )}
      </TransformWrapper>
    </div>
  );
}


// function Map() {
//   return (
//     <div>


//       {/* <p>建物</p>
//       <p>建物のわかるイラスト</p>
//       <p>3-4棟のマップ</p>
//       <p>1,2,3,4Fの切り替えボタン</p>
//       <p>divで作るマップ</p>
//       <p>1体</p>
//       <p>divマップ</p>
//       <p>1-2棟のマップ</p>
//       <p>1,2,3Fの切り替えボタン</p>
//       <p>divマップ</p>
//       <p>2体</p>
//       <p>divマップ</p> */}
//     </div>
//   )
// }

// export default Map
