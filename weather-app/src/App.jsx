import { useState } from 'react'
import CurrentCity from './components/WeatherCard/CurrentCity/CurrentCity'
import Meta from './components/WeatherCard/CurrentCity/Meta/Meta'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (<div>
    <CurrentCity />
  </div>)
}

export default App
