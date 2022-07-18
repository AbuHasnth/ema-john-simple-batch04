import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/UseAuth';
import './Shipping.css'

const Shipping = () => {

  const {user} = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder='city' defaultValue="" {...register("city")} />
                <input placeholder='phoneNumber' defaultValue="" {...register("phoneNumber")} />
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
           </form>
        </div>
    );
};

export default Shipping;