import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://spooky-catacombs-20536.herokuapp.com/services')
        .then(res  => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className="">
            <p className="text-3xl font-semibold text-center">Our <span className="text-green-600">Services</span></p>
            <div className="container grid grid-rows-1 md:grid-cols-4 gap-2">
                {
                    services.map(service => <Service service={service} key={service._id} />)
                }
            </div>
        </div>
    );
};

export default Services;