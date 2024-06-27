import { WobbleCard } from '@/components/wobble-card';
import React from 'react'
import Image from 'next/image';

export default function ChatbotCard() {
  return (
      <div className="md:w-5/6 w-full  mb-24 p-1 border-2 border-muted/60 rounded-3xl bg-violet-900/40">
          <WobbleCard containerClassName="col-span-1  min-h-[300px] lg:col-span-3 rounded-3xl bg-violet-900 border-2 border-neutral-900/70  lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm  flex flex-col gap-8">
                  <div className="flex flex-col gap-2 pb-12">
                      <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-3xl font-bricolage lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                          Chatbot
                      </h2>
                      <p className=" max-w-[26rem] text-left font-inter tracking-tight leading-normal text-sm  md:text-base/6 text-neutral-200">
                          Prototype, customize, and deploy a customer facing chatbot in minutes. Use
                          cases including customer support, onboarding flow, lead collection, and
                          white-glove advisory.
                      </p>
                  </div>
              </div>
              <Image
                  src="https://ik.imagekit.io/omraval18/axRwBiy92gHkKFro5BhkJyMv2o_4l_qefwRe.png?updatedAt=1719315944592"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute scale-75 -right-10 md:-right-[40%] lg:-right-[20%] -bottom-24 md:-bottom-20object-contain rounded-t-lg"
              />
          </WobbleCard>
      </div>
  );
}
