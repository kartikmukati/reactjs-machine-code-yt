import './App.css'

import styled, {keyframes} from 'styled-components';

function App(props) {

  const progress_ = props.percentage

  return (
    <div className="container">
      <Progress y={props.percentage}>
        <h1>{progress_}%</h1>
      </Progress>
    </div>
  )
}

export default App

const progressAnimation = (percentage) => keyframes`
  0% {width: 0%;}
  100% { width: ${percentage}%;}
`


const Progress = styled.div`
  height: 100%;
  width: auto;
  border-radius: 16px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: end;
  animation: ${(props) => progressAnimation(props.y)} 2s forwards
`


