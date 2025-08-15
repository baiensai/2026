import Card from "../_components/card"
import datas from "./_data"
import { useState, useEffect } from "react"
import Fuse from "fuse.js"

function Projects() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 md:gap-y-5 gap-x-2 md:gap-x-5 px-2 md:px-12 max-w-[1000px] mx-auto">
      {datas.map((data, i) => (
        <Card data={data} key={i} />
      ))}

      {/* <p>企画一覧</p>
      <p>企画の種類について</p>
      <p>賞について</p>
      <p>種類、ジャンル、検索の欄</p>
      <p>n件ヒット</p>
      <p>いっぱいのカード</p> */}
      <div className="hidden"><p className="border-blue-500 bg-blue-100" /></div>
    </div>
  )
}

export default Projects