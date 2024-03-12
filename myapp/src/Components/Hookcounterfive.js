import React, { useEffect, useState } from 'react';

function Hookcounterfive() {
    const [count, setCount] = useState(0);
    const[name,setname] = useState('')

    useEffect(() => {
        console.log('updateing')
        document.title = `${count} times`;
    },[count]);

    return (
        <div>
            <input type='text' value={name} onChange={e=>setname(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click me {count}</button>
        </div>
    );
}

export default Hookcounterfive;
