import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return (
    
        <div className="container">
        <div className='sign-in '>
            <ul>
            <NavLink to="#" className={(nav) => (nav.isActive ? " hover" : "hover")}>
                    <li>   Sign In   </li>
                </NavLink>
              
            </ul>
 
       
           
        </div>
        <div className="sign-up hover">
      <ul>
      <NavLink to="#" className={(nav) => (nav.isActive ? " hover" : "hover")}>
                    <li>  Sign Up  </li>
                </NavLink>
      </ul>
            
        </div>
        </div>
     
    );
};

export default SignIn;