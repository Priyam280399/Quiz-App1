import data from '../data/data.json';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectTag } from '../redux/actions'; // Use selectTag
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();
    const [selectedTags, setSelectedTags] = useState(data?.uniqueTags);
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
      

    const handleTagClick = (tag) => {
            setTags(pre=>[...pre,tag]);
        }
      

    const startQuiz = () => {
        console.log('tags',tags);
        // dispatch(selectTag(selectedTags));
        // Redirect to quiz page
          navigate(`/quiz?tag=${tags}`)

    };

    return (
        <div>
            <h1>Select Tags</h1>
            <div>
                {selectedTags?.map((tag) => (
                    <button key={tag} onClick={() => handleTagClick(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
            <button onClick={()=>startQuiz()} >
                Start Quiz
            </button>
        </div>
    );
};

export default WelcomePage;
