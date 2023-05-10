import { useState, useEffect } from 'react'
import Header from './components/Header'
import Monster from './components/Monster'
import Victim from './components/Victim'
import Place from './components/Place'
import Reset from './components/Reset'

function App() {

  const [monsters, setMonsters] = useState([])
  const [victims, setVictims] = useState([])
  const [places, setPlaces] = useState([])

  useEffect(() => {

  }, [monsters])

  useEffect(() => {

  }, [victims])

  useEffect(() => {

  }, [places])

  return (
    <>
      <div className="container ">
        <Header />
      </div>
      <div className="container">
        <Monster />
      </div>
      <div className="container ">
        <Victim />
      </div>
      <div className="container ">
        <Place />
      </div>
      <div className="my-5 mx-9">
        <Reset />
      </div>
    </>
  )
}

export default App
