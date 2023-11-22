import { Avatar } from "@/components";
import { ICardStory } from "@/models/components";

export const CardStory: React.FC<ICardStory> = ({ name, thumnail, avatar }) => {
  return (
    <div
      className={`relative h-[250px] cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${thumnail})`,
      }}
    >
      <Avatar
        src={avatar || ""}
        width={34}
        height={34}
        className="absolute left-3 top-3"
        borderWidth={4}
      />
      <div className="absolute bottom-2 left-2 max-w-[130px] truncate text-[0.8125rem] font-semibold">
        {name}
      </div>
    </div>
  );
};
