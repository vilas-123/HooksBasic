import React, { useState, useEffect } from 'react';

function Hookmouse() {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("Logged mouse position");
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log('useEffect is called');
        window.addEventListener('mousemove', logMousePosition);

    }, []); 

    return (
        <div>
            X-{X} Y-{Y}
        </div>
    );
}

export default Hookmouse;
