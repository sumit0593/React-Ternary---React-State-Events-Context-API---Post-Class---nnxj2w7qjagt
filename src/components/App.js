import React, { useState, useEffect } from 'react'
import '../styles/App.css';
const App = () => {
  const [day, setDay] = useState('')
  const date = new Date()
  useEffect(() => {
    setDay(date.toLocaleString(window.navigator.language, { weekday: 'long' }));
  }, [date])
  const setTheMessage = (day) => {
    return () ? "Hey Mango Monday" :
     

  }
  const msg = setTheMessage(day)

  return (
    <div id="main">
      <h1> {msg}</h1>
    </div>
  )
}


export default App;
