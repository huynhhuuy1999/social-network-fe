import { CardUserMess, SideBar } from "..";
import { listUserMess } from "./dummy";

export const SideBarRight = () => {
  return (
    <SideBar>
      <div className="mt-2 flex items-center justify-between">
        <div>Người liên hệ</div>
        <div className="flex items-center gap-1">
          <div className="flex aspect-square w-8 cursor-pointer items-center justify-center rounded-full hover:bg-hover-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#CCCCCC]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex aspect-square w-9 cursor-pointer items-center justify-center rounded-full hover:bg-hover-primary">
            <div className="aspect-square h-[4px] rounded-full bg-primary-text" />
            <div className="mx-[3px] aspect-square h-[4px] rounded-full bg-primary-text" />
            <div className="aspect-square h-[4px] rounded-full bg-primary-text" />
          </div>
        </div>
      </div>
      <div>
        {listUserMess.map((value, index) => {
          return (
            <CardUserMess
              name={value.name}
              key={index}
              avatar={`https://picsum.photos/id/${index + 1}/200`}
              haveStory={value.haveStory}
            />
          );
        })}
      </div>
    </SideBar>
  );
};
