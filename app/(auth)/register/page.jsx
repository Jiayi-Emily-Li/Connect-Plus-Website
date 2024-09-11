'use client';
import React from 'react'
import Layout from "../../[components]/Layout/Layout"
import { TextField, Button, Card, Container, Heading, Flex } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import {  doc, setDoc} from 'firebase/firestore';
import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { database, auth } from '../../firebaseConfig';
import { useRouter } from 'next/navigation';
import { registerUserAction } from "@/data/actions/auth-actions";



export default function Register(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try{
            const userCredential =  await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            const userData = {
                email: data.email,
                password: data.password,
                username: data.username
            };
            const docRef = doc(database, "users", user.uid);
            await setDoc(docRef, userData);
            router.push('/dashboard');

        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert("The email address is already in use. Please try sign in with this email.");
            }
            else{
                console.error(error);
                alert("Error during creating an account, please try again.");
                const user = auth.currentUser;
                if(user){
                    try{
                        await deleteUser(user);
                        console.log("User deleted from Firebase due to Firestore failure");
                    } catch(deleteError){
                        console.error(deleteError);
                    }
                }
            }
        }
    };

    return (
        <Layout className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-md">

                <Container size="1" pb="4">
                    <Flex direction="column" pb="4" gap="4">
                        <Heading>Create an account</Heading>
                    </Flex>

                    <Flex gap="4" direction="column">

                        {/* <Card > */}

                            <form 
                                className="flex flex-col space-y-4"
                                action={registerUserAction}
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
                                <Button type="submit" variant="soft" size="3" >Register</Button>
                            </form>
                        {/* </Card> */}
                    </Flex>
                </Container>
            </div>
            
        </Layout>
    )
    
}