import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Home = () => {
    const { email } = useContext(authContext);
    // console.log(email);
    const [likeData, setLikeData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const handleRegister = data => {
        const imageData = data.image[0];

        const formData = new FormData();
        formData.append('image', imageData);

        const url = 'https://api.imgbb.com/1/upload?key=99f58a547dc4b1d269148eb1b605ef29'
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const postData = {
                        post: data.post,
                        imageData: imgData.data.url

                    }

                    fetch('http://localhost:5000/allPost', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(postData)

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            toast.success('post add success')
                            navigate('/media')

                        })
                }



            })

    }


    useEffect(() => {
        fetch('http://localhost:5000/homePageData')
            .then(res => res.json())
            .then(data => setLikeData(data))
    }, []);


    return (
        <div>
            <h1>home page</h1>

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text ">Image</span>
                        </label>
                        <input type="file"  {...register("image", {
                            required: 'Name is required',
                        })} className="input input-bordered w-full max-w-xs pt-2" />
                    </div>


                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea className="textarea py-8" {...register("post", {
                            required: 'email is required',
                        })} placeholder="Bio"></textarea>

                        {/* 
                        <input type="text" {...register("post", {
                            required: 'email is required',
                        })} className="input input-bordered w-full max-w-xs " /> */}

                    </div>

                    <input className='btn w-full' value='sign Up' type="submit" />

                </form>
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

