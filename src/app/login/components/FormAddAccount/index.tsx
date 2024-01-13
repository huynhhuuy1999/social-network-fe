import { InputCustom, Modal } from "@/components";
import { IFormAddAccount } from "@/models/login";

export const FormAddAccount: React.FC<IFormAddAccount> = ({
  show,
  setShow,
}) => {
  return (
    <Modal show={show} setShow={(value) => setShow?.(value)}>
      <div className="w-[366px] pb-4">
        <h3 className="p-4 text-center text-[20px] leading-[24px] text-dark-primary">
          Log in to Facebook
        </h3>
        <hr />
        <div className="mt-3 px-4">
          <InputCustom
            placeholder="Email address or phone number"
            classNames="h-[51px] bg-white px-4"
          />
          <InputCustom
            type="password"
            placeholder="Password"
            classNames="mt-3 h-[51px] bg-white px-4"
          />
        </div>
        <div className="my-3 flex items-center px-4">
          <input
            type="checkbox"
            id="Remember"
            className="h-5 w-5 rounded-[6px]"
          />
          <label
            htmlFor="Remember"
            className="ml-3 text-[15px] leading-[20px] text-[#606770]"
          >
            Remember password
          </label>
        </div>
        <button className="ml-4 h-10 w-[calc(100%-32px)] rounded-[6px] bg-[#1877f2] font-bold text-white">
          Login
        </button>
        <span className="mt-4 block cursor-pointer text-center text-[17px] leading-[20px] text-[#1877f2]">
          Forgotten password?
        </span>
      </div>
    </Modal>
  );
};
