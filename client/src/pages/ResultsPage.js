// client/src/pages/ResultsPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const ResultsPage = () => {
    const [searchParams] = useSearchParams();
    

    const tags= searchParams.get('result');
    

    const calculateScore = () => {
        let score = 0;
        // Calculate score based on answers
        return score;
    };

    return (
        <div>
            <h1>Your Final Score: {tags}</h1>
        </div>
    );
};

export default ResultsPage;
