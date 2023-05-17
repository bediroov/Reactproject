import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();


export const ProductProvider = props => {

  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:5501/src/data/watchone.json")
      .then(res => setproduct(res.data))
  }, [])


  return (

    <ProductContext.Provider value={[product, setproduct]} >
      {props.children}
    </ProductContext.Provider>
  )
}

