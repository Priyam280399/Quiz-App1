import './style.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitAnswer } from '../redux/actions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import data from '../data/data.json';
import ResultsPage from './ResultsPage';


const QuizPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const tags= searchParams.get('tag');
     const [quiznumber,setQuiznumber]= useState(0);
       const [result,setResult]= useState(0);
     
    const [question, setQuestion] = useState([]);
    // const dispatch = useDispatch();
    const [ans, setAns] = useState([]);
    // const [timeLeft, setTimeLeft] = useState(30);
   
     const loadquiz = (tag) => {
        
         let quizdata = data?.questions?.filter(n=>tag.some(item => n.tags.includes(item)))
      
         setQuestion(quizdata);
     }
    useEffect(() => {
        if(tags?.split(',').length>0){
            loadquiz(tags?.split(','))
        }
      
    }, []);
    

    // const handleAnswer = (answer) => {
    //     dispatch(submitAnswer(answer));
    //     // Move to the next question
    // };
    const handleAnswer = (answer,correct) => {
        setAns(prev=>[...prev,answer])
        setQuiznumber(curr=>curr+1)
        if(ans.length>=5){
            console.log(ans);



        }
        if(correct.includes(answer)){
            setResult(a=>a+1)
        }


    };


    if(quiznumber==question.length){
        navigate(`/results?result=${result}`)
    }
    return (
        <div>
            {question?.length >= quiznumber ? (
                <div className="question-page">
                    <div className="question-container">
                        <h2 className="question-text">
                            {question?.[quiznumber]?.question}
                        </h2>
                        <ul className="options-list">
                            {question?.[quiznumber]?.options.map((option, index) => (
                                <li key={index} className="option-item">
                                    <button 
                                        className="option-button" 
                                        onClick={() => handleAnswer(option,question?.[quiznumber]?.correct)}
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <ResultsPage />
            )}
        </div>
    );
};
    

export default QuizPage
