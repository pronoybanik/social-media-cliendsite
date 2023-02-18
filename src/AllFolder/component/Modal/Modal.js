import React from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({ mobileProps, setMobileBooking }) => {

    const { name, email, address, university, _id } = mobileProps;
    // console.log(mobileProps);


    const handleAboutDetails = event => {
        event.preventDefault()

        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const address = from.address.value;
        const university = from.university.value;

        const list = {
            name,
            email,
            address,
            university
        }

        console.log(list);


        fetch(`http://localhost:5000/updateAbout/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(list)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMobileBooking(null)
                if (data?.modifiedCount > 0) {
                    toast.success('user update')
                    console.log(data);
                }
            });

        console.log(list);

    }



    return (
        <div>

            <input type="checkbox" id="about-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleAboutDetails}>
                    <div className="modal-box">
                        <label htmlFor="about-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input type="text" name='name' placeholder="Type here" defaultValue={name} className="input input-bordered w-full text-black mt-6" />
                        <input type="text" name='email' placeholder="Type here" defaultValue={email} className="input input-bordered w-full text-black mt-2" />
                        <input type="text" name='address' placeholder="Type here" defaultValue={address} className="input input-bordered w-full text-black mt-2" />
                        <input type="text" name='university' placeholder="Type here" defaultValue={university} className="input input-bordered w-full text-black mt-2" />
                        <input type="submit" htmlFor="about-modal" className='btn w-1/2 ml-24 mt-2 text-warning' />

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Modal;