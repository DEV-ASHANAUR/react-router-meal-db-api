import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const [loader,setLoader] = useState(true);
    let {itemName = ''} = useParams();
    useEffect(()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
        setLoader(false);
    },[itemName]);
   
    const img = 'https://cdn.dribbble.com/users/235730/screenshots/2936116/media/6bdaff8d9e15c7e4ca2a4c39b9ac6280.jpg?compress=1&resize=400x300';
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    !loader?
                    meals != null?meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>) : <div className='not-found'><img src={img} alt='..' /></div>
                    :<div className="not-found text-center text-primary mt-5">
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...
                    </div>
                
                }
            </div>
        </div>
    );
};

export default Meals;