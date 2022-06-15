import React from 'react';

const InputData = (props) => {
    return (
        <div>
            <button onClick={props.deleteAllCards}>Delete All</button>
            <input placeholder="title" onChange={(e)=>props.inputTitle(e.target.value)}/>
            <button onClick={() => props.createCard(props.title, props.status)}>Create Task</button>
        </div>
    );
};

export default InputData;