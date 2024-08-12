'use client';
import React from 'react'
import Layout from "../[components]/Layout/Layout"
import Link from "next/link";
import { TextField, Button, Card, Container, Heading, Flex } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { ref, push } from 'firebase/database';
import { database } from '../firebaseConfig';

export default function Signin() {
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
                    <Heading>Sign in</Heading>
                </Flex>

                <Flex gap="4" direction="column">

                    {/* <Card > */}

                        <form 
                            className="flex flex-col space-y-4"
                            onSubmit={handleSubmit(onSubmit)}>
                            <TextField.Root 
                                size="3"
                                placeholder='Username/Email' 
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
                            
                            <Flex gap="4" direction="row" justify="end">
                                <Link href="/register" passHref>
                                    <Button variant="soft" size="3">Create an account</Button>
                                </Link>
                                <Button variant="classic" size="3">Sign in</Button>
                            </Flex>
                        </form>
                    {/* </Card> */}
                </Flex>
            </Container>
            
        </Layout>
    )
    
}