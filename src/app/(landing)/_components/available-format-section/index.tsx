import React from 'react'
import { OrbitingCirclesDemo } from '../data-format-orbit';

export default function AvailableFormatSection() {
  return (
      <div className=" md:w-5/6  w-full mb-24 h-full overflow-hidden flex flex-col items-center justify-center gap-8 p-1 rounded-3xl">
          <div className="flex flex-col gap-2 ">
              <h3 className="text-5xl font-gambarino text-center leading-tight ">
                  Leverage AI across data of all formats
              </h3>
              <p className="text-lg font-light text-center font-inter tracking-tight leading-relaxed text-neutral-400 max-w-3xl">
                  Summarize and answer questions about documents, videos, audio files, and websites.
                  Analyze and compare documents seamlessly.
              </p>
          </div>
          <OrbitingCirclesDemo />
      </div>
  );
}
