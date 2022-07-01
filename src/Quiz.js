import React, { useState } from 'react'

const Quiz = () => {
    const question = [
        {
            questionText : "Who is CEO of Tesla",
            answerOptions : [
                {text : 'Elon Mask',isCorrect : true},
                {text : 'Ragu',isCorrect : false},
                {text : 'Rohit',isCorrect : false},
                {text : 'Ram',isCorrect : false},
            ]
        },
        {
            questionText : "What is the capital of India",
            answerOptions : [
                {text : 'Tamil Nadu',isCorrect : false},
                {text : 'Kerala',isCorrect : false},
                {text : 'Karnataka',isCorrect : false},
                {text : 'Delhi',isCorrect : true},
            ]
        },
        {
            questionText : "The iphone was created by which company ?",
            answerOptions : [
                {text : 'Sony',isCorrect : false},
                {text : 'LG',isCorrect : false},
                {text : 'Apple',isCorrect : true},
                {text : 'Samsung',isCorrect : false},
            ]
        }
    ]

    const [questionCount,setquestionCount] = useState(0)
    const [score,setscore] = useState(0)
    const [showScore,setshowScore] = useState(false)

    const handleNext = (answer)=>{
        if(answer === true)
        {
            setscore(score + 1)
        }
        if(questionCount < question.length-1)
        {
            setquestionCount(questionCount + 1);
        }
        else{
            setshowScore(true)
        }
    }

    return (
        <>
        
            <div className="d-flex justify-content-center vh-100">
                <div className="col-lg-5 align-self-center text-start">
                    <div className="card shadow-sm bg-dark text-white border-0 rounded-3">
                        <div className="card-body">
                            {showScore ? <h3 className='text-center py-5'>Your score is {score} out of {question.length}</h3> :
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5 className='mb-4'>Question {questionCount + 1}/<span className='fs-5 fw-normal'>{question.length}</span></h5>
                                        
                                        <h6>{question[questionCount].questionText}</h6>
                                    </div>
                                    <div className='col-lg-6 d-grid'>
                                        {question[questionCount].answerOptions.map((option,index)=>{
                                            return <button key={index} onClick={()=>{handleNext(option.isCorrect)}} className='btn btn-outline-primary rounded-pill mb-3 text-white'>{option.text}</button>
                                        })}
                                        
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz