import { ICardAddUser } from "@/models/login";
import Image from "next/image";

export const CardAddUser: React.FC<ICardAddUser> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[160px] cursor-pointer rounded-lg shadow-[0_0_0_1px_#dddfe2] transition-all duration-200  ease-out hover:shadow-[0_1px_8px_5px_#dddfe2] hover:transition-all hover:duration-200"
    >
      <div className="relative flex h-[160px] w-[160px] items-center justify-center rounded-t-lg bg-[#f5f6f7]">
        <Image src={"/icon/svg/plus.svg"} width={48} height={48} alt="icon" />
      </div>
      <div className="w-full rounded-b-lg bg-white p-3 text-center text-[#1877f2]">
        Add Account
      </div>
    </div>
  );
};
