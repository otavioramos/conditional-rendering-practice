import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isUserRegistered 
      ? <Button buttonText="Login" /> 
      : <div>
          <Input type="password" placeholder="Confirm Password" />
          <Button buttonText="Register" /> 
        </div>
      }
    </form>
  );
}

export default Form;
