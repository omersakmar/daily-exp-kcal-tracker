import React, { useEffect, useState } from "react";
import { getRandomName } from "../../helpers";

const WelcomeMessage = () => {
  const [userName, setUserName] = useState([]);

  const handleUserName = () => {
    let result = getRandomName();
    setUserName(result);
    console.log(userName);
  };
  useEffect(() => {
    handleUserName();
  }, []);

  return (
    <div>
      <h2> Hello, {userName}! </h2>
    </div>
  );
};

export default WelcomeMessage;
