import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (

        <div className="container hover">

            <Link to="/login" >
                <button className='sign-in'>   Sign In   </button>
            </Link>
            <Link to="/register" >
                <button className='sign-up'>  Sign Up  </button>
            </Link>

        </div>

    );
};

export default SignIn;