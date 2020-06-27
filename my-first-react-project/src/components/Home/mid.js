import React from 'react';

const Mid = () => {
 const wrapper = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: '50%',
   width: '100%',
   padding: '80px',
   color: '#444',

 };
 const button = {
   padding: '20px 80px',
      border: 'none',
      borderRadius: '4px',
      background: '#1890ff',
      color: '#fff',
      fontSize: '19px',
      'font-weight': 'bold',
      'font-family': 'Poppins, sans-serif',
       cursor: 'pointer',
      'text-transform':'uppercase',
 };

 return (
   <div style={wrapper}>

     <button style={button}>Welcome to Travelers App</button>
   </div>
 );
};

export default Mid;
