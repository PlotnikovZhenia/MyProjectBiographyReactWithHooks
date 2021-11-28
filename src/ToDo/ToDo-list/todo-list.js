import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.scss';

const TodoList= ({ todos,onDeleted,changeItemDone }) => {
  const elements = todos.map((item, index) => {
    const { id, ...itemProps } = item;
    return (
      <tr key={id} className="table-group-item">
        <TodoListItem {...itemProps } onDeleted={()=>onDeleted(id)} changeItemDone={()=>changeItemDone(id)} index={index} />
      </tr>
    );
  });
  return (
   <table className="table-group">
    <tbody>
      { elements }
    </tbody>
    </table>
  );
};

export default TodoList;
