'use client';
import React from 'react'
import Layout from "../[components]/Layout/Layout"
import { TextField, Button, Card, Container, Heading, Flex } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { ref, push } from 'firebase/database';
import { database } from '../firebaseConfig';


export default function Register(){
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        try{
            const reference = ref(database, 'users'); 
            await push(reference, data);
            reset(); 
        } catch (error){
            console.error(error);
        }
    };

    return (
        <Layout className="flex flex-col">
            <Container size="1" pb="4" pt="9">
                <Flex direction="column" pb="4" gap="4">
                    <Heading>Create an account</Heading>
                </Flex>

                <Flex gap="4" direction="column">

                    {/* <Card > */}

                        <form 
                            className="flex flex-col space-y-4"
                            onSubmit={handleSubmit(onSubmit)}>
                            <TextField.Root 
                                size="3"
                                placeholder='Username' 
                                {...register('username', {
                                    required: "Username is required",
                                })} 
                                type="text"></TextField.Root>
                                {errors.username && (
                                    <div className="text-red-500">{errors.username.message}</div>
                                )}
                            <TextField.Root 
                                size="3"
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
                                size="3"
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
                            <Button variant="soft" size="3">Register</Button>
                        </form>
                    {/* </Card> */}
                </Flex>
            </Container>
            
        </Layout>
    )
    
}