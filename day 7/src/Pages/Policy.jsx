import React, { useState, useEffect } from 'react'; // Add the correct import statement for React
import { Link } from 'react-router-dom'; // Import Link from React Router
import LayoutUser from '../components/LayoutUser';
import '../assets/Style.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

function Policy() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  // Sample claim data, replace with actual data fetched from your API
  const [claimData, setClaimData] = useState([]);

  return (
    <>
    <LayoutUser/>
    <div className="home-policy">
      

      <div className='pad'>
        <div className='head'>
       
          <h2>Best Health Insurance Plans to secure yourself</h2>
        </div>
     
      </div>

      <div className="policy-list">
        <div className="plan">
          <h3>Sky Women Care Insurance Policy</h3>
          <div className="plan-details">
            <p>Unique Cover: Specially designed policy that provides multi-fold benefits for women.</p>
            <p>Automatic Restoration: 100% of the Sum insured is restored once in a policy period</p>
            <p>Delivery Expenses: Normal & C-section delivery expenses are covered(including pre and post-natal)</p>
          </div>
        </div>
        </div>

        <div className="plan-s">
           <h3>Comprehensive Insurance Policy</h3> 
          <div className="plan-details">
          <p>Buy back pEd:Optional cover to reduce  waiting period in respect of Pre-Existing diseases.</p>
            <p>Automatic Restoration: 100% of the Sum insured is restored once in a policy period</p>
            <p>Mid Term Inclusion: Newly married/wedded spouse and new born baby are covered on payment of additional premium</p>
          </div>
        </div>
        <div className='plann-v'>
        <div className="plan-v">
           <h3>Senior Citizen Red Carpet Health Insurance</h3> 
          
          <p>Elderly Cover:  Designed for the age group of 60 – 75 years with lifelong renewals .</p>
            <p>Outpatient Cover: Get cover for medical consultations as an outpatient at Network Hospitals </p>
            <p> Get cover for medical consultations as an outpatient at Network Hospitals </p>
          </div>
        </div>
        </div>
        </>
      
    
  );
}

export default Policy;