import React, { useState } from 'react';
import './ToDoList.css';
import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button';

const ToDoList = () => {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState([
    'Wake up',
    'Eat breakfast',
    'Go to work'
  ]);

  const addNew = () => {
    setList([...list, newItem]);
    setNewItem('');
  };

  const validate = () => {
    return newItem && newItem.length > 3;
  };
 
  return (
    <div className="todo">
      <h2>To do list</h2>
      <ul>
        { list.map(item => <ListItem item={item}/>)}
      </ul>
      <div className="todo__add">
        <h3>Add new item:</h3>
        <input
          className="todo__input"
          type='text'
          value={newItem}
          onChange={event => setNewItem(event.target.value)} />
        <Button isDisabled={!validate()} callback={() => addNew()} label={'Add +'}></Button>
      </div>
    </div>
  );
}

export default ToDoList;
