import { SET_QUESTIONS, SELECT_TAG, SUBMIT_ANSWER, CALCULATE_SCORE, RESET_QUIZ } from './actions';

// Initial State
const initialState = {
    questions: [],
    selectedTags: [],
    currentQuestionIndex: 0,
    answers: [],
    score: 0,
};

// Reducer Function
export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
            };

        case SELECT_TAG:
            // Allow selecting up to 20 tags
            if (state.selectedTags.length < 20) {
                return {
                    ...state,
                    selectedTags: [...state.selectedTags, action.payload],
                };
            }
            return state;

        case SUBMIT_ANSWER:
            const isCorrect = checkAnswer(state.questions[state.currentQuestionIndex], action.payload);
            const updatedAnswers = [...state.answers, { question: state.currentQuestionIndex, answer: action.payload, isCorrect }];

            return {
                ...state,
                answers: updatedAnswers,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            };

        case CALCULATE_SCORE:
            const finalScore = state.answers.reduce((total, answer) => {
                if (answer.isCorrect) {
                    if (Array.isArray(answer.answer)) {
                        // Multiple answer correct
                        const correctOptions = answer.answer.filter((option) => option.correct).length;
                        const incorrectOptions = answer.answer.length - correctOptions;
                        return total + 4 * (correctOptions === answer.answer.length) - incorrectOptions;
                    }
                    return total + 4; // Single answer correct
                } else {
                    return total - 2; // Incorrect single answer
                }
            }, 0);

            return {
                ...state,
                score: finalScore,
            };

        case RESET_QUIZ:
            return {
                ...state,
                currentQuestionIndex: 0,
                answers: [],
                score: 0,
                selectedTags: [],
            };

        default:
            return state;
    }
};

// Helper Function to Check Answers
const checkAnswer = (question, userAnswer) => {
    if (question.isMultiple) {
        // For multiple answer correct questions, check if all selected options are correct
        const correctAnswers = question.correctAnswers.sort();
        const userAnswers = userAnswer.sort();
        return correctAnswers.every((ans, idx) => ans === userAnswers[idx]);
    } else {
        // For single answer correct questions
        return question.correctAnswers[0] === userAnswer;
    }
};
