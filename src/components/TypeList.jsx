import React, { useEffect } from 'react'

function TypeList({vocaList}) {
    // [
    //   {author: 'js', word: '쭈압', definition: '주체안되는 입술', example: '쭈아ㅏㅏㅏㅏ압', id: 0, time: '2024-06-20'}, 
    //   {author: 'js', word: '쭈압', definition: '주체안되는 입술', example: '쭈아ㅏㅏㅏㅏ압', id: 1, time:`2024-06-22`},
    //   {author: 'js', word: '쭈압', definition: '주체안되는 입술', example: '쭈아ㅏㅏㅏㅏ압', id: 2, time:`2024-06-23`},
    // ]

  return (
    <ul>
      {vocaList.map(item => (
        <li key={item.id}>
          <strong>{item.word}</strong> by {item.author}<br/>
          정의: {item.definition}<br/>
          예문: {item.example}<br/>
        </li>
      ))}
    </ul>
  )
}

export default TypeList