import Image from "next/image";

export const CardAddUser = () => {
  return (
    <div className="w-[160px] cursor-pointer shadow-[0_0_0_1px_#dddfe2] hover:shadow-[0_1px_8px_5px_#dddfe2] transition-all duration-200  hover:transition-all hover:duration-200 ease-out rounded-lg">
      <div className="relative w-[160px] h-[160px] flex items-center justify-center bg-[#f5f6f7] rounded-t-lg">
        <Image src={"/icon/svg/plus.svg"} width={48} height={48} alt="icon" />
      </div>
      <div className="rounded-b-lg p-3 w-full text-center bg-white text-[#1877f2]">
        Add Account
      </div>
    </div>
  );
};
