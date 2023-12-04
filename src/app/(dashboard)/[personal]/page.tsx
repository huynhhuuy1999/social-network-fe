import { PersonalModule } from "@/modules/Personal";
import React from "react";

interface IPersonal {
  params: {
    personal: "string";
  };
}

const Personal: React.FC<IPersonal> = ({ params }) => {
  return (
    <div>
      <PersonalModule />
    </div>
  );
};

export default Personal;
