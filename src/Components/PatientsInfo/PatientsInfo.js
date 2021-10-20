import React from 'react';
import useAuth from '../../hooks/useAuth';
import "./PatientsInfo.css"
const PatientsInfo = () => {
    const {user}= useAuth();
    return (
       
        <div className="userinfo-design">
            <h5>Name: {user.displayName}</h5>
            <p>Contact Information: {user.email}</p>
        </div>
    );
};

export default PatientsInfo;