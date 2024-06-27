import Code from '@/components/codeblock';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WobbleCard } from '@/components/wobble-card';
import { code } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import React from 'react'

export default function DocsSection() {
  return (
      <div className="w-5/6 mb-24  h-full flex flex-col gap-8 items-center">
          <WobbleCard containerClassName="col-span-1 relative lg:col-span-2 h-full md:bg-black bg-purple-900/40 min-h-[500px] lg:min-h-[300px]">
              <div className="max-w-xs  flex flex-col gap-8 ">
                  <div className="flex flex-col gap-2">
                      <h2 className="text-left font-bricolage text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                          VectorShift Docs
                      </h2>
                      <p className=" text-left font-normal font-inter tracking-tight leading-normal text-base/6 text-neutral-300">
                          Unlock advanced features and detailed guides in our extensive
                          documentation.
                      </p>
                  </div>
                  <Button className="relative mt-2 max-w-52  inline-flex h-10 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full gap-1 w-full cursor-pointer items-center justify-center rounded-xl bg-black font-bricolage tracking-tightr px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          <p> Browse Documentation</p>
                          <ArrowUpRight className="size-4" />
                      </span>
                  </Button>
              </div>

              <div className="md:absolute relative z-20 md:-right-4 -right-10 lg:-right-[10%]  -bottom-10 object-contain rounded-2xl">
                  <div className="mt-8 md:w-full md:h-full max-w-60 max-h-60 md:max-w-full md:max-h-full gap-0  md:block">
                      <div className="bg-black rounded-lg  w-full">
                          <div className="flex items-center w-full">
                              <div className="flex  items-center px-4 gap-1">
                                  <span className="size-3 mt-2 rounded-full bg-muted hover:bg-red-500 ease-in delay-75"></span>
                                  <span className="size-3 mt-2 rounded-full bg-muted hover:bg-yellow-500 ease-in delay-75"></span>
                                  <span className="size-3 mt-2 rounded-full bg-muted hover:bg-green-500 ease-in delay-75"></span>
                              </div>
                              <Badge
                                  className="mt-2 text-xs tracking-tight font-inter font-medium text-neutral-200"
                                  variant={"secondary"}
                              >
                                  pipeline_setup.py
                              </Badge>
                          </div>

                          <Code language="python" code={code} />
                      </div>
                  </div>
              </div>
          </WobbleCard>
      </div>
  );
}
