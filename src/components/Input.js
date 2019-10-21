import React from "react";

const Input = props => {
  return (
    <label>
      {props.label}

      {props.isAllValid ? null : (
        <>
          <span className="erronName">{props.isValid}</span>
        </>
      )}
      <input
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        name={props.name}
        id={props.id}
      />
    </label>
  );
};

export default Input;
