import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login_page from './Pages/Login_page';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <div >        
            <Login_page />
        </div>
    );
}

export default App;

