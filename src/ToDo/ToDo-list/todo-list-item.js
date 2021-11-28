import React, { useState } from 'react';
import './todo-list-item.scss';

const TodoListItem = ({ label, index, important ,done,onDeleted,changeItemDone }) => {
  const [stateimportant,setImportant]=useState(important);
  let classNameDone='';
  if(done){
    classNameDone='done';
  }else if(stateimportant){
    classNameDone='important';
  }else{
    classNameDone='';
  }
  return (
    <>
            <td>
            {index+1}.
            </td>
            <td>
            <span className={classNameDone}>
              {label}
            </span>
            </td>
            <td>
            <input onClick={onDeleted} type="image"  className="btn_delete" name="image" src="Delete.svg" alt="Delete"></input>
            </td>
            <td>
            <input onClick={changeItemDone} type="image" className="btn_delete" name="image" src="Done.svg" alt="Done"></input>
            </td>
            <td>
            <input onClick={()=>setImportant(!stateimportant)} type="image" className="btn_attention" name="image" src="Attention.svg" alt="Attention"></input>
            </td>
    </>
  );
};

export default TodoListItem;
