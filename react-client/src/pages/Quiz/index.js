import React from 'react'
import {AnswerCard, Question} from '../../components'
import { useSelector } from  'react-redux'

const Quiz = () => {

    const result = useSelector((state) => state.results);
    console.log(result[0])
    let correctAnswer = result[0].correct_answer
    let answers = result[0].answers
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