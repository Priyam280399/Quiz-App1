import axios from 'axios';

// Action Types
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SELECT_TAG = 'SELECT_TAG';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const CALCULATE_SCORE = 'CALCULATE_SCORE';
export const RESET_QUIZ = 'RESET_QUIZ';

// Action Creators

// Fetch questions from the backend
export const fetchQuestions = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/api/questions');
        dispatch(setQuestions(response.data));
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
};

// Set the questions in the Redux store
export const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    payload: questions,
});

// Select tags for the quiz
export const selectTag = (tag) => ({
    type: SELECT_TAG,
    payload: tag,
});

// Submit an answer for the current question
export const submitAnswer = (answer) => ({
    type: SUBMIT_ANSWER,
    payload: answer,
});

// Calculate the final score after the quiz is completed
export const calculateScore = () => ({
    type: CALCULATE_SCORE,
});

// Reset the quiz (to start over or after completion)
export const resetQuiz = () => ({
    type: RESET_QUIZ,
});

