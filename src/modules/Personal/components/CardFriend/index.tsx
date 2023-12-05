export const CardFriend: React.FC<ICardFriend> = ({ image, name }) => {
  return (
    <div className="flex flex-col gap-1 overflow-hidden">
      <img
        src={image}
        alt=""
        className="aspect-square h-full w-full rounded-lg object-cover"
      />
      <span className="text-13 font-semibold">{name}</span>
    </div>
  );
};
