import React, { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    let {idMeal} = useParams();
    const[mealDetails,setDetails] = useState([]);
    useEffect(()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then((res) => res.json())
        .then((data) => setDetails(data.meals));
    },[idMeal]);
    
    // console.log(mealDetails[0]?idMeal);
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Meal Id is {mealDetails[0]?.idMeal} */}
                <div className="col-md-8 img-area">
                    <img className='img-fluid img-thumbnail' src={mealDetails[0]?.strMealThumb} alt=".." />
                </div>
                <div className='col-md-4 text-capitalize'>
                    <h4 className='p-4'>Recepic Name : {mealDetails[0]?.strMeal}</h4>
                    <h4 className='p-4'>Ingredient1 : {mealDetails[0]?.strIngredient1}</h4>
                    <h4 className='p-4'>Ingredient2 : {mealDetails[0]?.strIngredient2}</h4>
                    <h4 className='p-4'>Ingredient3 : {mealDetails[0]?.strIngredient3}</h4>
                    <h4 className='p-4'>Ingredient4 : {mealDetails[0]?.strIngredient4}</h4>
                    <h4 className='p-4'>
                        <Link to='/meals' className="btn btn-success ">Back To Meals</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Details;