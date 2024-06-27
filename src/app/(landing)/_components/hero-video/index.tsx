import { SparklesCore } from '@/components/sparkles';
import React from 'react'
import Image from 'next/image';
import { TextureButton } from '@/components/texture-button';
import { Play } from 'lucide-react';

export default function HeroVideo() {
  return (
      <div className="relative w-full md:px-4  ">
          <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={1}
              particleDensity={100}
              className="w-full h-1/4 absolute -top-10 z-10"
              particleColor="#FFFFFF"
          />

          <div className="w-full md:h-96 h-24  blur-[72px] md:blur-[80px] left-0 right-0 rounded-full backdrop-blur-lg z-0 bg-gradient-to-b from-violet-700 to-black absolute top-0 "></div>

          <div className="relative  bg-gradient-to-b mx-6 z-20  from-violet-900 via-black to-slate-900 rounded-lg md:rounded-3xl p-[1px]">
              <div className="bg-background md:rounded-3xl  ">
                  <React.Suspense fallback={<div className="size-full aspect-video bg-muted"></div>}>
                      <Image
                          src={
                              "https://ik.imagekit.io/omraval18/vectorshift_uVsHhmusZ.png?updatedAt=1719217893158"
                          }
                          alt="VectorShift"
                          width={2048}
                          height={2048}
                          loading="eager"
                          className="md:rounded-3xl rounded-lg aspect-video "
                      />
                  </React.Suspense>
              </div>
          </div>
          <div>
              <TextureButton
                  variant={"accent"}
                  size={"icon"}
                  className="absolute top-0 left-0  z-20 right-0 bottom-0 border-none m-auto max-w-10 max-h-10"
              >
                  <Play className="ml-[2px] fill-violet-100 text-violet-100" strokeWidth={1.5} />
              </TextureButton>
          </div>
      </div>
  );
}
