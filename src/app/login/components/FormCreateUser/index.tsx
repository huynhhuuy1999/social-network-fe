//Library
import Image from "next/image";
import React from "react";
// Constants
import { MONTH } from "@/constants";
// Utils
import { createArrCustom } from "@/utils";
//Component
import { InputCustom, Modal, SelectCustom } from "@/components";
//types
import { IFormCreateUser } from "@/models/login";
import { RadioCustom } from "..";

export const FormCreateUser: React.FC<IFormCreateUser> = ({
  show,
  setShow,
}) => {
  return (
    <Modal show={show} setShow={(value) => setShow?.(value)}>
      <div className="w-[432px] py-4">
        <div className="px-2.5 ">
          <h3 className="text-[32px] font-bold leading-[38px] text-[#1c1e21]">
            Sign Up
          </h3>
          <span className="text-[15px] leading-[24px] text-[#606770]">
            {`It's quick and easy.`}
          </span>
        </div>

        <hr />
        <div className="px-2.5 py-3">
          <div className="flex gap-2">
            <InputCustom placeholder="First name" />
            <InputCustom placeholder="Surname" />
          </div>
          <InputCustom
            classNames="mt-2"
            placeholder="Mobile number or email address"
          />
          <InputCustom classNames="mt-2" placeholder="New password" />
          <span className="mt-3 text-[12px] leading-[20px] text-[#606770]">
            Date of birth
          </span>
          <div className="flex gap-3">
            <SelectCustom
              name="day"
              options={Array.from({ length: 31 }, (v: number, k: number) => {
                return { label: k + 1, value: k + 1 };
              })}
              classNames="h-[39.6px]"
            />
            <SelectCustom
              name="month"
              options={MONTH.map((v) => {
                return { value: v, label: v };
              })}
              classNames="h-[39.6px]"
            />
            <SelectCustom
              name="year"
              options={createArrCustom(1993, 2023).map((v) => {
                return { value: v, label: v };
              })}
              classNames="h-[39.6px] "
            />
          </div>
          <span className="mt-3 text-[12px] leading-[20px] text-[#606770]">
            Gender
          </span>
          <div className="flex w-full gap-3 ">
            <RadioCustom id="male" value={1} label="Male" name="gender" />
            <RadioCustom id="famale" value={0} label="Famale" name="gender" />
            <RadioCustom id="custom" value={2} label="Custom" name="gender" />
          </div>
          <span className="mt-2 block text-[11px] text-[#777]">
            People who use our service may have uploaded your contact
            information to Facebook.{" "}
            <span className="cursor-pointer text-[#385898] hover:underline">
              Learn more.
            </span>
          </span>
          <span className="mt-2 block text-[11px] text-[#777]">
            By clicking Sign Up, you agree to our{" "}
            <span className="cursor-pointer text-[#385898] hover:underline">
              Terms
            </span>{" "}
            ,
            <span className="cursor-pointer text-[#385898] hover:underline">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="cursor-pointer text-[#385898] hover:underline">
              Cookies Policy
            </span>
            . You may receive SMS notifications from us and can opt out at any
            time.
          </span>
        </div>
        <div className="flex justify-center">
          <button className="h-9 w-[194px] rounded-[6px] bg-[#00a400] text-[18px] font-bold text-white">
            Sign Up
          </button>
        </div>
      </div>
    </Modal>
  );
};
