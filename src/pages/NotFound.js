import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFound-content'>
                <h2>ERREUR 404</h2>
            </div>
            <NavLink to='/'><h3>Retour a l'accueil</h3><i class="fa-solid fa-house"></i></NavLink>

        </div>
    );
};

export default NotFound;