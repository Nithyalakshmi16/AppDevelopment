import React, { useState, useEffect } from 'react'; // Add the correct import statement for React
import { Link } from 'react-router-dom'; // Import Link from React Router
import LayoutUser from '../components/LayoutUser';
import '../assets/Style.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice'
const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};
const linkStyle2 = {
  textDecoration: 'none',
  color: 'black',
};

function Claimuserin() {
  // State for form fields
  const [formData, setFormData] = useState({
    policyType: '',
    intimatorContact: '',
    email: '',
    attendersMobile: '',
    patientStatus: '',
    claimType: '',
    agree: false,
  });

  // State for uploaded documents
  const [documents, setDocuments] = useState({
    claimForm: null,
    hospitalBill: null,
    paymentReceipt: null,
    cancelledCheque: null,
  });

  // State to manage the success message
  const [claimSuccess, setClaimSuccess] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Handle document uploads
  const handleDocumentUpload = (e) => {
    const { name, files } = e.target;
    // Ensure only one file is uploaded per input
    if (files.length === 1) {
      // Check the file extension (allow jpg, jpeg, png, and pdf)
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];
      const fileExtension = files[0].name.split('.').pop().toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        setDocuments({
          ...documents,
          [name]: files[0],
        });
      } else {
        alert('Please upload a valid file with extensions: jpg, jpeg, png, pdf.');
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, including handling uploaded documents
    // For this example, we're just setting the claimSuccess state to true
    setClaimSuccess(true);
  };
  const handleBack = () => {
    window.history.back(); // Use the browser's history to navigate back
  };
  return (
    <>
    <LayoutUser/>
    <div className="home">
    {/* Back Button */}
    <button className="back-button" onClick={handleBack}>
          Back
        </button>
    
      {/* Form Section */}
      <div className="form-section">
        <h2>Patient Information</h2>
        <form onSubmit={handleSubmit}>
          {/* Select Policy Type */}
          <div className="form-group">
            <label>Select Policy Type</label>
            <select
              name="policyType"
              value={formData.policyType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="Health">Health</option>
              <option value="Group">Group</option>
            </select>
          </div>

          {/* Intimator Contact Number */}
          <div className="form-group">
            <label>Intimator Contact Number</label>
            <input
              type="text"
              name="intimatorContact"
              value={formData.intimatorContact}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Attenders Mobile Number */}
          <div className="form-group">
            <label>Attenders Mobile Number</label>
            <input
              type="text"
              name="attendersMobile"
              value={formData.attendersMobile}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Patient Status */}
          <div className="form-group">
            <label>Patient Status</label>
            <select
              name="patientStatus"
              value={formData.patientStatus}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="Discharged">Discharged</option>
              <option value="Deceased">Deceased</option>
            </select>
          </div>

          {/* Claim Type */}
          <div className="form-group">
            <label>Claim Type</label>
            <select
              name="claimType"
              value={formData.claimType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="Cashless">Cashless</option>
              <option value="Reimbursement">Reimbursement</option>
            </select>
          </div>

          {/* Claim Form Upload */}
          <div className="form-group">
            <label>Claim Form Upload (jpg, jpeg, png, pdf)</label>
            <input
              type="file"
              name="claimForm"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleDocumentUpload}
            />
            {documents.claimForm && (
              <p className="file-name">{documents.claimForm.name}</p>
            )}
          </div>

          {/* Hospital Bill Upload */}
          <div className="form-group">
            <label>Hospital Bill Upload (jpg, jpeg, png, pdf)</label>
            <input
              type="file"
              name="hospitalBill"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleDocumentUpload}
            />
            {documents.hospitalBill && (
              <p className="file-name">{documents.hospitalBill.name}</p>
            )}
          </div>

          {/* Payment Receipt Upload */}
          <div className="form-group">
            <label>Payment Receipt Upload (jpg, jpeg, png, pdf)</label>
            <input
              type="file"
              name="paymentReceipt"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleDocumentUpload}
            />
            {documents.paymentReceipt && (
              <p className="file-name">{documents.paymentReceipt.name}</p>
            )}
          </div>

          {/* Cancelled Cheque Upload */}
          <div className="form-group">
            <label>Cancelled Cheque Upload (jpg, jpeg, png, pdf)</label>
            <input
              type="file"
              name="cancelledCheque"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleDocumentUpload}
            />
            {documents.cancelledCheque && (
              <p className="file-name">{documents.cancelledCheque.name}</p>
            )}
          </div>

          {/* Agree Checkbox */}
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleInputChange}
                required
              />{' '}
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
        {claimSuccess && (
          <div className="success-message">
            Claim applied successfully! {/* You can customize this message */}
          </div>
        )}
      </div>

      
      
    </div>
    </>
  );
}

export default Claimuserin;