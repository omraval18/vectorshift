import { Button } from '@/components/ui/button';
import React from 'react'

export default function FooterCTASection() {
  return (
      <section className="relative mx-auto  bg-grid-large-white/[0.015] mt-16 max-w-full p-6 pb-12 pt-20 lg:px-8">
          <div
              aria-hidden="true"
              className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,#9333ea_50%,rgba(0,0,0,0)_100%)]"
          ></div>
          <div
              aria-hidden="true"
              className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#09090b_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] md:max-w-[600px]"
          ></div>
          <div className="relative isolate  ">
              <div
                  className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                  aria-hidden="true"
              >
                  <div
                      className="aspect-[1108/632] w-[69.25rem] max-h-96  flex-none bg-gradient-to-r from-purple-500 to-indigo-800 opacity-20 overflow-hidden"
                      style={{
                          clipPath:
                              "polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)",
                      }}
                  ></div>
              </div>
              <div className="mx-auto max-w-xl text-center">
                  <h2 className="text-5xl font-gambarino text-center leading-tight">
                      Get Started Today
                  </h2>

                  <div className="mt-12 flex items-center justify-center">
                      <Button
                          className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
                          data-state="closed"
                          variant={"ghost"}
                      >
                          <span className="absolute inset-0 overflow-hidden rounded-full">
                              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(147,51,234,0.6)_0%,rgba(147,51,234,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                          </span>
                          <div className="relative font-bricolage z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                              Get Started
                          </div>
                          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-purple-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                      </Button>
                  </div>
              </div>
          </div>
      </section>
  );
}
