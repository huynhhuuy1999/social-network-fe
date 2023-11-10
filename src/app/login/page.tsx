"use client";
import Image from "next/image";
import {
  CardAddUser,
  CardUser,
  FormAddAccount,
  FormCreateUser,
} from "./components";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";

const Login = () => {
  const [accounts, setAccount] = useState<number[]>([1]);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalAddUser, setShowModalAddUser] = useState<boolean>(false);
  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-[#f0f2f5] px-[10%]">
      <div className="w-[50%]">
        <Image
          src={"https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"}
          alt="logo fb"
          height={accounts.length ? 70 : 106}
          width={accounts.length ? 212 : 321}
        />
        {accounts.length ? (
          <div className={`ml-[20px] `}>
            <p className="text-[24px] font-[500] leading-[28px] text-[#1c1e21]">
              Recent logins
            </p>
            <span className="mb-6 block text-[15px] leading-[24px] text-[#606770]">
              Click your picture or add an account.
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {Array.from({ length: 5 }, (k, v) => {
                return <CardUser key={v} userName="ys-ys" numNotiUnSeen={2} />;
              })}
              <CardAddUser onClick={() => setShowModalAddUser(true)} />
            </div>
          </div>
        ) : (
          <h2 className="ml-[30px] text-[24px] leading-[28px]">
            Facebook helps you connect and share with the people in your life.
          </h2>
        )}
      </div>
      <div>
        <div
          className="flex flex-col items-center rounded-lg border-none bg-white px-7 pb-6 pt-[15px]"
          style={{
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
          }}
        >
          <input
            type="text"
            className="mb-[10px] w-[330px] rounded-[6px] border border-[#dddfe2] px-[14px] py-[16px] text-[17px] caret-[#1b74e4] shadow-md shadow-[#e7f3ff] focus:outline-[#1b74e4]"
            placeholder="Email address or phone number"
          />
          <div className="relative">
            <input
              type={`${isShowPass ? "text" : "password"}`}
              className="mb-[15px] w-[330px] rounded-[6px] border border-[#dddfe2] px-[14px] py-[16px] text-[17px] caret-[#1b74e4] shadow-md shadow-[#e7f3ff] focus:outline-[#1b74e4]"
              placeholder="Password"
            />
            <Image
              src={`/icon/${isShowPass ? "show.png" : "eye.png"}`}
              width={26}
              height={26}
              alt=""
              className="absolute right-2 top-[14px] cursor-pointer"
              onClick={() => setIsShowPass(!isShowPass)}
            />
          </div>

          <button className="py-py-[20px] w-[332px] cursor-pointer rounded-[6px] border-none bg-[#1877f2] px-0 text-[20px] font-bold leading-[48px] text-white">
            Login
          </button>
          <span className="mt-4 cursor-pointer font-[500] text-[#1877f2] hover:underline">
            Forgotten password?
          </span>
          <hr className="my-[10px] h-[1px] w-[100%] bg-[#dddfe2]" />
          <button
            onClick={() => setShowModal(true)}
            className="my-[10px] rounded-[6px] border-none bg-[#42b72a] px-4 py-0 text-[17px] font-bold leading-[48px] text-white"
          >
            Create new account
          </button>
        </div>
      </div>
      <FormCreateUser
        show={showModal}
        setShow={(value) => setShowModal(value)}
      />
      <FormAddAccount
        show={showModalAddUser}
        setShow={(value) => setShowModalAddUser(value)}
      />
    </div>
  );
};

export default Login;
