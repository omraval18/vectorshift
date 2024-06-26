import Marquee from '@/components/marquee';
import { cn } from '@/lib/utils';
import React from 'react'


const iconsOne = [
    {
        name: "aws",
        color: "text-blue-400",
        link: "https://ik.imagekit.io/omraval18/aws%201_8mUkcohX9.svg?updatedAt=1719264787173"
    },
    {
        name: "google",
        color: "text-orange-400",
        link: "https://ik.imagekit.io/omraval18/google-icon_JF_822tp5h.svg?updatedAt=1719262600149",
    },
    {
        name: "mistral",
        color: "text-red-600",
        link: "https://ik.imagekit.io/omraval18/mistral-ai-icon_JhZYmXhgOR.svg?updatedAt=1719262600120",
    },
    {
        name: "anthropic",
        color: "text-green-500",
        link: "https://ik.imagekit.io/omraval18/anthropic-icon%201%20(1)_MBfGyzY_h.svg?updatedAt=1719302845514"
    },
   
];

const iconsTwo = [
    {
        name: "openai",
        color: "text-green-600",
        link: "https://ik.imagekit.io/omraval18/openai-icon%201%20(2)_UgWWlxBNB.svg?updatedAt=1719302887526",
    },
    {
        name: "meta",
        color: "text-purple-600",
        link: "https://ik.imagekit.io/omraval18/meta-icon_IINk0EdMeq.svg?updatedAt=1719262600162",
    },
    {
        name: "huggingface",
        color: "text-gray-600",
        link: "https://ik.imagekit.io/omraval18/hugging-face-icon_JFPgp4NpI_.svg?updatedAt=1719262600308",
    },
];



export default function IconsFloat() {
  return (
      <div
          className={cn(
              "group relative h-full flex flex-col gap-6 justify-between overflow-hidden rounded-xl",
              // light styles
              "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              " max-w-lg bg-transparent py-16",
              "absolute opacity-85 right-2 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
          )}
      >
          <Marquee pauseOnHover className="[--duration:20s]">
              {iconsOne.map((icon) => (
                  <div className=" relative flex flex-row items-center gap-2" key={icon.name}>
                      <div className="border rounded-full p-3 flex justify-center items-center">
                          <img src={icon.link} className="size-14 fill-transparent " />
                      </div>
                  </div>
              ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:20s]">
              {iconsTwo.map((icon) => (
                  <div className="flex flex-row items-center gap-2" key={icon.name}>
                      <div className="border rounded-full p-3 flex justify-center items-center">
                          <img src={icon.link} className="size-16 " />
                      </div>
                  </div>
              ))}
          </Marquee>
      </div>
  );
}
