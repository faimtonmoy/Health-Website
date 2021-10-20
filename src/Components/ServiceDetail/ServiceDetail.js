import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    
    const { serviceID } = useParams();
    const [services, setService] = useState([]);
    const [found, setFound]= useState();
    useEffect(()=>{
        fetch("output.json")
        .then(res=>res.json())
        .then(data=>setService(data))
       
    },[]);
    
    useEffect(()=>{
        const findService= services?.find(service=> service.id == serviceID);
         setFound(findService);
    },[]);
    
    
    return (
        <div>
            <Container>
             <h5>{found?.name}</h5>
             <img src={found?.img} alt="" />
             <h5>{found?.description}</h5>
            </Container>

        </div>
    );
};

export default ServiceDetail;