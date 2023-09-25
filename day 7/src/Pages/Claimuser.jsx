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
const linkStyle2 ={
  textDecoration : 'none',
  color:'black',
}

function Claimuser() {
  return (
    <>
    <LayoutUser/>
    <div className="home">
        {/* Horizontal options */}
        <div className="horizontal-options">
          <Link to="/claimuserpro" className="option" style={linkStyle2}>
            Claim Process
          </Link>
          <Link to="/Claimuserin" className="option" style={linkStyle2}>
            Claim Intimation
          </Link>
          <Link to="/claimusersts" className="option" style={linkStyle2}>
            Claim Status
          </Link>
          {/* <Link to="/claimup" className="option" style={linkStyle2}>
            Claim Upload
          </Link> */}
        </div>
        <div><p className='paraclaim'>Contact the Relevant Authority or Organization: <br></br>Reach out to the organization or authority responsible for processing your claim. This could be an insurance company, a government agency, a company's customer service department, or any entity involved in the claims process. Use the contact information provided on their website or in your claim documentation.

Follow Up: If you've already submitted a claim and haven't received a response, it's essential to follow up regularly. Sometimes claims get delayed due to administrative or processing issues, and a polite inquiry can help move things along.<br></br>

Provide Complete Documentation:<br></br> Ensure that you've submitted all the necessary documentation and information required to process your claim. Missing or incomplete documentation can lead to delays or denials.

Review Claim Guidelines: Carefully review the guidelines and requirements for filing a claim. Make sure you meet all the eligibility criteria and have followed the correct procedures.

<br></br>Document Your Communications:<br></br> Keep a record of all your communications with the organization regarding your claim. This includes emails, letters, phone calls, and any other correspondence. Document the dates, names of representatives you spoke with, and details of the conversations.

<br></br>Be Patient: <br></br>Claims processing can sometimes take time, depending on the complexity of the claim and the workload of the organization. While it's important to follow up, also exercise patience during the process.

<br></br></p></div>
      </div>
  
    </>
  );
}

export default Claimuser;
