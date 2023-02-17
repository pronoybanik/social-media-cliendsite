import React, { useEffect, useState } from 'react';
import { Fa500Px } from "react-icons/fa";
import { Link } from 'react-router-dom';


const MediaPage = () => {

    const [media, setMedia] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getAllPost')
            .then(res => res.json())
            .then(data => setMedia(data))
    }, []);



    return (
        <div >
            <h1>Media Page </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  ml-8 py-10'>
                {
                    media?.map(data => <div  key={data._id} >
                        <div className="card w-96 h-96 bg-base-100 shadow-xl">
                            <figure><img className='w-96 h-72' src={data?.imageData} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    News Details
                                </h2>
                                <p>{
                                    data?.post?.length > 50 ?
                                        <p>{data?.post.slice(0, 50) + '...'} <Link className='font-bold' to={`/postDetails/${data?._id}`}>Details</Link></p>
                                        :
                                        <p>{data?.post}</p>
                                }</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MediaPage;



