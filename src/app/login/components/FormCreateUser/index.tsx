//Library
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
// Constants
import { MONTH } from "@/constants";
// Utils
import { createArrCustom } from "@/utils";
//Component
import { InputCustom, Loader, Modal, SelectCustom } from "@/components";
import { RadioCustom } from "..";
//types
import { IFormCreateUser } from "@/models/login";

export const FormCreateUser: React.FC<IFormCreateUser> = ({
  show,
  setShow,
  onSignUp,
  isLoading,
}) => {
  const initialValues = {
    email: "",
    firstName: "",
    gender: undefined,
    password: "",
    surname: "",
    day: "",
    month: "",
    year: "",
  };
  const yupObject = yup.object({
    email: yup.string().required(),
    firstName: yup.string().required(),
    surname: yup.string().required(),
    password: yup.string().required(),
    day: yup.string().required(),
    month: yup.string().required(),
    year: yup.string().required(),
    gender: yup.string().required(),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: yupObject,
    onSubmit: (values) => {
      const { day, email, firstName, gender, month, password, surname, year } =
        values;
      const birthDate = `${day}/${month}/${year}`;
      onSignUp &&
        onSignUp({
          birthDate,
          email,
          firstName,
          gender: Number(gender),
          password,
          surname,
        });
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  const { handleChange, errors, touched, handleSubmit, values, setFieldValue } =
    formik;

  return (
    <Modal show={show} setShow={(value) => setShow?.(value)}>
      <div className="w-[432px] py-4 sm:w-full">
        <div className="px-2.5">
          <h3 className="text-[32px] font-bold leading-[38px] text-[#1c1e21] sm:text-[28px]">
            Sign Up
          </h3>
          <span className="text-15 leading-[24px] text-[#606770]">
            {`It's quick and easy.`}
          </span>
        </div>

        <hr />

        <form onSubmit={handleSubmit}>
          <div className="px-2.5 py-3">
            <div className="flex gap-2">
              <InputCustom
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                classNames={`${
                  touched && errors && errors.firstName ? "border-error" : ""
                }`}
              />

              <InputCustom
                placeholder="Surname"
                name="surname"
                onChange={handleChange}
                value={values.surname}
                classNames={
                  touched && errors && errors.surname ? "border-error" : ""
                }
              />
            </div>
            <InputCustom
              classNames={`mt-2 ${
                touched && errors && errors.email ? "border-error" : ""
              }`}
              placeholder="Email address"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <InputCustom
              classNames={`mt-2 ${
                touched && errors && errors.password ? "border-error" : ""
              }`}
              placeholder="New password"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            <span className="mt-3 text-12 leading-[20px] text-[#606770]">
              Date of birth
            </span>
            <div className="flex gap-3">
              <SelectCustom
                name="day"
                options={Array.from({ length: 32 }, (v: number, k: number) => {
                  return {
                    label: k === 0 ? "Select day" : k,
                    value: k === 0 ? "" : k,
                  };
                })}
                classNames={`h-[39.6px] ${
                  touched && errors && errors.day ? "border-error" : ""
                }`}
                onChange={handleChange}
                value={values.day}
              />
              <SelectCustom
                name="month"
                options={MONTH.map((v, index) => {
                  return {
                    value:
                      v === "Select Month"
                        ? ""
                        : index < 10
                        ? `0${index}`
                        : index,
                    label: v === "Select Month" ? "Select Month" : v,
                  };
                })}
                classNames={`h-[39.6px] ${
                  touched && errors && errors.month ? "border-error" : ""
                }`}
                onChange={handleChange}
                value={values.month}
              />
              <SelectCustom
                name="year"
                options={createArrCustom(1993, 2023).map((v) => {
                  return {
                    value: !v ? "" : v,
                    label: !v ? "Select year" : v,
                  };
                })}
                classNames={`h-[39.6px] ${
                  touched && errors && errors.year ? "border-error" : ""
                }`}
                onChange={handleChange}
                value={values.year}
              />
            </div>
            <span className="mt-3 text-12 leading-[20px] text-[#606770]">
              Gender
            </span>
            <div className="flex w-full gap-3 ">
              <RadioCustom
                id="male"
                value={1}
                label="Male"
                name="gender"
                classNames={errors && errors.gender ? "border-error" : ""}
                onClick={(e: any) => {
                  setFieldValue("gender", e.target.value);
                }}
              />
              <RadioCustom
                id="female"
                value={2}
                label="Female"
                name="gender"
                classNames={
                  touched && errors && errors.gender ? "border-error" : ""
                }
                onClick={(e: any) => {
                  setFieldValue("gender", e.target.value);
                }}
              />
              <RadioCustom
                id="custom"
                value={3}
                label="Custom"
                name="gender"
                classNames={
                  touched && errors && errors.gender ? "border-error" : ""
                }
                onClick={(e: any) => {
                  setFieldValue("gender", e.target.value);
                }}
              />
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
            <button
              className={`${
                isLoading
                  ? "pointer-events-none cursor-not-allowed opacity-70"
                  : ""
              } flex h-9 w-[194px] items-center justify-center rounded-[6px] bg-[#00a400] text-[18px] font-bold text-white`}
              type="submit"
            >
              {isLoading ? (
                <>
                  <Loader />
                  <span className="ml-1">Sign Up</span>{" "}
                </>
              ) : (
                <span>Sign Up</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
// export default FormCreateUser;
