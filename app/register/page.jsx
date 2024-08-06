'use client'
import { useState } from 'react'
import Layout from "../[components]/Layout/Layout"

export default function Register(){
    
    const [person, setPerson] = useState({
        name: "",
        age: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPerson({
            ...person,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Layout>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border border-gray-300 rounded-md shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={person.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={person.age}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Register</button>
            </form>
        </Layout>
    )
     
}