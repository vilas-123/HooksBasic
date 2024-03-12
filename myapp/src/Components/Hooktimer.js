import React, { useEffect, useRef, useState } from 'react';

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    // Function to resume the timer
    const resumeTimer = () => {
        // Restart the interval
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1);
        }, 1000);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div>
            Hook Timer: {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Pause</button>
            <button onClick={resumeTimer}>Resume</button>
        </div>
    );
}

export default HookTimer;
