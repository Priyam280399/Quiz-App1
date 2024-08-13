// client/src/utils/matchingEngine.js
export const getTopQuestions = (tags, questions) => {
    return questions
        .map((q) => ({
            ...q,
            matchCount: q.tags.filter((tag) => tags.includes(tag)).length,
        }))
        .sort((a, b) => b.matchCount - a.matchCount)
        .slice(0, 10);
};
