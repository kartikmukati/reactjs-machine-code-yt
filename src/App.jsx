import { useState } from 'react'
import './App.css'

import { styled, keyframes } from 'styled-components'

function App(props) {

  const arr = [1,2,3,4,5,6]

  const percentageEachStep = 100 / (arr.length - 1);

  const [currentStep, setCurrentStep] = useState(arr[0]);
  const [percentageStart, setPercentageStart] = useState(0);
  const [percentageCompleted, setPercentageCompleted] = useState(0);

  const nextStepClickHandler = () => {
    setCurrentStep((pre) => {return pre + 1});
    setPercentageStart(percentageCompleted);
    setPercentageCompleted((pre) => {return pre + percentageEachStep});
  }

  return (
    <>
    <div className='container'>
      <div className='progress-line-outer'>
        <ProgressLineInner $percentageStart={percentageStart} $percentageCompleted={percentageCompleted}>
          <div className='steps-ctn'>
            {arr.map((item, index) => {
              return (
                <div className={currentStep === item ? 'progress-current-circle' : (currentStep > item ? 'progress-circle-filled' : 'progress-circle')}>
                  <h1>{item}</h1>
                </div>
              )
            })}
          </div>
        </ProgressLineInner>
      </div>

    </div>
    <button onClick={nextStepClickHandler}>Next Step</button>
    </>
  )
}

export default App

const progress = (percentageStart, percentageCompleted) => keyframes`
  from {
    width: ${percentageStart}%;
  }
  to {
    width: ${percentageCompleted}%;
  }
`


const ProgressLineInner = styled.div`
     height: 2px;
     background-color: rgb(0, 174, 255);
     display: flex;
     align-items: center;
     animation: ${(props) => progress(props.$percentageStart, props.$percentageCompleted)} 2s forwards
`