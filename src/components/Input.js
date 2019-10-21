import React from "react";

const Input = props => {
  return (
    <label>
      {props.label}

      {props.isValid ? (
        <>
          <span className="erronName">{props.isValid}</span>
        </>
      ) : null}
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
