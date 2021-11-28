import React from 'react';
import './Information.scss';
const Information=()=>{
    return(
        <>
            <h4>Указатель:</h4>
            <div className="information_todo_delete">
                <img src="Delete.svg" alt="delete"/>
                <p>&rarr;</p>
                <p>&nbsp;</p>
                <p>удалить задачу;</p>
            </div>
            <div className="information_todo_done">
                <img src="Done.svg" alt="done"/>
                <p>&rarr;</p>
                <p>&nbsp;</p>
                <p>Выполненная задача;</p>
            </div>
            <div className="information_todo_attention">
                <img src="attention.svg" alt="attention"/>
                <p>&rarr;</p>
                <p>&nbsp;</p>
                <p>Важная задача;</p>
            </div>
            </>
    )
}

export default Information;