import React from 'react';
import background from '../images/backgrd.jpeg';




function Home() {
  return (
    <div
      style={{
        top:'-5 rem',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        height: '100vh',  
        width: '100vw',
        margin: '0',
        paddingTop:'3rem'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '10px',color:'white' }}>Yucca Consulting Limited</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '50px', color:'white' }}>
        Cultivating a Sustainable World
      </h2>
       <p style={{ maxWidth: '600px', fontSize: '1.2rem',color:'white' , margin: '50px auto 0',textAlign:"center"}}>
        Empowering Farmers. Growing Communities.<br></br>
        we provide  agricultural support from crop management to market access, 
        help smallholder farmers thrive .
      </p>

      <button
   
    style={{
      marginTop: '90px',
      backgroundColor: '#366000',
      color: 'white',
      padding: '10px 16px',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer'
    }}
  >
    Get Started
  </button>

    </div>

  );
}

export default Home;
