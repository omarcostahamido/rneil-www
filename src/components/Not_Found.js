import React from "react";

const Not_Found = () => {
  const handleGoBack = () => {
    history.back();
  };

  return (
    <div>
      <h1>Sorry, couldn't find that page</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Not_Found;
