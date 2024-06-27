import BlurIn from '@/components/blur-in-text';
import { Button } from '@/components/ui/button';
import React from 'react'

export default function HeroTitle() {
  return (
      <div className="md:py-20 relative mt-16 py-10 px-4 md:px-6 flex flex-col items-center gap-12 justify-center max-w-full md:max-w-5xl">
          <div className=" text-center flex flex-col items-center gap-4  font-gambarino">
              <div className="flex  flex-col tracking-tight items-center gap-1 text-center font-base">
                  <BlurIn word="The Don't Code" className=" text-3xl md:text-7xl font-semibold" />
                  <BlurIn
                      word="Ultimate AI Automation Platform"
                      className=" text-3xl md:text-7xl font-semibold"
                  />
              </div>
              <p className="text-neutral-500 font-base font-geist text-center text-sm md:text-base md:max-w-3xl">
                  An integrated framework of no-code, low-code, and out of the box generative AI
                  solutions to build AI search engines, assistants, chatbots, and automations.{" "}
              </p>
          </div>
          <div className="relative flex z-10 items-center gap-4 md:w-full justify-center pb-10">
              <Button
                  variant={"default"}
                  className="rounded-full bg-violet-700 hover:bg-violet-800 text-white  font-base text-normal "
              >
                  <p className="font-bricolage font-base text-normal ">Get Started</p>
              </Button>
              <Button
                  variant={"outline"}
                  className="rounded-full bg-muted/40 text-white font-geist font-base text-normal  "
              >
                  <p className="font-bricolage font-base text-normal ">Talk to Us</p>
              </Button>
          </div>
      </div>
  );
}
