import React from 'react';
import './Person.css';

function randomAge(){
    return Math.floor(Math.random() * 30);
}

const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            {/* Two way binding exemple: */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;