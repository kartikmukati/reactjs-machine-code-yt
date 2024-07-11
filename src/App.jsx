import { useState } from 'react';
import './App.css'

function App(props) {

  const [currentStar, setCurrentStar] = useState(-1);
  const [starHover, setStarHover] = useState(-1);

  const starClickedHandler = (index) => {
    setCurrentStar(index + 1);
  }

  const mouseHoverHandler = (index) => {
    setStarHover(index + 1);
  }

  return (
   <div className='container'>
    {[...Array(5)].map((item, index) => {
      return (
        <div className={(starHover || currentStar) > index ? 'star-filled' : 'star'} key={index} 
        onClick={() => starClickedHandler(index)}
        onMouseEnter={() => mouseHoverHandler(index)}
        onMouseLeave={() => setStarHover(null)}></div>
      )
    })}
   </div>
  )
}

export default App