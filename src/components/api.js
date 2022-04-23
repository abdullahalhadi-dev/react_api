import React, { useEffect, useState } from 'react';

const API = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <div className='api'>
                {
                    users.map(collectData => {
                        return(
                            <div>
                                <ul>
                                    <li>{collectData.name.common}</li>
                                    <li>{collectData.flag}</li>    
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default API;