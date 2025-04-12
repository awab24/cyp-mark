    import React, { useEffect, useState } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import './SellMainHome.css'; // Importing the CSS file for hover styles
    import { useNavigate } from 'react-router-dom';
    import axios from 'axios'
    import { Button } from 'react-bootstrap';

    function BuyMainHome() {
    const navigate = useNavigate();
    const [permission, setPermission] = useState(false);
    ///-/-//-///-
    let token;
    const tokenString = localStorage.getItem('clientToken');
    const tokenObject = JSON.parse(tokenString);
    token = tokenObject?.token;
    if (!token) {
        token = tokenObject;
    }

    //-/-/-/-/
    // Safely retrieve and parse the token

    try {
        // Try to parse only if tokenString exists
        if (tokenString) {
        tokenObject = JSON.parse(tokenString);
        token = tokenObject?.token; // Safely access token
        }
    } catch (error) {
        console.error('Error parsing token:', error);
    }

    useEffect(() => {
        const tokenString = localStorage.getItem('clientToken');
        let token;
        
        try {
        const tokenObject = JSON.parse(tokenString);
        token = tokenObject?.token || tokenObject; // Fallback in case the structure is different
        } catch (error) {
        console.error('Error parsing token:', error);
        }
    
        if (token) {
        const fetchPermission = async () => {
            try {
            const response = await axios.get(
                'http://localhost:3000/api/endpoints/verifyClient',
                {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                }
            );
            setPermission(response.data.permission);
            } catch (err) {
            console.error('Error fetching permission:', err);
            }
        };
        fetchPermission();
        } else {
        console.error('No valid token found');
        }
    }, []);
    

    return (
        <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
    {
    permission ? (<>
    <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-3 col-sm-6 my-3">
            <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('/rent-appart')}>
                Rent an Apartment
            </button>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
            <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('/rent-car')}>
                Rent a Car
            </button>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
            <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('/buy-car')}>
                buy a Car
            </button>
            </div>
  
            <div className="col-md-3 col-sm-6 my-3">
            <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('/buy-position')}>
                buy Position in an Apartment
            </button>
            </div>
        </div>
    </>) : (<Button onClick={() => navigate('/auth')}>sign up/in</Button>)
    }
        
        </div>
    );
    }

    export default BuyMainHome;

