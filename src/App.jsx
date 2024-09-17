import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [arr, setArr] = useState([
    {
      id: 1,
      isClicked: false,
      isVisible: true
    },
    {
      id: 2,
      isClicked: false,
      isVisible: true
    },
    {
      id: 3,
      isClicked: false,
      isVisible: true
    },
    {
      id: 4,
      isClicked: false,
      isVisible: true
    },
    {
      id: 5,
      isClicked: false,
      isVisible: false
    },
    {
      id: 6,
      isClicked: false,
      isVisible: false
    },
    {
      id: 7,
      isClicked: false,
      isVisible: true
    },
    {
      id: 8,
      isClicked: false,
      isVisible: true
    },
    {
      id: 9,
      isClicked: false,
      isVisible: true
    },
  ]);

  const [queue, setQueue] = useState([]);
  // [0,1,2,3,4,5,6,7]

  useEffect(() => {
    
    if(queue.length === 7) {
      for(let i = 0; i < queue.length; i++) {
        setTimeout(() => {
          setArr(pre => {
            const temp = [...pre];
            temp[queue[i]].isClicked = false;
            return temp;
          })
          setQueue(pre => {
            const temp = [...pre];
            temp.shift();
            return temp;
          })
        }, i * 1000)
      }
    }
  },[queue.length])



  const onClickHandler = (index) => {
    setArr(pre => {
      const temp = [...pre];
      temp[index].isClicked = true;
      return temp
    })
    setQueue(previousState => {
      const temp = [...previousState];
      temp.push(index)
      return temp
    })
  }

  return (
   <div className="ctn">
      {arr.map((item, index) => {
        return (
          item.isVisible === true ? <div key={index} className={`box ${item.isClicked === false ? 'yellow' : 'green'}`} onClick={() => onClickHandler(index)}>{item.id}</div> : <div key={index}></div>
        )
      })}
   </div>
  );
}

export default App;
