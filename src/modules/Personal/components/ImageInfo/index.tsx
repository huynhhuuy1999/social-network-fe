export const ImageInfo = () => {
  return (
    <div className="mt-4 rounded-lg bg-hover-primary p-3">
      <div className=" mb-2 flex items-center justify-between">
        <span className="text-[20px] font-bold">Ảnh</span>
        <div className="flex h-9 cursor-pointer items-center rounded-lg px-3 hover:bg-hover-primary">
          <span className="text-[#5AA7FF] ">Xem tất cả ảnh</span>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 gap-1 overflow-hidden rounded-lg">
        {Array.from({ length: 9 }, (_, i) => {
          return (
            <div key={i} className="cursor-pointer overflow-hidden">
              <img
                src={`https://picsum.photos/id/${i + 1}/200`}
                alt=""
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
