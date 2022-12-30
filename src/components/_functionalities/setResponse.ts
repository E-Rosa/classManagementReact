import React from "react";

function setResponse(
  setterFunction: React.Dispatch<React.SetStateAction<string>>,
  responseValue: string
): void {
  setterFunction(responseValue);
  setTimeout(() => {
    setterFunction("");
  }, 1000);
}

export { setResponse };
