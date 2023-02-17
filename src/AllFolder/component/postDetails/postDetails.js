import React from 'react';
// import { AiOutlineLike } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai"

const PostDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const { imageData, post, _id } = data[0];

    const handleLike = id => {
        fetch(`http://localhost:5000/users/like/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

    }

    return (
        <div>
            <h1>post details pagessss.</h1>

            <div className='bg-base-100'>
                <div className=" card card-side shadow-xl">
                    <figure><img className='w-3/4 ' src={imageData} alt="Movie" /></figure>
                    <div className="card-body mt-6">
                        <h2 className="card-title">All details</h2>
                        <p>{post}</p>

                    </div>


                </div>
                <div className="divider"></div>

                <div className='flex justify-evenly'>
                    <div className=' p-2' >
                        <button onClick={() => handleLike(_id)}>

                            <AiOutlineLike
                                size={30}
                                style={{ color: 'skyblue' }}
                            />
                        </button>
                    </div>
                    <div>
                        <p className='font-bold text-xl mt-2 font-serif'>comment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;


