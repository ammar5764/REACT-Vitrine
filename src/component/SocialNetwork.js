import React from 'react';

const SocialNetwork = () => {
    const anim = () => {
        const icons = document.querySelectorAll('.social-network a');//pour ne prendre que les a du social network
        icons.forEach((link) => {
            link.addEventListener('mouseover', (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px,${e.offsetY - 13}px)`
            })//on a mis un padding assez haut pour avoir un mouseover quand on s'approche
            link.addEventListener('mouseleave', () => {
                link.style.transform = "";
            });
        });
    }
    return (
        <div className='social-network'>
            <ul className="content">
                <a href=" https://fr-fr.facebook.com/" target='_blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}> <li ><i className="fa-brands fa-facebook-f"></i> </li></a>
                <a href=" https://twitter.com/login" target='_blank' rel='noopener noreferrer' className='hover'> <li ><i className="fa-brands fa-twitter">    </i>  </li></a>
                <a href="https://www.instagram.com/?hl=fr" target='_blank' rel='noopener noreferrer' className='hover'><li ><i className="fa-brands fa-instagram"></i></li></a>
            </ul>
        </div>
    );
};

export default SocialNetwork;


