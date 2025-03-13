import React, { useState } from 'react'
import FAQ from '../components/FAQ';
import '../styles/faq.css';

const Faq = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const toggleFAQ = (index) => {
    setCurrentIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="faq-containers">
      <header style={{ color: 'black', fontSize: '24px', margin: '3px', marginBottom: '20px', marginTop: '20px' }}>
        Frequently Asked Questions
      </header>
      <FAQ
        question="What are Data Structures and Algorithms (DSA)?"
        answer="Data Structures and Algorithms are tools & techniques that help us write efficient code. A data structure is a named location used to store and organize data. An algorithm is a collection of steps to solve a particular problem."
        index={0}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Why should I learn Data Structures and Algorithms (DSA)?"
        answer="Data Structures and Algorithms are frequently asked in job interviews at top companies. Learning DSA helps you write optimized and scalable code, making your code run faster and require less storage."
        index={1}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="How long is the course access?"
        answer="The course videos and practice problems are accessible until your BTech completion. You can access it anytime, anywhere."
        index={2}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="What are the prerequisites for the courses?"
        answer="There are no specific prerequisites for the courses. Each course is designed to be accessible to anyone with a basic understanding of the subject."
        index={3}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="I don't know anything about Coding, is this batch good for me?"
        answer="Absolutely, this batch covers all important concepts from basic to advanced. No prior coding knowledge is required."
        index={4}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="What if I have doubts?"
        answer="We have a dedicated team for doubt support that is ready to help you. Reach out to them via the discussion forum or through our WhatsApp Community."
        index={5}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Do I need to be a Computer Science student to take up this course?"
        answer="No, anyone from any background or field of study can take up this batch and learn DSA."
        index={6}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Can I do this batch with my college classes?"
        answer="Yes, it is a self-paced batch and can be done alongside your college classes."
        index={7}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Is the batch in Hindi or English?"
        answer="The batch is taught in Hinglish, a mix of Hindi & English."
        index={8}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Where will I get the live lectures?"
        answer="You will get lectures via Google Meet or Zoom, and all recorded lectures will be provided on YouTube."
        index={9}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="What is the batch duration?"
        answer="The batch will be accessible for four years until your BTech completion."
        index={10}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Is there a batch schedule?"
        answer="Yes, a detailed schedule will be provided to you in advance."
        index={11}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="What are the class timings?"
        answer="All lectures and live sessions will take place in the evening, after 6 pm. The schedule for each week will be communicated in advance."
        index={12}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="What is the batch fee?"
        answer="The batch fee is ₹2000/- only."
        index={13}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="What is the mode of payment?"
        answer="You can pay via UPI, Paytm, or any other UPI app."
        index={14}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="How to enroll for the batch?"
        answer="You can enroll for the batch by filling out the form given below."
        index={15}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="What is the batch size?"
        answer="The batch size is limited to 40-50 students only."
        index={16}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Is there a group/community I can join after enrolling?"
        answer="Yes, an exclusive community will be available for all enrolled students."
        index={17}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="I paid but still did not receive any welcome email/unable to access my course. What to do?"
        answer="Don't worry! In case of any enrollment issues, please email us at info@dsajunction.com or WhatsApp us at (+91) 8112263958 with the subject 'ENROLMENT ISSUE SIGMA.' Include your full name, phone number, payment ID from Razorpay, and a screenshot of your payment."
        index={18}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Can I enroll as a working professional?"
        answer="Certainly! The batch is designed to accommodate the schedules of working professionals."
        index={19}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Will there be any Certificate of completion?"
        answer="Yes, you will receive an instructor-signed certificate from DSA Junction upon completing the course."
        index={20}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
      <FAQ
        question="Can I get a refund if I change my mind?"
        answer="No, there is a strict 'No Refund' policy."
        index={21}
        currentIndex={currentIndex}
        toggleFAQ={toggleFAQ}
      />
    </div>
  )
}

export default Faq;
