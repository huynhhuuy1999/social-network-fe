"use client";
import Image from "next/image";
import { CardAddUser, CardUser } from "./components";
import React, { useState } from "react";

const Login = () => {
  const [accounts, setAccount] = useState<number[]>([1]);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center bg-[#f0f2f5] h-[100vh] w-full px-[10%]">
      <div className="w-[50%]">
        <Image
          src={"https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"}
          alt="logo fb"
          height={accounts.length ? 70 : 106}
          width={accounts.length ? 212 : 321}
        />
        {accounts.length ? (
          <div className={`ml-[20px] `}>
            <p className="text-[24px] leading-[28px] text-[#1c1e21] font-[500]">
              Recent logins
            </p>
            <span className="text-[#606770] text-[15px] leading-[24px] mb-6 block">
              Click your picture or add an account.
            </span>
            <div className="flex gap-x-4 gap-y-3 flex-wrap">
              {Array.from({ length: 5 }, (k, v) => {
                return <CardUser key={v} userName="ys-ys" numNotiUnSeen={2} />;
              })}
              <CardAddUser />
            </div>
          </div>
        ) : (
          <h2 className="text-[24px] leading-[28px] ml-[30px]">
            Facebook helps you connect and share with the people in your life.
          </h2>
        )}
      </div>
      <div>
        <div
          className="rounded-lg border-none flex flex-col items-center pb-6 pt-[15px] px-7 bg-white"
          style={{
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
          }}
        >
          <input
            type="text"
            className="rounded-[6px] text-[17px] px-[14px] py-[16px] w-[330px] mb-[10px] border-[#dddfe2] focus:outline-[#1b74e4] caret-[#1b74e4] border shadow-md shadow-[#e7f3ff]"
            placeholder="Email address or phone number"
          />
          <div className="relative">
            <input
              type={`${isShowPass ? "text" : "password"}`}
              className="rounded-[6px] text-[17px] px-[14px] py-[16px] w-[330px] mb-[15px] border-[#dddfe2] focus:outline-[#1b74e4] caret-[#1b74e4] border shadow-md shadow-[#e7f3ff]"
              placeholder="Password"
            />
            <Image
              src={`/icon/${isShowPass ? "show.png" : "eye.png"}`}
              width={26}
              height={26}
              alt=""
              className="absolute top-[14px] right-2 cursor-pointer"
              onClick={() => setIsShowPass(!isShowPass)}
            />
          </div>

          <button className="bg-[#1877f2] border-none rounded-[6px] text-[20px] px-0 py-py-[20px] w-[332px] leading-[48px] text-white font-bold cursor-pointer">
            Login
          </button>
          <span className="cursor-pointer hover:underline text-[#1877f2] font-[500] mt-4">
            Forgotten password?
          </span>
          <hr className="w-[100%] h-[1px] bg-[#dddfe2] my-[10px]" />
          <button className="rounded-[6px] border-none text-[17px] leading-[48px] py-0 px-4 bg-[#42b72a] text-white font-bold my-[10px]">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
