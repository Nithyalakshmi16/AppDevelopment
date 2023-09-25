import React from 'react';
import { Link } from 'react-router-dom';
import frantImage from '../image/frantimage.png'; // Corrected variable name

function Home() {
  return (
    <>
      {/* Display the image */}
      <img src={frantImage} alt="Frant Image" className="front-image" />

      <Link to='/Login' className='log_log'>Login</Link>
      <h3 className='frantquote'>"Explore options for health coverage."<br></br>
"Secure your health and well-being."</h3>
   <div class="square-box">
        <p class="frantpara">
        Health insurance also provides access to a network of healthcare providers and specialists, 
  ensuring timely and comprehensive medical attention. This network 
  includes hospitals, doctors, and clinics, enabling individuals to choose
   healthcare professionals and facilities that suit their needs.
        </p>
    </div>
    </>
  );
}

export default Home;
