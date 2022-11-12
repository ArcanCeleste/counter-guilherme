import { ChangeEvent, useState } from 'react'
import './App.css'
import { fbConfig } from './firebase/firebase';


function App() {
  fbConfig;
  const [counterDefault, setCounterDefault] = useState(0);
  const [counter, setCounter] = useState(BigInt(0));
  const [steps, setSteps] = useState(1);
  const [optionsMenu, setOptionsMenu] = useState(false);
  const [reseted, setReseted] = useState(true)

  const changeSteps = (e:ChangeEvent<HTMLInputElement>) => {
    let elementValue = parseFloat(e.target.value)
    if (elementValue < 1 || e.target.value === "") {
      elementValue = 1
    }
      setSteps(elementValue)
  }
  const changeDefault = (e:ChangeEvent<HTMLInputElement>)=> {
    let elementValue = parseFloat(e.target.value)
    if (e.target.value === '') {
      setCounterDefault(0)
      setCounter(BigInt(0));
      setReseted(true);
    } else {
      setCounterDefault(elementValue)
      setCounter(BigInt(elementValue));
      setReseted(true);
    }
  }
  const increaseCounter = ()=>{
    setCounter(counter + BigInt(steps));
    setReseted(false);
  }
  const resetCounter = ()=>{
    setCounter(BigInt(counterDefault));
    setReseted(true);
  }
  const decreaseCounter = ()=>{
    setCounter(counter - BigInt(steps));
    setReseted(false);
  }
  const toggleMenu = () => {
    if (optionsMenu) {
      setOptionsMenu(false)
    } else {
      setOptionsMenu(true)
    }
  }
  const colorCounter = ()=> {
    if (counter < 0) {
      return "Red"
    } else if (counter > 0) {
      return "Green"
    } else {
      return "Black"
    }
  }

  return (
    <div className='container'>
      <header className='headerSite'>
        <h1 className='siteTitle'><a href="/">Counter</a></h1>
      </header>
      <main className='mainContentSite'>
        <div className='bigCounterNumberArea'>
          <p className='bigCounterNumber' style={{color: colorCounter()}}>{counter.toString()}</p>
        </div>
        
        
        <div className='buttonsArea'>
          <button className='buttonCounter' onClick={decreaseCounter}>
            Decrease
          </button>
          {!reseted && 
          <button className='buttonCounter' onClick={resetCounter}>
            Reset
          </button>}
          <button className='buttonCounter' onClick={increaseCounter}>
            Increase
          </button>
        </div>
        <button className='buttonCounter' onClick={toggleMenu}>
          {optionsMenu ? "Hide Menu" : "Show Menu"}
        </button>
        {optionsMenu && 
          <div className='optionsMenu'>
            <div className='steps'>
              <label htmlFor="stepsNumber" id='labelStepsNumber'>Steps: </label>
              <input type="number" id='stepsNumber' min='1' value={steps} onChange={changeSteps}/>
            </div>
            <div className='defaultNumber'>
              <label htmlFor="defaultNumber" id='labelDefaultNumber'>Default: </label>
              <input type="number" id='defaultNumber' value={counterDefault} onChange={changeDefault}/>
            </div>
          </div>
        }
      </main>
      <footer className='footerSite'>
        <small>Created By Guilherme de Paula da Silva</small>
      </footer>
    </div>
  )
}

export default App