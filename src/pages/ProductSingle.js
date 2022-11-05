import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductSingle = () => {
  const [results, setResults] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    setLoading(true)

    try {
      const response = await axios.get(`http://localhost:8080/students/1001`)
      setResults(response.data)
    } catch (error) {
      console.log('err')
    }

    setLoading(false)
  }

  return <div></div>
}

export default ProductSingle
