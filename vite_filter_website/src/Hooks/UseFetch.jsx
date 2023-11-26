import React, { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(products => setData(products))
  }, [])

  function SortByName() {
    setData([...data].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
    console.log('nameisledi');
  }
  function SortByPrice() {
    setData([...data].sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)))
    console.log('priceisledi');
  }

  return { data ,SortByName,SortByPrice }
}

export default useFetch