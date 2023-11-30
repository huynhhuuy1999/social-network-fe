import React from "react";
import { InfoDefault } from "./components";

interface IPersonal {
  params: {
    personal: "string";
  };
}

const Personal: React.FC<IPersonal> = ({ params }) => {
  console.log("first");
  return (
    <div>
      <InfoDefault />
    </div>
  );
};

export default Personal;
