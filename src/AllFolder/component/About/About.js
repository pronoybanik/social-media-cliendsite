import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AboutCard from '../AboutCard/AboutCard';

const About = () => {

    const [about, setAbout] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/aboutDetails')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])

    console.log(about);



    // const { data: about, refetch } = useQuery({
    //     queryKey: ['about'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/aboutDetails');
    //         const data = await res.json()
    //         return (data)
    //     }
    // })

    return (
        <div>
            <h1>about section</h1>

            <div>
                {
                    about?.map(data => <AboutCard
                        data={data._id}
                        aboutData={data}
                        // refetch={refetch}
                    ></AboutCard>)
                }
            </div>
        </div>
    );
};

export default About;