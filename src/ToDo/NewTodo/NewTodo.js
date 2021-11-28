import React,{useState} from'react';

const NewTodo=({addItem})=>{
    const [text,setText]=useState('');
    const textInput=(event)=>{
        setText(event.target.value);
    }
const pushItem=(event)=>{
    addItem(text);
    setText('');
}
    return(
    <>
        <input type="text" value={text} placeholder="добавить" onChange={textInput}/>
        <button onClick={pushItem} >
            Добавить пункт
        </button>
    </>
    )
}


export default NewTodo;