import React, { useState, useEffect } from 'react'
import '../styles/App.css';
const App = () => {
  const [day, setDay] = useState('')
  const date = new Date()
  useEffect(() => {
    setDay(date.toLocaleString(window.navigator.language, { weekday: 'long' }));
  }, [date])
  const setTheMessage = (day) => {
    return (day === "Monday" ? "Hey Mango Monday" :
    day === "Tuesday" ? "Hey Tomato Tuesday" :
    day === "Wednesday" ? "Hey Windy Wednesday" :
    day === "Thursday" ? "Hey Thunder Thursday" :
    day === "Friday" ? "Hey Fun Friday" :
    day === "Saturday" ? "Hey Smooth Saturday" :
    day === "Sunday" ? "Hey Sugar Sunday" :
    "");

  }
  const msg = setTheMessage(day)

  return (
    <div id="main">
      <h1> {msg}</h1>
    </div>
  )
}


export default App;
