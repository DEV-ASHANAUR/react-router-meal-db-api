import React from 'react';
import { useHistory } from 'react-router';

const Meal = (props) => {
    // console.log(props.meal);
    const history = useHistory();
    const {idMeal,strMeal,strMealThumb,strInstructions} = props.meal;
    const handleDetails = () => {
        history.push(`/details/${idMeal}`);
    }
    return (
        <div className="col">
            <div className="card h-100">
            <img src={strMealThumb} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{strMeal}</h5>
                <p className="card-text">{strInstructions.slice(0,150)}..</p>
            </div>
            <div className="card-footer">
                <button onClick={handleDetails} className='btn btn-success m-auto d-block'>View Details</button>
            </div>
            </div>
        </div>
    );
};

export default Meal;