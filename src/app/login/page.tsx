"use client";
import { ToastEnums } from "@/constants/enum";
import { useAppSelector } from "@/hooks";
import { RegisterParams } from "@/models/login";
import { registerApi } from "@/services/auth";
import { isLoadingSelector } from "@/store/reducers/testSlice";
import { ShowNotificationToast } from "@/utils/toastNotify";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  CardAddUser,
  CardUser,
  FormAddAccount,
  FormCreateUser,
} from "./components";

const Login = () => {
  const loading = useAppSelector(isLoadingSelector);
  const [accounts, setAccount] = useState<number[]>([1]);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalAddUser, setShowModalAddUser] = useState<boolean>(false);
  const [data, setData] = useState({});
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);

  const onSignUp = async (value: RegisterParams) => {
    setLoadingRegister(true);
    try {
      const dataRegister = await registerApi(value);
      if (dataRegister.status === 200) {
        ShowNotificationToast({
          type: ToastEnums.success,
          message: "Register success",
        });
        setData(dataRegister);
      }
    } catch {
      setLoadingRegister(false);
    }
  };

  useEffect(() => {
    setLoadingRegister(false);
  }, [data]);

  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-[#f0f2f5] px-[10%] sm:block sm:px-4">
      <div className="flex justify-center pt-[10vh] md:hidden lg:hidden">
        <Image
          src={"https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"}
          alt="logo fb"
          height={106}
          width={321}
        />
      </div>

      <div className="w-[50%] sm:hidden">
        <Image
          src={"https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"}
          alt="logo fb"
          height={accounts.length ? 70 : 106}
          width={accounts.length ? 212 : 321}
        />
        {accounts.length ? (
          <div className={`ml-[20px]`}>
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
      <div className="">
        <div
          className="flex flex-col items-center rounded-lg border-none bg-white px-7 pb-6 pt-[15px] sm:px-3"
          style={{
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
          }}
        >
          <input
            type="text"
            className="mb-[10px] w-[330px] rounded-[6px] border border-[#dddfe2] px-[14px] py-[16px] text-[17px] text-dark-primary caret-[#1b74e4] shadow-md shadow-[#e7f3ff] focus:outline-[#1b74e4] sm:w-[90%] sm:px-3 sm:py-3 sm:text-15"
            placeholder="Email address or phone number"
          />
          <div className="relative flex w-full justify-center">
            <input
              type={`${isShowPass ? "text" : "password"}`}
              className="mb-[15px] w-[330px] rounded-[6px] border border-[#dddfe2] px-[14px] py-[16px] text-[17px] text-dark-primary caret-[#1b74e4] shadow-md shadow-[#e7f3ff] focus:outline-[#1b74e4]  sm:w-[90%] sm:p-3 sm:text-15"
              placeholder="Password"
            />
            {/* icon eye */}
            <Image
              src={`/icon/${isShowPass ? "show.png" : "eye.png"}`}
              width={26}
              height={26}
              alt=""
              className="absolute right-2 top-[14px] aspect-square cursor-pointer sm:right-[8%] sm:w-6"
              onClick={() => setIsShowPass(!isShowPass)}
            />
          </div>

          <button className=" w-[332px] cursor-pointer rounded-[6px] border-none bg-[#1877f2] text-[20px] font-bold leading-[48px] text-white sm:w-[90%] sm:text-15 sm:leading-[40px]">
            Login
          </button>
          <span className="mt-4 cursor-pointer font-[500] text-[#1877f2] hover:underline sm:text-14">
            Forgotten password?
          </span>
          <hr className="my-[10px] h-[1px] w-[100%] bg-[#dddfe2]" />
          <button
            onClick={() => setShowModal(true)}
            className="my-[10px] rounded-[6px] border-none bg-[#42b72a] px-4 py-0 text-[17px] font-bold leading-[48px] text-white sm:w-[90%] sm:text-15 sm:leading-[40px]"
          >
            Create new account
          </button>
        </div>
      </div>
      <FormCreateUser
        show={showModal}
        setShow={(value) => setShowModal(value)}
        onSignUp={onSignUp}
        isLoading={loadingRegister}
      />
      <FormAddAccount
        show={showModalAddUser}
        setShow={(value) => setShowModalAddUser(value)}
      />
    </div>
  );
};

export default Login;
