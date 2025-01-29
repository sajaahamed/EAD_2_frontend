import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigationbar from '../src/Components/Navigationbar'
import Item_list from '../src/Components/Item_list'



import './App.css'
import Carsoul from '../src/Components/Carsoul';



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

        <div >
        <Navigationbar/>
        <Item_list/> 
        
        <Carsoul/>
         </div>

    );
}

export default App;



