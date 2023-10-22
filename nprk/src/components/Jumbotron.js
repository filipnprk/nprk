import React from 'react';

const Jumbotron = () => {

    const jumbotronStyle = {
        backgroundImage: `url('/images/nprkbackg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div style={jumbotronStyle} className='flex items-baseline justify-center h-screen'>
            <div className='text-center pt-4 mt-5'>
                <h1 className='text-4xl font-bold pb-5'> Welcome to Jumbotron Component </h1>
                <p className='text-lg mt-4'> A nicely designed jumbotron is a good jumbotron </p>
            </div>
        </div>
    );
};

export default Jumbotron;