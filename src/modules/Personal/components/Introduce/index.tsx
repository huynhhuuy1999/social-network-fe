import Image from "next/image";

export const Introduce = () => {
  return (
    <div className="mt-2 rounded-lg bg-dark-primary p-3">
      <h3 className="text-[20px] font-bold">Giới thiệu</h3>
      <span className="block text-center text-14">Bé Phạm Minh Thư</span>
      <button className="my-2 h-9 w-full rounded-lg bg-hover-primary text-14 font-semibold text-primary-text">
        Chỉnh sửa tiểu sử
      </button>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Image
            src={"/icon/eduIcon.png"}
            alt=""
            width={20}
            height={20}
            style={{
              filter:
                "invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)",
            }}
            className="aspect-square h-5 w-5"
          />
          <span className="text-14">
            Đã học tại Trường THPT Chuyên Lê Quý Đôn Ninh Thuận
          </span>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/icon/houseIcon.png"}
            alt=""
            width={20}
            height={20}
            style={{
              filter:
                "invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)",
            }}
            className="aspect-square h-5 w-5"
          />
          <span className="text-14">Sống tại Phan Rang Tháp Chàm</span>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/icon/locationIconBlack.png"}
            alt=""
            width={20}
            height={20}
            style={{
              filter:
                "invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)",
            }}
            className="aspect-square h-5 w-5"
          />
          <span className="text-14">Đến từ Phan Rang - Tháp Chàm</span>
        </div>
        <button className=" my-2 h-9 w-full rounded-lg bg-hover-primary text-14 font-semibold text-primary-text">
          Chỉnh sửa chi tiết
        </button>
      </div>
    </div>
  );
};
