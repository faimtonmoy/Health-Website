import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    
    // const [services, setService] = useState([]);
    // useEffect(()=>{
    //     fetch("output.json")
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
       
    // },[]);
    // const { serviceID } = useParams();
    // const findService= services.find(service=> console.log(service.id));
    
    return (
        <div>
            {/* <Container>
             <h5>{findService.name}</h5>
            </Container> */}

        </div>
    );
};

export default ServiceDetail;