'use client';

import React, { useState, useEffect } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import '../styles/animations.css';

export default function VendorsGrid() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState([]);

  // Simulate data fetch
  useEffect(() => {
    setTimeout(() => {
      const data = [
        {
          name: 'Sarah Johnson - Real Estate Broker',
          license: 'RE-2024-001',
          status: 'Valid',
          lastVerified: '03/05/2024',
          expirationDate: '03/12/2024'
        },
        {
          name: 'Elite Construction Co.',
          license: 'GC-2024-078',
          status: 'Pending',
          lastVerified: '02/08/2025',
          expirationDate: '11/09/2025'
        },
        {
          name: 'Southwest Plumbing Services',
          license: 'PL-2024-045',
          status: 'Valid',
          lastVerified: '02/08/2025',
          expirationDate: '10/31/2024'
        },
        {
          name: 'Certified Home Inspections',
          license: 'HI-2024-078',
          status: 'Expired',
          lastVerified: '02/28/2024',
          expirationDate: '02/28/2024'
        }
      ];
      
      setVendors(data);
      setLoading(false);
      
      // Stagger the card animations
      data.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 100); // 100ms delay between each card
      });
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <LoadingSpinner size="md" />
      </div>
    );
  }

  return (
    <div className="vendors-grid-container">
      <h1 className="text-2xl font-bold text-center my-6 fade-in">Preferred Vendors</h1>
      <div className="card-grid">
        {vendors.map((vendor, idx) => (
          <div 
            className={`card ${visibleCards.includes(idx) ? 'fade-in-up' : 'opacity-0'}`} 
            key={idx}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="card-header">
              <h2 className="card-title">{vendor.name}</h2>
              <span className={`status ${vendor.status.toLowerCase()}`}>
                {vendor.status}
              </span>
            </div>
            <div className="card-body">
              <p><strong>License:</strong> {vendor.license}</p>
              <p><strong>Last Verified:</strong> {vendor.lastVerified}</p>
              <p><strong>Expiration Date:</strong> {vendor.expirationDate}</p>
            </div>
            <div className="card-footer">
              <button className="verify-button">Verify License</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 