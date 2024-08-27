import React from "react";
/* eslint-disable react/prop-types */


const Alert = (props) => {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.message}
      </div>
    )
  );
};

export default Alert;
