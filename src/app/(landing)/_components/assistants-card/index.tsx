import React from 'react'
import { InputTyping } from '../input-typing';

export default function AssistantsCard() {
  return (
      <div className="md:w-5/6 w-full  md:mt-48 mt-24">
          <div className="w-full md:mb-16 mb-8">
              <div className="flex w-full justify-center ">
                  <h3 className="md:text-5xl text-3xl font-gambarino text-center leading-tight">
                      Leverage AI throughout your
                      <br />
                      company and products
                  </h3>
              </div>
          </div>
          <div className=" mb-24 overflow-hidden h-[42rem] mt-8 rounded-3xl border w-full dark:bg-black bg-white  dark:bg-grid-large-neutral-500/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-evenly">
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none  rounded-3xl inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <div className="flex flex-col items-center justify-around">
                  <div className="relative w-md p-2 rounded-xl mt-16 mx-8 bg-blue-600/40 border backdrop-blur-3xl">
                      <div className="bg-gradient-to-br w-full rounded-full h-full from-violet-700 via-blue-700 to-purple-500 absolute top-0 left-0 blur-3xl z-10"></div>
                      <div className="relative text-sm md:text-base w-full p-4 rounded-lg bg-blue-600 z-20">
                          Hey! How Can I Help You?
                      </div>
                  </div>

                  <div className="text-4xl mt-12 md:w-full max-w-xs md:max-w-full   md:relative z-20 py-8 flex flex-col">
                      <InputTyping />
                  </div>
              </div>
              <div className="mb-8 w-full md:px-16 px-8  z-20 bg-gradient-to-r from-black/20 via-black/40 to-black/60  rounded-3xl bottom-0 flex flex-col items-start gap-2 ">
                  {/* <Bot className="size-16 font-bold text-neutral-600/90" strokeWidth={1.5} /> */}
                  <h2 className="font-bricolage tracking-tight font-medium md:text-3xl text-2xl">
                      Assistants
                  </h2>
                  <p className="md:text-md text-base font-inter tracking-tight leading-normal text-neutral-400 font-light">
                      Integrate natural language search and live-sync databases such as Notion
                      <br />
                      and Airtable to automate information retrieval.
                  </p>
                  <div className="flex gap-4 items-center mt-2">
                      <img
                          src="https://ik.imagekit.io/omraval18/notion-icon_XBS4k3wdu.svg?updatedAt=1719313480274"
                          alt=""
                          className="size-8"
                      />
                      <img
                          src="https://ik.imagekit.io/omraval18/airtable_7JoRHOTNV.svg?updatedAt=1719313480309"
                          alt=""
                          className="size-8"
                      />
                      <div className="size-10 text-sm text-center font-medium flex justify-center items-center  p-4 rounded-md font-inter ">
                          +64
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
