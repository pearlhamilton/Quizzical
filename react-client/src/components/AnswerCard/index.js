import React from "react"
import { useDispatch } from 'react-redux';
import { changeQuestion } from "../../actions";


const AnswerCard = (props) => {
const dispatch = useDispatch()

const nextQuestion = () => dispatch(changeQuestion())
    return (
        <>
         <button onClick={nextQuestion}>{props.answer}</button>

         </>
    )
}

export default AnswerCard;