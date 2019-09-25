import React from "react";

const Input = props => {
  const type = props.type;
  return (
    <label>
      {props.label}
      <br />
      {props.errorName ? (
        <>
          <span className="erronName">{props.errorMessage}</span>
          <br />
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
