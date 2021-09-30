import React from 'react';

const Home = () => {
    const img = 'https://i2-prod.ok.co.uk/incoming/article20050544.ece/ALTERNATES/s615/4_Nandos.jpg'
    return (
        <div className='container m-auto text-center mt-5'>
            <h2 className='p-2 mb-3'>WellCome To MealDb Website</h2>
            <img className='img-fluid img-thumbnail' src={img} alt=".." />
        </div>
    );
};

export default Home;