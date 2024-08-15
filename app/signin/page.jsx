'use client';
import React from 'react'
import Layout from "../[components]/Layout/Layout"
import Link from "next/link";
import { TextField, Button, Card, Container, Heading, Flex } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { ref, push, query, get, orderByChild, equalTo } from 'firebase/database';
import { database } from '../firebaseConfig';

export default function Signin() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = async (data) => {
        try{
            const reference = ref(database, 'users'); 
            //const emailQuery = query(reference, orderByChild('email'), equalTo(data.email));
            const snapshot = await get(reference);

            if(snapshot.exists()){
                const users = snapshot.val();
                let userFound = null;
                Object.keys(users).forEach(userId => {
                    if (users[userId].email === data.email) {
                      userFound = users[userId];
                    }
                  });

                if(userFound){
                    const isPasswordValid = (data.password === userFound.password) ? true : false;
                    if(isPasswordValid){
                        console.log('User signed in successfully:', userFound);
                        alert('Signed in successfully.');
                    }
                    else{
                        alert('Invalid password.');
                    }
                }
                else{
                    alert('User not found.');
                }
                
            }
            
        } catch (error){
            console.error(error);
        }
        reset();
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
                                placeholder='Email' 
                                {...register('email', {
                                    required: "Email is required",
                                })} 
                                type="text"></TextField.Root>
                                {errors.email && (
                                    <div className="text-red-500">{errors.email.message}</div>
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
                                <Button variant="classic" size="3" type="submit">Sign in</Button>
                            </Flex>
                        </form>
                    {/* </Card> */}
                </Flex>
            </Container>
            
        </Layout>
    )
    
}