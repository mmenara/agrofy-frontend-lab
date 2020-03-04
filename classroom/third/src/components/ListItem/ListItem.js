import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  return <li key={props.item}>
    {props.item}
    <input type='checkbox'></input>
  </li>;
}

export default ListItem;
