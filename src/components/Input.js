import React from "react";

const Input = props => {
  return (
    <label>
      {props.label}

      {!props.isValid ? null : (
        <>
          <span className="erronName">{props.errorMessage}</span>
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
