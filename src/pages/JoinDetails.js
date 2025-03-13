import React from 'react';
import '../styles/joining.css';

const JoiningDetails = () => {
  return (
    <div className="joining-details-section">
      <h2 className="joining-details-heading">Ready to take your Coding Skills to the Next Level?</h2>
      <div className="joining-details-container">
        <p className="details-text">
        Accelerate your coding journey with the DSA Junction course. Gain comprehensive knowledge, hands-on experience, and mentorship to propel your coding skills to new heights. Enroll now in the DSA Junction course for a limited-time offer of just ₹2000.
        </p>
        <p className="details-text">
          What's included:
        </p>
        <ul className="details-list">
          <li>Comprehensive live classes</li>
          <li>24/7 doubt-solving support</li>
          <li>Access to recorded sessions</li>
          <li>Practice codes with real-time feedback</li>
          <li>Scheduled Classes </li>
          <li>Lifetime Community access anytime, anywhere</li>
          <li>Exclusive certificate of completion</li>
        </ul>
        <p className="details-text">
          Take the first step towards mastering data structures and algorithms.
        </p>
        <div className="enroll-button">
          <a href="/dsa/buyCourse" className="enroll-link">Join Now for ₹2000</a>
        </div>
      </div>
    </div>
  );
};

export default JoiningDetails;
