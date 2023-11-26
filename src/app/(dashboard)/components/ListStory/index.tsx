import { CardStory } from "..";
import { ListStoryDummy } from "./dummy";

export const ListStory = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {ListStoryDummy.map((value, index) => {
        return (
          <CardStory
            name={value.name}
            thumnail={`https://picsum.photos/id/${index + 1}/100/200`}
            avatar={`https://picsum.photos/id/${index + 4}/200`}
            key={index}
          />
        );
      })}
    </div>
  );
};
