import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const AboutCard = ({ aboutData, refetch }) => {

    const { name, email, address, university } = aboutData;
    console.log(aboutData);
    const [mobileBooking, setMobileBooking] = useState([]);

    return (
        <div className='flex justify-center my-6 font-serif'>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">NAME: {name}</h2>
                    <p>EMAIL: {email}</p>
                    <p>ADDRESS: {address}</p>
                    <p>UNIVERSITY: {university}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="about-modal"
                            onClick={() => setMobileBooking(aboutData)}
                            className="btn btn-primary btn-sm">Edit</label>

                    </div>
                </div>
                <Modal
                    mobileProps={mobileBooking}
                    setMobileBooking={setMobileBooking} 
                ></Modal>
            </div>
        </div>
    );
};

export default AboutCard;