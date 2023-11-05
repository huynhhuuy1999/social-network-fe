//Library
import Image from "next/image";
import React from "react";
// Constants
import { MONTH } from "@/constants";
// Utils
import { createArrCustom } from "@/utils";
//Component
import { Modal } from "@/components";
//types
import { IFormCreateUser } from "@/models/login";

export const FormCreateUser: React.FC<IFormCreateUser> = ({
  show,
  setShow,
}) => {
  return (
    <Modal show={show} setShow={(value) => setShow?.(value)}>
      <div>
        <h3>Sign Up</h3>
        <span>It's quick and easy.</span>
        <hr />
        <div>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <input type="text" />
          <input type="text" />
          <span>Date of birth</span>
          <div>
            <select name="" id="">
              {Array.from({ length: 31 }, (v, k) => k).map((value, i) => {
                return <option key={i}>{value}</option>;
              })}
            </select>
            <select name="" id="">
              {MONTH.map((val, k) => {
                return <option value={k}>{val}</option>;
              })}
            </select>
            <select name="" id="">
              {createArrCustom(1993, 2023).map(
                (value: number, index: number) => {
                  return <option key={index}>{value}</option>;
                },
              )}
            </select>
          </div>
          <span>Gender</span>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <span>
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </span>
          <span>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </span>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </Modal>
  );
};
