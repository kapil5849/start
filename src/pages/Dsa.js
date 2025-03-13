import React from 'react';
import aiIllustration from '../assets/right.svg';
import '../styles/dsa.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main-home'>
      <div className='left'>
        <div>
          <h1>Welcome to DSA Junction! 🚀</h1>
        </div>
        <div>
          <p style={{ color: '#A3B3BC' }}>
            Supercharge your coding skills at DSA Junction! Master
            <span className='highlight-text'> Data Structures and Algorithms </span> through hands-on courses. Explore the world of
            <span className='highlight-text'> problem-solving and algorithmic thinking, </span>
            key pillars of a successful tech career.
          </p>
        </div>
        <div>
          <h1 className='highlight'>Learn DSA by Practicing 🧠</h1>
        </div>
        <Link className='buttons-container' to='/dsa/buyCourse'>
          <button>Start Exploring</button>
        </Link>
      </div>
      <div className='right'>
        <img src={aiIllustration} alt='AI Illustration' />
      </div>
    </div>
  );
}

export default Home;
