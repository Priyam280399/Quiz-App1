import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import WelcomePage from './pages/WelcomePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import './index.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/quiz" element={<QuizPage />} />
                        <Route path="/results" element={<ResultsPage />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
