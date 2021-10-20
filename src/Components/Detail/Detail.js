import React from 'react';

const Detail = (props) => {
    const{name}= props.service;
    return (
        <div>
            <h5>{name}</h5>
        </div>
    );
};

export default Detail;