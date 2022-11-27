import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='spinner-overlay'>
      <div class="lds-spinner">
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
        <div className='1'></div>
      </div>
    </div>
  );
};

export default LoadingScreen;