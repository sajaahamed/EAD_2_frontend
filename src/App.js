import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/messege')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Error fetching the API', error);
            });
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Front End and Spring Boot Back End Integration</h1>
            <p>Message from the backend: {message}</p>
        </div>
    );
}

export default App;

