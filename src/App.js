import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (

      <div className="bg">
        <div className="Card">
          <div className='CardSubDiv'>
            <img src={logo} className='img' />
            <div className='textDiv'>
              <h2 className='createAccountText hoverable'>Create an account</h2>
            </div>
          </div>
          <div className='CardSubDiv'>
            <h1 className='title'>Sign Up</h1>
            <div className='inputCon'>
            <i className="fa fa-user hoverable inputLeftIcon"></i>
            <input placeholder='Your Name' className='inputField'/>
            <i className="fa fa-clipboard hoverable inputRightIcon"></i>
            </div>
            <div className='inputCon'>
            <i className="fa fa-lock hoverable inputLeftIcon"></i>
            <input placeholder='Your Password' className='inputField'/>
            <i className="fa fa-clipboard hoverable inputRightIcon"></i>
            </div>
            <div className='rememberMe'>
            <input type="checkbox" />&ensp;Remember Me
            </div>
            <div className='loginButton hoverable'>
              Log in
            </div>
            <div className='textDiv optionTextDiv'>
              <h2 className='optionText hoverable'>Or login with </h2><i className="fa fa-facebook-square  hoverable"></i><i className="fa fa-twitter-square hoverable"></i><i className="fa fa-google-plus-square hoverable"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}