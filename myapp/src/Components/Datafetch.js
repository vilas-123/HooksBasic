import React, { useEffect, useState } from 'react';

function Datafetch() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState('');
    const [idfrombuttonclick , setIdburron] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
            .then(response => response.json())
            .then(data => {
                console.log('hello', data);
                setPost(data);
            
            })
            .catch(error => console.log("Error", error));
            
    }, [idfrombuttonclick]); 
    

    return (
        <div>
            <div>
                 
                <input type='text' value={id} onChange={e => setId(e.target.value)} />
                <input type='text' value={id} onChange={e => setId(e.target.value)} />
                <button type='button' onClick={()=>setIdburron(id)} >Get Post</button>
            </div>
            <div>
               {post.title}
            </div>
        </div>
    );
}

export default Datafetch;
