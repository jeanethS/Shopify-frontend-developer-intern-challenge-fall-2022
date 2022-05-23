import React from "react";
import PropTypes from "prop-types";

const PastEmails = (props) => {
  return (
    <div>
      <h1>Past emails</h1>
      <h3>Prompt</h3>
      <p>{props.pastPrompt}</p>
      <h3>Response</h3>
      <p>{props.pastResponse}</p>
    </div>
  );
};

PastEmails.propTypes = {};

export default PastEmails;
