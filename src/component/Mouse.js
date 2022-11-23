import React, { useEffect } from 'react';

const Mouse = () => {

    useEffect(() => {
        var cursor = document.querySelector('.cursor');

        window.addEventListener('mousemove', (e) => {
            cursor.style.top = e.y + 'px';
            cursor.style.left = e.x + 'px';
        });

        var allLinks = document.querySelectorAll('.hover');//recupere tous les liens cliquables grace a la classe que l'on leur a mis
        allLinks.forEach((link) => {
       
            link.addEventListener('mouseover', () => {
                cursor.classList.add('hovered')//on met un evenement a ces liens cliquables etlosque on les survolent on rajoute une class de retrecissement(hovered)a cursor
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.transition='.3s ease-out'
                cursor.classList.remove('hovered')
            });
        });


    }, [])
    return (
        <div>
            <span className="cursor"></span>
        </div>
    );
};

export default Mouse;