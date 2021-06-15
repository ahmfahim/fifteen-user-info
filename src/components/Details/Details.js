import React from 'react';

const Details = (props) => {
    const details= props.details;
    const salaryTotal = details.reduce((sum, user)=>sum + user.salary, 0);
    return (
        <div>
            <h1>Cleint:{details.length}</h1>
            <h2>Salary:{salaryTotal}</h2>
        </div>
    );
};

export default Details;