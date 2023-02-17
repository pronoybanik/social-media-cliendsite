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
    return (
        <div>
            <h1>about section</h1>

            <div>
                {
                    about.map(data => <AboutCard
                        data={data._id}
                        aboutData={data}
                    ></AboutCard>)
                }
            </div>
        </div>
    );
};

export default About;