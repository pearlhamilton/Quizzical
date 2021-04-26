import React from 'react'
import {AnswerCard, Question} from '../../components'
import { useSelector } from  'react-redux'

const Quiz = () => {
    const currentQuestion = useSelector((state) => state.current_question)
    const result = useSelector((state) => state.results);
    let correctAnswer = result[currentQuestion].correct_answer
    let answers = result[currentQuestion].answers
    // console.log(incorrectAnswer)

    //     if (incorrectAnswer){
    // let x = incorrectAnswer.map(answer => console.log(answer))
    //     } else{
    //         console.log('nothing in array')
    //     }
    
        // console.log(x)
    return(
        <>
        <h1> I am the quiz page</h1>
        <Question/>

        {/* <AnswerCard correctAnswer={correctAnswer}/>
        {incorrectAnswer.map(answer => console.log(answer) )} */}

        {answers && answers.map(answer=> <AnswerCard answer={answer} />)}

        {/* {artists.map(artist => 
                <ArtistCard key={ artist.id} id = {artist.id} name={artist.name} artistImg={artist.artistImg} albums ={artist.Albums}/>)} */}
        
        </>
    )
}

export default Quiz