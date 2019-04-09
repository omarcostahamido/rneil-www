import React from "react";
import Nav from "./Nav";

const Not_Found = () => {
  const handleGoBack = () => {
    history.back();
  };

  return (
    <section>
      <Nav color="fff" class="--dark-mode" page="not-found" />
      <div
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh"
        }}
      >
        <h1 style={{ paddingBottom: "1vw" }}>Sorry, couldn't find that page</h1>
      </div>
    </section>
  );
};

export default Not_Found;
