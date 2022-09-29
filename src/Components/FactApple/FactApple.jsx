import React, { useState } from 'react'
import './factApple.scss'
const FactApple = ({ item }) => {

    const [factInfo,setFactInfo] = useState(false)
    const openFact = factInfo ? 'accordion-content' : 'none';

    const getFact = () => {
        setFactInfo((previousState)=> !previousState)
    }
  return (
    <div>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={getFact}>
            <div  >{item.title} </div>

          </div>
          <div className={openFact}>{item.content}</div>
        </div>
      </div>
    </div>
  )
}

export default FactApple
