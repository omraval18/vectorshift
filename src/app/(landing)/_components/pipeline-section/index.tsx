import Code from '@/components/codeblock';
import { Badge } from '@/components/ui/badge';
import React from 'react'
import FeatureGrid from '../card-grid';
import { code } from '@/lib/constants';
import PipelineStepMarquee from '@/components/marquee/marquee';

export default function PipelineSection() {
  return (
      <div className=" mt-48 md:w-5/6 w-full bg-background md:px-0">
          <h1 className=" text-3xl md:text-5xl font-gambarino text-center leading-tight">
              An ecosystem to build, deploy,
              <br /> and manage AI applications
          </h1>
          <div className="bg-muted/40 p-5   md:p-10 w-full max-h-lg mt-12 border rounded-3xl">
              <div className="flex flex-col md:flex md:flex-row md:items-base gap-4 flex-wrap w-full items-center">
                  <div className="flex flex-col justify-start flex-[0.5] gap-4">
                      <h2 className="font-bricolage font-medium text-xl md:text-2xl w-full">
                          Empowering development with no-code and code SDK
                      </h2>
                      <p className="font-inter text-neutral-400 tracking-tight leading-normal md:text-base text-sm font-light">
                          VectorShift combines a user-friendly No-code interface with a robust Code
                          SDK. Effortlessly create applications using drag-and-drop, or dive into
                          coding with seamless IDE integration. Enjoy flexibility and power, all in
                          one platform.
                      </p>
                  </div>
                  <div className="flex-[0.5] max-h-lg max-w-full">
                      <PipelineStepMarquee />
                  </div>
              </div>
              <div className="mt-8 w-full h-full gap-0 hidden md:block">
                  <div className="bg-black rounded-lg  w-full">
                      <div className="flex items-center w-full">
                          <div className="flex  items-center px-4 gap-1">
                              <span className="size-3 mt-2 rounded-full bg-muted hover:bg-red-500 ease-in delay-75"></span>
                              <span className="size-3 mt-2 rounded-full bg-muted hover:bg-yellow-500 ease-in delay-75"></span>
                              <span className="size-3 mt-2 rounded-full bg-muted hover:bg-green-500 ease-in delay-75"></span>
                          </div>
                          <Badge
                              className="mt-2 text-xs font-inter tracking-tight font-medium text-neutral-200"
                              variant={"secondary"}
                          >
                              pipeline_setup.py
                          </Badge>
                      </div>

                      <Code language="python" code={code} />
                  </div>
              </div>
          </div>
          <div className="max-w-5xl mt-8 flex  justify-center mx-auto">
              <div className=" flex justify-center mx-auto">
                  <FeatureGrid />
              </div>
          </div>
      </div>
  );
}
