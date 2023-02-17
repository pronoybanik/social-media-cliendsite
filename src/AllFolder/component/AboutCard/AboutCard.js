import React from 'react';

const AboutCard = ({ aboutData }) => {

    const { name, email, address, university } = aboutData;
    console.log(aboutData);

    return (
        <div className='flex justify-center my-6 font-serif'>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">NAME: {name}</h2>
                    <p>EMAIL: {email}</p>
                    <p>ADDRESS: {address}</p>
                    <p>UNIVERSITY: {university}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;