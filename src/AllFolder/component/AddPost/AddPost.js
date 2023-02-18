import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {

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

    return (
        <div>
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
        </div>
    );
};

export default AddPost;