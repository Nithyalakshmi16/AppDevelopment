import React, { useState, useEffect } from 'react'; // Add the correct import statement for React
import { Link } from 'react-router-dom'; // Import Link from React Router
import LayoutUser from '../components/LayoutUser';
import '../assets/Style.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice'; // Add the missing quotation mark here

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  
  const linkStyle2 = {
    textDecoration: 'none',
    color: 'black',
  };
 
  
  const documentChecklist = [
    "Claim form",
    "Doctor's prescription for treatment",
    "Hospital discharge certificate",
    "Final hospital bill in original",
    "Medical investigation reports",
    "Medicine bills with prescriptions",
    "Final payment receipt for reimbursement",
    "Cancelled Cheque of insured bank for reimbursement",
    "Medico Legal Certificate/FIR for road accidents",
    "KYC Documents",
  ];
function  Claimuserpro() {
  return (
    <>
    <LayoutUser/>
    <div className="homei">
     
      </div>

      {/* <div className="tracker">
        <h2>Claim Tracker</h2>
        <ol>
          {trackerSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div> */}

      <div className="document-checklist">
        <h2>Document Checklist</h2>
        <ul>
          {documentChecklist.map((document, index) => (
            <li key={index}>{document}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Claimuserpro;








