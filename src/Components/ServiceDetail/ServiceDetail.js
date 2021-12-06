import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

   const ServiceDetails = () => {
    const {serviceID} = useParams();
    const [servicess,setServicess] = useState([]);
    const [details, setDetails]= useState([]);
    useEffect(()=>{
        fetch('/output.JSON')
        .then(res =>res.json())
        .then( data => setDetails(data))
        },[]);
        const item= details?.find(pd=>pd.key == serviceID);
        return (
        <div>
            <h1>  Name : {item?.name}</h1>
            <img src= {item.img}/>
             <p> {item.description}</p>

        </div>
    );
};

export default ServiceDetail;
