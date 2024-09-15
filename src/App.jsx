import { useState } from "react";
import "./App.css";

function App() {

  const [time, setTime] = useState({})

  setInterval(() => {
     const hours = new Date().getHours() < 10 ? "0"+new Date().getHours() : new Date().getHours()
     const minutes = new Date().getMinutes() < 10 ? "0"+new Date().getMinutes() : new Date().getMinutes();
     const seconds = new Date().getSeconds() < 10 ? "0"+ new Date().getSeconds(): new Date().getSeconds()
    setTime({
      hours,
      minutes,
      seconds
    })
  },2000)

  return (
   <div className="ctn">
    <div className="clock-ctn">
      <h5>{time.hours}:</h5>
      <h5>{time.minutes}:</h5>
      <h5>{time.seconds}</h5>
    </div>
   </div>
  );
}

export default App;
