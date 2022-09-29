import React, { useState } from 'react'
import './lime.scss'
const Lime = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const getValueInput = (e) => {
    setInput(e.target.value)
  }

  const getResult = () => {
    if (input) {
        const res = (input * 0.3) / 2300 * 100;
      setResult(`${res.toFixed(2)} %`)
    }
    setInput('')
  }

  return (
    <div className="container">
      <div className="box">
        <h3>Узнайте количество каллорий в % от суточной нормы</h3>
        <input
          type="number"
          value={input}
          placeholder="введите количество грамм"
          className="inputBox"
          onChange={(e) => getValueInput(e)}
        />
        <button className="btnBox" onClick={getResult}>
          Узнать результат
        </button>
        <div>результат: {result}</div>
      </div>
    </div>
  )
}

export default Lime
