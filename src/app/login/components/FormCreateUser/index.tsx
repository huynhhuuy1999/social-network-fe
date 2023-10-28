import { Modal } from "@/components";
import { IFormCreateUser } from "@/models/login";
import Image from "next/image";
import React from "react";

export const FormCreateUser: React.FC<IFormCreateUser> = ({
  show,
  setShow,
}) => {
  return (
    <Modal show={show} setShow={(value) => setShow?.(value)}>
      <Image
        alt="avatar"
        width={160}
        height={160}
        className="rounded-t-lg aspect-square"
        src={"https://picsum.photos/id/1/200/300"}
      />
    </Modal>
  );
};
