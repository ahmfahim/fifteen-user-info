import React from 'react';
import './User.css';

const User = (props) => {
    const { name, img, email, salary} = props.userInfo;
    const handleDetails = props.handler;

    return (
            
        <div className="cart">
            <div className="userInfo">
                <p className="heading"></p>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>Email: {email}</h5>
                <h4>Salary:{salary}</h4>
            </div>
            <div onClick={() => handleDetails(props.userInfo)} className="content">
                <h1>Details</h1>
            </div>
        </div>

    );
};


export default User;