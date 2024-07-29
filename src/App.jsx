import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimaryButton } from '../components/atoms/button/PrimaryButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PrimaryButton children="test"/>
    </>
  )
}

export default App
