import React, { useState, useEffect } from 'react';
import LayoutUser from '../components/LayoutUser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/Style.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

function User() {
  const user = useSelector(selectUser);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [ren, setRen] = useState(false); // Initialize ren as false

  useEffect(() => {
    // Show the renewal alert when the component mounts
    setRen(true);
  }, []); // The empty dependency array [] ensures this effect runs only once when the component mounts

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleRenewalSubmit = () => {
    if (startDate && endDate) {
      setShowConfirmation(true);
    } else {
      alert('Please select both start and end months for renewal.');
    }
  };

  const handleConfirmation = () => {
    // Handle the renewal logic here, e.g., sending the selected start and end months to the server.
    // You can replace the following alert with your actual logic.
    alert(`Renewal selected from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`);
    setShowConfirmation(false);
    setRen(false); // Close the initial renewal alert
  };

  return (
    <>
      <LayoutUser />
      <div className="renewal-policy-container">
        <h1>Insurance Renewal Policy</h1>
        <p>Hello, {user.username}! You can renew your insurance policy by selecting start and end months below:</p>
        <div className="date-picker-container">
          <div className="date-picker">
            <label>Start Month:</label>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              showMonthYearPicker
              dateFormat="MM/yyyy dd"
            />
          </div>
          <div className="date-picker">
            <label>End Month:</label>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              showMonthYearPicker
              dateFormat="MM/yyyy dd"
            />
          </div>
        </div>
        <button className="renew-button" onClick={handleRenewalSubmit}>
          Renew Insurance
        </button>
        {showConfirmation && (
          <div className="confirmation">
            <span className="popup-close" onClick={() => setShowConfirmation(false)}>
              &times;
            </span>
            <p>Are you sure you want to renew insurance from {startDate.toLocaleDateString()} to {endDate.toLocaleDateString()}?</p>
            <div className="popup-buttons">
              <button onClick={handleConfirmation}>Yes</button>
              <button onClick={() => setShowConfirmation(false)} className="no-button">
                No
              </button>
            </div>
          </div>
        )}
      </div>
      {ren && (
        <div className="renewal-alert">
          <div className="renewal-alert-content">
            <p>{`Hello, ${user.username}! You Have Only Three Months Left For Your Insurance Renewal!!`}</p>
            <button className="ok-button" onClick={() => setRen(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default User;
