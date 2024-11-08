'use client';
import { TextField, Flex, Button, TextArea, DropdownMenu} from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import  Cookies from 'js-cookie';
import { doc, getDoc, updateDoc} from 'firebase/firestore';
import { database } from '../../firebaseConfig';

export default function profile(){
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const dropDownOptions = ["A1 (Beginner)", "A2 (Elemantry)", "B1 (Intermediate)", 
                                "B2 (Upper intermediate)", "C1 (Advanced)", "C2 (Proficient)"];

    //GET USER INFO
    const userID = Cookies.get('userID');
    const userDocRef = doc(database, 'users', userID);

    const fetchUserData = async () => {
        try{
            const docSnapShot = await getDoc(userDocRef);
            if(docSnapShot.exists()){
                const userData = docSnapShot.data();
                return userData;
            }
            else{
                console.log("No user document");
                return null;
            }
        } catch(error){
            console.error(error);
        }
    }

    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [wechat, setWechat] = useState("");
    const [level, setLevel] = useState("CEFR English Level");
    const [goal, setGoal] = useState("");

    useEffect(() => {
        // Fetch the user data when the component mounts
        fetchUserData().then((userData) => {
          if (userData) {
            setUsername(userData.username);
            setEmail(userData.email);
            setFirstname(userData.first_name);
            setLastname(userData.last_name);
            setAge(userData.age);
            setWechat(userData.wechat_id);
            setLevel(userData.cefr_level);
            setGoal(userData.goal);
          }
        });
      }, []);

    const handleSelect = async (option) => {
        setLevel(option); 
        if(userID){
            await updateDoc(userDocRef, {
                cefr_level: option,
            });
        }
    };

    const onSubmit = async (data) => {
        try{
            if(userID){
                const userData = {
                    first_name: data.firstname,
                    last_name: data.lastname,
                    age: data.age,
                    wechat_id: data.wechat, 
                    goal: data.goal,
                };
    
                await updateDoc(userDocRef, userData);
                alert("You've updated your profile.");
            }
            else{
                alert("Cannot find profile");
                console.log("there's no userID in cookies");
            }
           
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
            Profile Page
            <form 
                className="flex flex-col space-y-4 col-span-3"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <TextField.Root
                        size="3"
                        placeholder='Username'
                        disabled
                        value={username}
                    >
                        
                    </TextField.Root>
                    <TextField.Root
                        size="3"
                        placeholder='Email'
                        disabled
                        value={email}
                    >
                        
                    </TextField.Root>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <TextField.Root 
                        size="3"
                        placeholder='First Name' 
                        {...register('firstname', {
                            required: "First Name is required",
                        })} 
                        type="text"
                        defaultValue={firstname}></TextField.Root>
                        {errors.firstname && (
                            <div className="text-red-500">{errors.firstname.message}</div>
                        )}
                    <TextField.Root 
                        size="3"
                        placeholder='Last Name' 
                        {...register('lastname', {
                            required: "Last Name is required",
                        })} 
                        type="text"
                        defaultValue={lastname}></TextField.Root>
                        {errors.lastname && (
                            <div className="text-red-500">{errors.lastname.message}</div>
                        )}
                    <TextField.Root 
                        size="3"
                        placeholder='Age' 
                        {...register('age', {
                            required: "Age is required",
                        })} 
                        type="text"
                        defaultValue={age}></TextField.Root>
                        {errors.age && (
                            <div className="text-red-500">{errors.age.message}</div>
                        )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <TextField.Root 
                        size="3"
                        placeholder='WeChat ID' 
                        {...register('wechat', {
                            required: "WeChat ID is required",
                        })} 
                        type="text"
                        defaultValue={wechat}></TextField.Root>
                        {errors.wechat && (
                            <div className="text-red-500">{errors.wechat.message}</div>
                        )}

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button color="gray" variant="surface" size="3">
                                {level}
                                <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            {dropDownOptions.map((option, index) => (
                                <DropdownMenu.Item 
                                key={index}
                                onSelect={() => handleSelect(option)}
                                >
                                    {option}
                                </DropdownMenu.Item>
                            ))}
                            
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                </div>

                <div className="grid grid-cols-1 gap-4">
                    <TextArea
                        size="3"
                        placeholder='Please write down your study goals'
                        {...register('goal', {
                            required: "Study goal is required",
                        })} 
                        type="text"
                        defaultValue={goal}></TextArea>
                        {errors.goal && (
                             <div className="text-red-500">{errors.goal.message}</div>
                        )}
                </div>
                
                
                <Flex gap="4" direction="row" justify="end">
                    <Button variant="classic" size="3">Update Profile</Button>
                </Flex>
            </form>
        
        </div>
        
        
    )
};