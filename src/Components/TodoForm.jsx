import React, { useState, useEffect } from 'react';
const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  useEffect(() => {
    if (props.edit) {
      setInput(props.edit.value);
    }
  }, [props.edit]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: props.edit ? props.edit.id : Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder={props.edit ? 'Update your item' : 'Add a To-Do'}
        value={input}
        name='text'
        onChange={handleChange}
        className='todo-input'
      />
      <button className='todo-button'>
        {props.edit ? 'Update TODO' : 'Add TODO'}
      </button>
    </form>
  );
};

export default TodoForm;
