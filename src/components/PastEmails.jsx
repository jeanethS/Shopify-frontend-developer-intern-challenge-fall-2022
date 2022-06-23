import React from "react";

const PastEmails = (props) => {
  /*const renderPastPrompts = () => {
    return props.pastPrompts.map((prompt) => {
      return <p>{prompt}</p>;
    });
  };*/
  const renderPastResponses = () => {
    return props.pastResponses.map((response) => {
      return (
        <div>
          <h2>Response</h2>
          <p>{response}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Past Emails</h1>
      <div>
        <h2>Email</h2>
        {renderPastResponses()}
      </div>
    </div>
  );
};

export default PastEmails;
