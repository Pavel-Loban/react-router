import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Lychee = () => {
  const baseUrl = 'https://api.predic8.de/shop/products/15'
  const baseUrl2 = 'https://api.predic8.de'
  const [fruit, setFruit] = useState(null)
  const [error, setError] = useState(null)



  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setFruit(res.data)
        // console.log(res.data)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])





  if (error) return `Error: ${error.message}`

  return (
    !!fruit && (
      <div className="container">
        <div className="box">
          <div>Name: {fruit.name}</div>
          <div>Price: {fruit.price}$</div>
          <div>
            <img src={`${baseUrl2}${fruit.photo_url}`} alt="" />
          </div>
        </div>
      </div>
    )
  )
}

export default Lychee
