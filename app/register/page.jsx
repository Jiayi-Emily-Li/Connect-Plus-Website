'use client';
import React from 'react'
import Layout from "../[components]/Layout/Layout"
import { TextField, Button } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'


export default function Register(){
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <Layout>
            <form 
                className="max-w-md space-y-3"
                onSubmit={handleSubmit((data) => console.log(data))}>
                <TextField.Root 
                    placeholder='Username' 
                    {...register('username', {
                        required: "Username is required",
                    })} 
                    type="text"></TextField.Root>
                    {errors.username && (
                        <div className="text-red-500">{errors.username.message}</div>
                    )}
                <TextField.Root 
                    placeholder='Password' 
                    {...register('password', {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        },
                    })} 
                    type="password"></TextField.Root>
                    {errors.password && (
                        <div className="text-red-500">{errors.password.message}</div>
                    )}
                <TextField.Root 
                    placeholder='Email' 
                    {...register('email', {
                        required: "Email is required",
                        validate: (value) => {
                            if(!value.includes("@")){
                                return "Email must include @";
                            }
                            return true;
                        },
                    })} 
                    type="text"></TextField.Root>
                    {errors.email && (
                        <div className="text-red-500">{errors.email.message}</div>
                    )}
                <Button>Register</Button>
            </form>
            
        </Layout>
    )
    
}