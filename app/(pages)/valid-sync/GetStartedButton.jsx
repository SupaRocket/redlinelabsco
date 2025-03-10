'use client';

import { Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function GetStartedButton() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace('waitlist-', '')]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitResult({
          type: 'success',
          message:
            result.message ||
            "Thanks for joining our waitlist! We'll notify you when ValidSync is available.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
        });

        // Close modal after 2 seconds
        setTimeout(() => {
          setShowModal(false);
          setSubmitResult(null);
        }, 2000);
      } else {
        setSubmitResult({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitResult({
        type: 'error',
        message: 'Network error. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button
        colorScheme='blue'
        onClick={() => setShowModal(true)}
        backgroundColor={'#2563eb'}
      >
        Get Started
      </Button>

      {showModal && (
        <div className='modal' style={{ display: 'flex' }}>
          <div className='modal-content' style={{ maxWidth: '500px' }}>
            <div className='modal-header'>
              <h2>Join the ValidSync Waitlist</h2>
              <button
                className='close-button'
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <div className='modal-body'>
              {submitResult ? (
                <div
                  className={`p-4 rounded-md ${
                    submitResult.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitResult.message}
                </div>
              ) : (
                <>
                  <p>
                    Join our waitlist to be notified when ValidSync launches in
                    your area.
                  </p>
                  <form className='waitlist-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                      <label htmlFor='waitlist-name'>Full Name</label>
                      <input
                        type='text'
                        id='waitlist-name'
                        placeholder='Enter your name'
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='waitlist-email'>Email Address</label>
                      <input
                        type='email'
                        id='waitlist-email'
                        placeholder='Enter your email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='waitlist-company'>Company</label>
                      <input
                        type='text'
                        id='waitlist-company'
                        placeholder='Enter your company name'
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='waitlist-role'>Your Role</label>
                      <select
                        id='waitlist-role'
                        required
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value=''>Select your role</option>
                        <option value='real-estate'>
                          Real Estate Professional
                        </option>
                        <option value='contractor'>Licensed Contractor</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                    <button
                      type='submit'
                      className='button button-primary'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
