import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq'>
            <div className='faq-item'>
                <h3>How React work?</h3>
                <p>It is maintained by Facebook. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
            </div>
            <div className='faq-item'>
                <h3>How useState work?</h3>
                <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Faq;