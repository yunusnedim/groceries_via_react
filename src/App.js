import React, {useState} from 'react';

export default function Board() {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}
