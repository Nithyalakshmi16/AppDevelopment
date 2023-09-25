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
  
  function Payment() {
    const user = useSelector(selectUser);
    const email = user.user && user.user.email ? user.user.email : 'Guest';
  
    // State for form fields
    const [formData, setFormData] = useState({
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      cvv: '',
      billingAddress: '',
    });
  
    // Handle form input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your payment processing logic here
      console.log(formData);
      // You can make an API call or perform other actions for payment processing
    };
  
    return (
        <>
        <LayoutUser/>
      <div className="home-pay">
        <div className="payment-form">
          <h2>Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardHolder">Card Holder Name</label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="billingAddress">Billing Address</label>
              <textarea
                id="billingAddress"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
      </>
    );
  }
export default Payment;


