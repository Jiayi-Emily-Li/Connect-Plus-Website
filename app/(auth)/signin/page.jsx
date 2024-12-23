'use client';
import React from 'react'
import Layout from "../../[components]/Layout/Layout"
import Link from "next/link";
import Cookies from 'js-cookie';
import { TextField, Button, Card, Container, Heading, Flex } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { auth } from '../../firebaseConfig';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Signin() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            alert("Signed in successfully.");
            Cookies.set("userID", user.uid, {expires: 7});
            router.push('/dashboard');
            
        } catch (error){
            if(error.code === 'auth/invalid-credential'){
                alert("The email and/or password you specified are not correct.");
            }
            else{
                console.error(error);
                alert("Account does not exist.");
            }
            
        }
    };

    return (
        <Layout className="flex flex-col items-center justify-center min-h-screen">
            <div  className="w-full max-w-md">

                <Container size="1" pb="4">
                    <Flex direction="column" pb="4" gap="4">
                        <Heading> Student Sign in</Heading>
                    </Flex>

                    <Flex gap="4" direction="column">
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
                                <Button variant="classic" size="3">Sign in</Button>
                            </Flex>

                            <Flex gap="4" direction="row" justify="end">
                                <Link href="/register" passHref >
                                    <div className="text-[#0000FF]">
                                        Are you a tutor? Please sign in here
                                    </div>
                                </Link>
                            </Flex>
                        </form>
                    </Flex>
                </Container>
            </div>
            
        </Layout>
    )
    
}