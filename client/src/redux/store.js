import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { quizReducer } from './reducers'; // Ensure this path is correct

// Combine reducers if there are multiple reducers
const rootReducer = combineReducers({
    quiz: quizReducer,
    // other reducers can be added here
});

// Create Redux store with middleware and DevTools extension
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) // Apply thunk middleware
);

export default store;

