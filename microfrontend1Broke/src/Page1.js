import React from "libs/react";
import { useHistory } from "libs/react-router-dom";

const Page1 = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return <button onClick={handleClick}>from remote1: GO HOME</button>;
};

export default Page1;
