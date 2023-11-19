import { ICardStory } from "@/models/components";
import Image from "next/image";

export const CardStory: React.FC<ICardStory> = ({ name, thumnail, avatar }) => {
  return (
    <div
      className={`relative h-[250px] cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${thumnail})`,
      }}
    >
      <div className="absolute left-3 top-3 aspect-square w-[44px] rounded-full">
        <div className="flex aspect-square w-[44px] items-center justify-center rounded-full bg-primary">
          <Image
            src={avatar || ""}
            alt=""
            width={36}
            height={36}
            className="aspect-square h-9 rounded-full"
          />
        </div>
      </div>
      <div className="absolute bottom-2 left-2 max-w-[130px] truncate text-[0.8125rem] font-semibold">
        {name}
      </div>
    </div>
  );
};
