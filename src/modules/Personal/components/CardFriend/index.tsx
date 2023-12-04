export const CardFriend: React.FC<ICardFriend> = ({ image, name }) => {
  return (
    <div className="flex flex-col">
      <img
        src={image}
        alt=""
        className="aspect-square h-full w-full object-cover"
      />
      <span className="text-13 font-semibold">{name}</span>
    </div>
  );
};
