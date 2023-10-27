import Image from "next/image";

export const CardUser = () => {
  return (
    <div className="w-[160px]">
      <div className="relative">
        <Image
          alt="avatar"
          width={160}
          height={160}
          className="rounded-t-lg aspect-square"
          src={"https://picsum.photos/id/1/200/300"}
        />
        <div className="absolute top-1 left-1 rounded-full bg-[#e3e3ee]/50 flex items-center justify-center w-3 aspect-square">
          <Image
            src={"/icon/close.png"}
            width={8}
            height={8}
            alt=""
            className="w-2 h-2"
          />
        </div>
      </div>
      <div className="rounded-b-lg p-3 w-full text-center bg-white">
        Ys - Ys
      </div>
    </div>
  );
};
