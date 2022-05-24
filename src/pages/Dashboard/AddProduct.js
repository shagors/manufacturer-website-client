import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey='dbc1132a143866016b0f2959d03a6274';


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                const img = result.data.url;
            }
        })
    };


    return (
        <div>
            <h2 className='text-xl text-purple-500 font-bold mt-5'>Add Product</h2>
            <div className='flex justify-center items-center'>
                <form className='w-80 mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <input type="text" placeholder="Product Name" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("name", { 
                            required: {
                                value: true,
                                message: 'Product Name is required'
                            }
                            })}/>
                        <label value="" className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input type="text" placeholder="Product Description" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("description", { 
                            required: {
                                value: true,
                                message: 'Product Description is required'
                            }
                            })}/>
                        <label value="" className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input type="number" placeholder="Product Quantity" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("quantity", { 
                            required: {
                                value: true,
                                message: 'Please add Available Quantity'
                            }
                            })}/>
                        <label value="" className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input type="number" placeholder="Minimum Order" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("minimumOrder", { 
                            required: {
                                value: true,
                                message: 'Minimum Order is required'
                            }
                            })}/>
                        <label value="" className="label">
                            {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input type="number" placeholder="Product Price / unit" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("price", { 
                            required: {
                                value: true,
                                message: 'Price is required'
                            }
                            })}/>
                        <label value="" className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input type="file"
                        className="input input-bordered w-full max-w-xs" 
                        {...register("image", { 
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                            })}/>
                        <label value="" className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs btn-primary mt-3' type="submit" value='Add Product'/>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;