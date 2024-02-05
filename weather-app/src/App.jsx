import WeatherCard from './components/WeatherCard/WeatherCard'
import API from './components/WeatherCard/API'
import './App.css'

function App() {

  return (
    <div className="App">
      1
      <header className="App-header">
      </header>
      <WeatherCard />
      <API city={'London'} />
    </div>
  )
}

export default App
