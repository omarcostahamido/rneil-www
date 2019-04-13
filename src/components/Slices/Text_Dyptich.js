import React from "react";

const Text_Dyptich = props => {
  return (
    <section className="text-dyptich">
      <h2>{props.pullQuote}</h2>
      <p>{props.bodyCopy}</p>
    </section>
  );
};

export default Text_Dyptich;
