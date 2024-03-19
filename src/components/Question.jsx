import React from 'react'
import Options from './Options'



export default function Question({question, dispatch, answer, index}) {
  return (
    <div> 
     <h4><strong>Q.No:{index+1} - </strong>{question.question}</h4>
     <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>
  )
}
