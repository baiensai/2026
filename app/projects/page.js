"use client"

import Card from "../_components/card"
import datas from "./_data"
import { useState, useMemo } from "react"
import Fuse from "fuse.js"

function Projects() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // タグ一覧を生成（重複なし）
  const allTags = useMemo(() => {
    const tags = datas.flatMap(d => d.tags.map(t => t.text));
    return [...new Set(tags)];
  }, []);

  // Fuse.js 設定
  const fuse = useMemo(() => {
    return new Fuse(datas, {
      keys: ["title", "description"],
      threshold: 0.3,
    });
  }, []);

  // 検索処理
  const results = useMemo(() => {
    let items = query.trim() ? fuse.search(query).map(r => r.item) : datas;

    // タグ絞り込み
    if (selectedTags.length > 0) {
      items = items.filter(item =>
        selectedTags.every(tag => item.tags.some(t => t.text === tag))
      );
    }

    return items;
  }, [query, selectedTags, fuse]);

  // タグの選択/解除
  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="px-2 md:px-12 max-w-[1000px] mx-auto">
      {/* 検索ボックス */}
      <input
        type="text"
        placeholder="企画名や説明で検索"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* タグフィルター */}
      <div className="flex flex-wrap gap-2 mb-4">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full border ${selectedTags.includes(tag)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 件数表示 */}
      <p className="mb-4 text-sm text-gray-600">
        {results.length} 件の企画が見つかりました
      </p>

      {/* カード一覧 or メッセージ */}
      {results.length === 0 ? (
        <p className="text-center text-gray-500">一致する企画はありませんでした。</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 md:gap-y-5 gap-x-2 md:gap-x-5">
          {results.map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </div>
      )}

      {/* カラータグのスタイル適用用の隠し要素 */}
      <div className="hidden">
        <p className="border-blue-500 bg-blue-100" />
      </div>
    </div>
  )
  
  // return (
  //   <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 md:gap-y-5 gap-x-2 md:gap-x-5 px-2 md:px-12 max-w-[1000px] mx-auto">
  //     {datas.map((data, i) => (
  //       <Card data={data} key={i} />
  //     ))}

  //     {/* <p>企画一覧</p>
  //     <p>企画の種類について</p>
  //     <p>賞について</p>
  //     <p>種類、ジャンル、検索の欄</p>
  //     <p>n件ヒット</p>
  //     <p>いっぱいのカード</p> */}

  //     <div className="hidden"><p className="border-blue-500 bg-blue-100" /></div>
  //   </div>
  // )
}

export default Projects