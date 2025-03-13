import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>About Us</h4>
            <p>
              DSA Junction is your go-to platform for mastering Data Structures and Algorithms, providing comprehensive content and courses for interview preparation.
            </p>
          </div>
          <div class="col-md-4">
            <h4>Contact Us</h4>
            <p>Email : <a href="mailto:kvaishnav408@gmail.com">info@dsajunction.com</a></p>
            <p>Phone: +91 8112263958</p>
          </div>
          <div class="col-md-4">
            <h4>Social Media</h4>
            <a href="https://twitter.com/kapil__vaishnav" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/kapil--vaishnav" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://api.whatsapp.com/send?phone=8112263958" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="https://engineerkapil.netlify.app/" target="_blank"><i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
        <div class="copyright">  
          Copyright &copy; 2023 DSA Junction. All rights reserved.
        </div>
      </div>
    </footer>

  );
};

export default Footer;

