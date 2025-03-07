'use client';

import { useState } from 'react';

export default function RealEstateCard() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <a 
        href="#" 
        className="role-card" 
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        <svg className="role-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <div className="role-content">
          <h4 className="role-title">Real Estate Professional</h4>
          <p className="role-description">Streamline your verification process</p>
        </div>
        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>

      {showModal && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Join Our Waitlist</h2>
              <button 
                className="close-button" 
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Be the first to know when ValidSync launches for Real Estate Professionals.</p>
              <form 
                className="waitlist-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Here you would handle form submission
                  alert('Thanks for joining our waitlist! We\'ll be in touch soon.');
                  setShowModal(false);
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" placeholder="Enter your company name" />
                </div>
                <button type="submit" className="button button-primary">Join Waitlist</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 