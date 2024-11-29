import './Practice002.css';
import { useState } from 'react';

function ColorBox(props){

    return (
        <div className="box" style={{backgroundColor : props.bgColor}}>
        </div>
    );
}

export default ColorBox;