import React, { useEffect } from "react";

const PastEmails = (props) => {
  /*const renderPastPrompts = () => {
    return props.pastPrompts.map((prompt) => {
      return <p>{prompt}</p>;
    });
  };*/
  const renderPastResponses = () => {
    return;
  };
  useEffect(() => {}, props);

  return (
    <div>
      <h1>Past Emails</h1>
      <div>
        {
          props.pastResponses.map((response) => {
            return (
              <div>
                <h2>Email</h2>
                <p>{response}</p>
              </div>
            );
          }) /*renderPastResponses()*/
        }
      </div>
    </div>
  );
};

export default PastEmails;
