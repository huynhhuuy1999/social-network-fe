"use client";
// Library
import React, { useState } from "react";
//Component
import { ImagePost } from "../ImagePost";

export const ListImage = () => {
  const [testList, setTestList] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  return (
    <div className="mt-2 max-h-[70vh] overflow-hidden">
      {testList && testList.length === 1 ? (
        <ImagePost src={`https://picsum.photos/400/500`} isBgColor />
      ) : testList.length === 2 ? (
        <div className="flex max-h-[70vh] gap-[2px]">
          {testList.map((_, index) => {
            return (
              <div className="aspect-square grow" key={index}>
                <ImagePost src={`https://picsum.photos/id/${index}/400/500`} />
              </div>
            );
          })}
        </div>
      ) : testList.length === 3 ? (
        <div className="h-[70vh] overflow-hidden">
          <div className="h-[35vh] w-full">
            <ImagePost src={`https://picsum.photos/id/0/400/500`} />
          </div>
          <div className="mt-[1px] flex h-[35vh] gap-[2px]">
            {testList.slice(1).map((_, index) => {
              return (
                <div className="aspect-square max-h-[35vh] grow" key={index}>
                  <ImagePost
                    src={`https://picsum.photos/id/${index + 1}/400/500`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : testList.length === 4 ? (
        <div className="h-[70vh] overflow-hidden">
          <div className=" flex h-[35vh] flex-wrap gap-[2px]">
            {testList.map((_, index) => {
              return (
                <div
                  className="aspect-square max-h-[35vh] w-[calc(50%-1px)]"
                  key={index}
                >
                  <ImagePost
                    src={`https://picsum.photos/id/${index}/400/500`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="max-h-[70vh] overflow-hidden">
            <div className="flex h-[35vh] gap-[2px]">
              {testList.slice(0, 2).map((_, index) => {
                return (
                  <div className="aspect-square max-h-[35vh] grow" key={index}>
                    <ImagePost
                      src={`https://picsum.photos/id/${index}/400/500`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="relative mt-[1px] flex gap-[2px]">
              {testList.slice(2, 5).map((_, index) => {
                return (
                  <div className="aspect-square max-h-[35vh] grow" key={index}>
                    <ImagePost
                      src={`https://picsum.photos/id/${index + 2}/400/500`}
                    />
                  </div>
                );
              })}
              {testList.length > 5 ? (
                <div className="absolute right-0 top-0 flex aspect-square w-[calc(calc(100%/3)-1px)] items-center justify-center bg-hover-primary font-bold">
                  <span className="text-[25px]">+{testList.length - 5}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
