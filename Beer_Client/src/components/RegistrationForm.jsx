import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import styles from './BeerTinder.module.css';


export default function RegistrationForm(){
    const [formState,setFormState]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]:value
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        axios.post('http://localhost:8000/api/users',formState, {withCredentials:true})
        
        .then(()=>navigate('/beers'))
        .catch(console.log);
    }


    return(
        <div className={styles.beerForm}>

            <form onSubmit={handleSubmit}>
            <div className={styles.box1}>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} />
                </div>
                <div className={styles.box1}>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} />
                </div>
                <div className={styles.box1}>
                    <label>email:</label>
                    <input type="text" name="email" value={formState.email} onChange={handleChange} />
                </div>
                <div className={styles.box1}>
                    <label>Password:</label>
                    <input type="password" name="password" value={formState.password} onChange={handleChange} />
                </div>
                <div className={styles.box1}>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formState.confirmPassword} onChange={handleChange} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );


}