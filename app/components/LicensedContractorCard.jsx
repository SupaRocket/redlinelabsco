'use client';

import { useState } from 'react';

export default function LicensedContractorCard() {
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
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
        <div className="role-content">
          <h4 className="role-title">Licensed Contractor?</h4>
          <p className="role-description">Track verifications and receive job opportunities</p>
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
              <h2>Join Our Contractor Network</h2>
              <button 
                className="close-button" 
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Get verified and receive job opportunities from real estate professionals.</p>
              <form 
                className="waitlist-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Here you would handle form submission
                  alert('Thanks for joining our contractor network! We\'ll be in touch soon.');
                  setShowModal(false);
                }}
              >
                <div className="form-group">
                  <label htmlFor="contractor-name">Full Name</label>
                  <input type="text" id="contractor-name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contractor-email">Email Address</label>
                  <input type="email" id="contractor-email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="license-number">License Number</label>
                  <input type="text" id="license-number" placeholder="Enter your license number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="license-type">License Type</label>
                  <input type="text" id="license-type" placeholder="e.g., Plumbing, Electrical, etc." required />
                </div>
                <button type="submit" className="button button-primary">Join Network</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 