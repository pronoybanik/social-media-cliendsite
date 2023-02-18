import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Home = () => {
    // const { email } = useContext(authContext);
    // console.log(email);
    const [likeData, setLikeData] = useState([]);
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const navigate = useNavigate();


    


    useEffect(() => {
        fetch('http://localhost:5000/homePageData')
            .then(res => res.json())
            .then(data => setLikeData(data))
    }, []);


    return (
        <div>
            <h1>home page</h1>
            <div className='bg-lime-600 p-2  w-auto'>
                <p className='flex items-center justify-center'><FaPlus/> <Link className='ml-4' to={'/addPost'}> add post</Link></p>
            </div>

            

            {/* <h1 className='text-2xl ml-40 my-10 '>post....</h1> */}
            <div className='flex justify-center mx-40 my-6'>
                <div className='grid lg:grid-cols-1 md:grid-cols-1  sm:grid-cols-1 gap-7 '>
                    {
                        likeData.map(data => <div key={data?._id} className="card  bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>{data?.post}</p>
                            </div>
                            <figure><img className='h-96 w-full' src={data?.imageData} alt="Shoes" /></figure>
                        </div>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;

