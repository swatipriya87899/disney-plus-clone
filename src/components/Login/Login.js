import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login_container'>
        <div className='cta'>
            <img src='/images/cta-logo-one.svg'></img>
            <a className='sign_up'>GET ALL THERE</a>
            <div className='description'>With Premier Access, Disney Plus members can pay $30 to unlock select movies while they're in theaters. "Jungle Cruise" was the most recent Premier Access title, but no additional releases have been announced. A Disney Plus subscription costs $8 a month or $80 a year</div>
            <img src='/images/cta-logo-two.png'></img>
        </div>
    </div>
  )
}

export default Login