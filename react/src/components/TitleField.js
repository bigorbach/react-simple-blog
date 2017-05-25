import React from 'react';

const TitleField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        type='text'
        onChange={props.handlerFunction}
        value={props.content}
      />
    </label>
  );
}

export default TitleField;
