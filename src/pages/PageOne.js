import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PageOne = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    setLoading(true)
    console.log('WAT')
    try {
      const response = await axios.get('http://localhost:8080/students')
      setResults(response.data)
    } catch (error) {
      console.log('err')
    }

    setLoading(false)
  }
  return (
    <div>
      <h1> Page One</h1>
    </div>
  )
}

export default PageOne
