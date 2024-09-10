import { useState } from "react";
import "./App.css";

function App() {

  // ['1','2','3','4]
  // ['','','','']
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const onInputChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setOtp(pre => {
      const temp = [...pre];
      temp[index] = value;
      return temp;
    })
    if(index < otp.length - 1 && value) {
      e.target.nextSibling.focus();
    }
  }

  const onKeyDown = (e, index) => {
    if(e.key === "Backspace" && index > 0 && !e.target.value) {
      e.target.previousSibling.focus();
    }
  }

  return (
   <div className="ctn">
    <h5>Enter the code we just sent</h5>
    <span>We sent a sign-in code to +91-9656454589</span>
    <span>The code will expire in 15 minutes</span>
    <div className="otp-ctn">
      {otp.map((item, index) => {
        return (
          <input key={index} type="text" maxLength={1} value={item} onChange={(e) => onInputChange(e, index)} onKeyDown={(e) => onKeyDown(e, index)} />
        )
      })}
    </div>
    <button>Sign In</button>
   </div>
  );
}

export default App;
