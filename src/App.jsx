import { useState } from 'react'
import './App.css'

import HeadNotify from "./components/HeadNotify";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeadNotify />
      
    </>
  )
}

export default App
