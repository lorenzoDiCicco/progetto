import { useState } from 'react'

import type { Dev } from './devWars/Dev'
import { developers } from './devWars/Devs'

import Selector from './devWars/Selector'
import Compare from './devWars/Compare'
import Result from './devWars/Results'


import './App.css'

function App() {

const[selection,setSelection]=useState<"A"|"B">("A")

  const [selectedDevA, setSelectedDevA] = useState<Dev>(developers[0])
  const [selectedDevB, setSelectedDevB] = useState<Dev>(developers[1])

  function changeDevA(dev: Dev) {
    setSelectedDevA(dev)
  }
  function changeDevB(dev: Dev) {
    setSelectedDevB(dev)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>DEV<span>WARS</span></h1>
        <p>
          Seleziona due sviluppatori,confronta le loro competenze e scopri quale sceglire per il tuo progetto
        </p>
      </div>
      <div className='btns'>
        <button className='btnA' onClick={() => setSelection("A")}>Seleziona Dev A</button>
        <button className='btnB' onClick={() => setSelection("B")}>Seleziona Dev B</button>
      </div>
      <Selector developers={developers} selectedDevA={selectedDevA} selectedDevB={selectedDevB} onSelectA={changeDevA} onSelectB={changeDevB} selection={selection} />
      <Compare devA={selectedDevA} devB={selectedDevB}/>
      <Result devA={selectedDevA} devB={selectedDevB}/>
    </div>

  )
}

export default App
