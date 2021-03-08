import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import styles from './BeerTinder.module.css';

function BeerForm(props){
    const [name, setName] = useState(props.name);
    const [brewery, setBrewery] = useState(props.brewery);
    const [beerType, setBeerType] = useState(props.beerType);
    const [description, setDescription] = useState(props.description);
    const [abv, setAbv] = useState(props.abv);
    const [ibu, setIbu] = useState(props.ibu);
    const [availability, setAvailability] = useState(props.availability);
    const [image, setImage] = useState(props.image);
    const [tastingNotes, setTastingNotes] = useState(props.tastingNotes);
    
    const [errors, setErrors] = useState([]);

	function handleSubmit(event){
		console.log("handle submit")
		event.preventDefault();
		console.log('default prevented')
		axios[props.method](props.url, {
            name,
            brewery,
            beerType,
            description,
            abv,
            ibu,
            availability,
            image,
			tastingNotes,
		})
			// console.log("before .then")
			.then(() => navigate('/beers/list'))
			.catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
	}
	return(
		<div className={styles.beerForm}>
			{errors.map((err, idx) => 
                <p key = {idx} style = {{color: 'red'}}>{err}</p>)}
			<form onSubmit = {handleSubmit}>
				<div className={styles.box1}>
					<label> Beer Name: </label>
					<input
						value = {name}
						onChange = {event => setName(event.target.value)}
					/>
				</div>
                <div className={styles.box1}>
					<label> Brewery: </label>
					<input
						value = {brewery}
						onChange = {event => setBrewery(event.target.value)}
					/>
				</div>
                <div className={styles.box1}>
					<label> Beer Type: </label>
                    <select value={beerType} onChange={event =>setBeerType(event.target.value)}>
                        <option>Please Select</option>
                        <option value ="Cider"> Cider </option>
                        <option value ="India Pale Ale"> India Pale Ale </option>
                        <option value ="Lager"> Lager </option>
                        <option value ="Pale Ale"> Pale Ale </option>
                        <option value ="Pilsner"> Pilsner </option>
                        <option value ="Sour"> Sour </option>
                        <option value ="Stout"> Stout </option>
                        <option value ="Wheat"> Wheat </option>
                    </select>
				</div>
                <div className={styles.box1}>
					<label> Description: </label>
					<input
						value = {description}
						onChange = {event => setDescription(event.target.value)}
					/>
				</div>
                <div className={styles.box1}>
					<label> ABV: </label>
					<input
						value = {abv}
						onChange = {event => setAbv(event.target.value)}
					/>
				</div>
                <div className={styles.box1}>
					<label> IBU: </label>
					<input
						value = {ibu}
						onChange = {event => setIbu(event.target.value)}
					/>
				</div>
                <div className={styles.box1}>
					<label> Tasting Notes: </label>
					<input
						value = {tastingNotes}
						onChange = {event => setTastingNotes(event.target.value)}
					/>
				</div>
                <div className={styles.box1}>
					<label> Availability: </label>
					<input
						value = {availability}
						onChange = {event => setAvailability(event.target.value)}
					/>
				</div>
                <div className={styles.box1}>
					<label> Image: </label>
					<input
						value = {image}
						onChange = {event => setImage(event.target.value)}
					/>
				</div>
				<button> Submit! </button>
			</form>
		</div>
	)
}
export default BeerForm;