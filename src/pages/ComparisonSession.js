import React from 'react';
import '../styles/comparison.css';

const ComparisonAlphaSigma = () => {
  return (
    <div className="comparison-section">
      <h2 className="comparison-heading">DSA Junction v/s Other Courses</h2>
      <div className="comparison-container">
        <div className="comparison-card">
          <h3 className="card-heading">DSA Junction Course</h3>
          <ul className="card-list">
            <li><p className="card-text">Comprehensive structured DSA coverage</p></li>
            <li><p className="card-text">Campus placement focused</p></li>
            <li><p className="card-text">Live sessions</p></li>
            <li><p className="card-text">Real-time feedback on practice codes</p></li>
            <li><p className="card-text">Lifetime community access</p></li>
            <li><p className="card-text">Pocket-friendly courses</p></li>
            <li><p className="card-text">Instructor-signed certificate</p></li>
            <li><p className="card-text">24/7 Doubts solving</p></li>
          </ul>
          <a href="/dsa/buyCourse" className="explore-link">Join Now for ₹2000</a>
        </div>
        <div className="comparison-card">
          <h3 className="card-heading">Other Online Courses</h3>
          <ul className="card-list">
            <li><p className="card-text">Varied content quality</p></li>
            <li><p className="card-text">Generic course structure</p></li>
            <li><p className="card-text">Limited live sessions</p></li>
            <li><p className="card-text">No real-time feedback</p></li>
            <li><p className="card-text">Limited access duration</p></li>
            <li><p className="card-text">Varied pricing</p></li>
            <li><p className="card-text">Standard certificate</p></li>
            <li><p className="card-text">Limited doubt support</p></li>
          </ul>
          <a href="/dsa" className="enroll-link">Explore DSA Junction</a>
        </div>
      </div>
    </div>
  );
};

export default ComparisonAlphaSigma;
