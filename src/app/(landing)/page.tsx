import BlurIn from "@/components/blur-in-text";
import Code from "@/components/codeblock";
import MarqueeDemo from "@/components/marquee/marquee";
import { SparklesCore } from "@/components/sparkles";
import { TextureButton } from "@/components/texture-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {  ArrowUpRight, Bot, BrainCircuit, ChevronsUpDown, Dot,  MessageCircle, MoveUpRight, Play, PlayCircle, Workflow } from "lucide-react";
import Image from "next/image";
import FeatureGrid from "./_components/card-grid";
import { IntegrationsBeam } from "./_components/integrations-beam";
import { BentoCard } from "@/components/bento-grid";
import IconsFloat from "./_components/icons-float";
import { InputTyping } from "./_components/input-typing";
import { WobbleCard } from "@/components/wobble-card";
import WorkflowAutomationTabs from "./_components/workflow-automation-tabs";

import { OrbitingCirclesDemo } from "./_components/data-format-orbit";
import { StepCarousel } from "./_components/step-carousel";
import { FAQ } from "./_components/faq";
import { FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

import Grid from "./_components/enterprise-grid-2";

const code = `#This is from file pipeline.py

from vectorshift.node import *

from vectorshift.pipeline import *

file_node = InputNode(name='file_input', input_type='file')

model_text_node = TextNode(text='Describe this file to me.')



fileloader_node = FileLoaderNode (file_input=file_node.output())

llm_node = OpenAI_LLMNode(

    model='gpt-4.0-turbo',

    system_input=model_text_node.output(),

    prompt_input=fileloader_node.output()

)


output_node = OutputNode(

    name='my_output',

    output_type='text',

    input=llm_node.output()

)

`


export default function Home() {
  return (
      <main className="p-0 px-4 md:px-0 md:p-0 w-full flex flex-col items-center justify-center  ">
          <div className="md:py-20 relative mt-16 py-10 px-4 md:px-6 flex flex-col items-center gap-12 justify-center max-w-full md:max-w-5xl">
              <div className=" text-center flex flex-col items-center gap-4  font-gambarino">
                  <div className="flex  flex-col tracking-tight items-center gap-1 text-center font-base">
                      <BlurIn
                          word="The Don't Code"
                          className=" text-3xl md:text-7xl font-semibold"
                      />
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
          <div className=" relative w-full md:px-4  ">
              <SparklesCore
                  background="transparent"
                  minSize={0.2}
                  maxSize={1}
                  particleDensity={100}
                  className="w-full h-1/4 absolute -top-10 z-10"
                  particleColor="#FFFFFF"
              />

              <div className="w-full md:h-96 h-24  blur-[72px] md:blur-[120px] left-0 right-0   backdrop-blur-sm rounded-full z-0 bg-gradient-to-b from-violet-700 to-black absolute top-0 "></div>

              <div className="relative  bg-gradient-to-b mx-6 z-20  from-violet-900 via-black to-slate-900 rounded-lg md:rounded-3xl p-[1px]">
                  <div className="bg-background md:rounded-3xl  ">
                      <Image
                          src={
                              "https://ik.imagekit.io/omraval18/vectorshift_uVsHhmusZ.png?updatedAt=1719217893158"
                          }
                          alt="VectorShift"
                          width={2048}
                          height={2048}
                          className="md:rounded-3xl rounded-lg aspect-video "
                      />
                  </div>
              </div>
              <div>
                  <TextureButton
                      variant={"accent"}
                      size={"icon"}
                      className="absolute top-0 left-0  z-20 right-0 bottom-0 border-none m-auto max-w-10 max-h-10"
                  >
                      <Play
                          className="ml-[2px] fill-violet-100 text-violet-100"
                          strokeWidth={1.5}
                      />
                  </TextureButton>
              </div>
          </div>
          {/*  */}
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
                              VectorShift combines a user-friendly No-code interface with a robust
                              Code SDK. Effortlessly create applications using drag-and-drop, or
                              dive into coding with seamless IDE integration. Enjoy flexibility and
                              power, all in one platform.
                          </p>
                      </div>
                      <div className="flex-[0.5] max-h-lg max-w-full">
                          <MarqueeDemo />
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
          <div className="w-5/6 md:mt-48 mt-24 ">
              <div className="flex justify-center flex-col items-center gap-4">
                  <h3 className="text-3xl md:text-5xl font-gambarino text-center leading-tight">
                      Everything you need.
                      <br /> Nothing you don’t
                  </h3>
                  <p className="font-inter tracking-tight text-neutral-400 text-base md:text-lg font-light max-w-4xl text-center">
                      Live-sync, set up action based triggers (e.g., receive an email), and automate
                      actions (e.g., send a slack message) across your tool stack
                  </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center mt-8 max-w-5xl items-center gap-4 mb-24">
                  <BentoCard
                      name="Integrations and automations"
                      description="Live-sync, set up action based triggers (e.g., receive an email), and automate actions (e.g., send a slack message) across your tool stack"
                      background={
                          <IntegrationsBeam className="absolute opacity-75 right-2 top-4 h-[300px] w-[600px]  border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
                      }
                      href="/"
                      cta="Learn more"
                      Icon={Workflow}
                      className="md:flex-[0.5] min-h-[28rem] min-w-[20rem] "
                  />
                  <BentoCard
                      name="Large language models"
                      description="Access the latest models through the VectorShift platform"
                      background={<IconsFloat />}
                      href="/work/iot"
                      cta="Learn more"
                      Icon={BrainCircuit}
                      className="md:flex-[0.5] min-h-[28rem] min-w-[20rem]"
                  />
              </div>
          </div>

          <div className="md:w-5/6 w-full  md:mt-48 mt-24">
              <div className="w-full">
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
         
          <div className="md:w-5/6 w-full  mb-24 p-1 border-2 border-muted/60 rounded-3xl bg-violet-900/40">
              <WobbleCard containerClassName="col-span-1  min-h-[300px] lg:col-span-3 rounded-3xl bg-violet-900 border-2 border-neutral-900/70  lg:min-h-[600px] xl:min-h-[300px]">
                  <div className="max-w-sm  flex flex-col gap-8">
                      <div className="flex flex-col gap-2 pb-12">
                          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-3xl font-bricolage lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                              Chatbot
                          </h2>
                          <p className=" max-w-[26rem] text-left font-inter tracking-tight leading-normal text-sm  md:text-base/6 text-neutral-200">
                              Prototype, customize, and deploy a customer facing chatbot in minutes.
                              Use cases including customer support, onboarding flow, lead
                              collection, and white-glove advisory.
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
          <div className="md:w-5/6 flex flex-col  items-center justify-between gap-4 py-8">
              <h3 className="text-3xl font-bricolage text-left md:text-center font-semibold">
                  Workflow Automation
              </h3>
              <p className="text-lg font-normal tracking-tight leading-relaxed max-w-xs md:px-0 text-left md:text-center  font-geist text-neutral-400 md:max-w-3xl">
                  Automate the creation of marketing copy, personalized outbound emails, call
                  summaries, and graphics at scale.
              </p>
          </div>
          <div className="md:w-5/6 w-full mb-24 h-[28rem] overflow-hidden flex flex-col gap-8 md:p-1 p-0  rounded-3xl">
              <WorkflowAutomationTabs />
          </div>

          <div className=" md:w-5/6  w-full mb-24 h-full overflow-hidden flex flex-col items-center justify-center gap-8 p-1 rounded-3xl">
              <div className="flex flex-col gap-2 ">
                  <h3 className="text-5xl font-gambarino text-center leading-tight ">
                      Leverage AI across data of all formats
                  </h3>
                  <p className="text-lg font-light text-center font-inter tracking-tight leading-relaxed text-neutral-400 max-w-3xl">
                      Summarize and answer questions about documents, videos, audio files, and
                      websites. Analyze and compare documents seamlessly.
                  </p>
              </div>
              <OrbitingCirclesDemo />
          </div>

          <div className="w-5/6 mb-24 h-full flex flex-col gap-8 items-center">
              <div>
                  <h3 className="text-5xl font-gambarino text-center leading-tight ">
                      How it works
                  </h3>
              </div>
              <StepCarousel />
          </div>

          <div className="md:w-5/6 w-full  flex flex-col gap-8 items-center">
              <Grid/>
          </div>
          <div className="w-5/6 mb-24  h-full flex flex-col gap-8 items-center">
              <WobbleCard
                  containerClassName="col-span-1 relative lg:col-span-2 h-full md:bg-black bg-purple-900/40 min-h-[500px] lg:min-h-[300px]"
              >
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
          <div className="md:w-5/6 w-full mb-24 mt-24 h-full flex flex-col gap-24 items-center">
              <div>
                  <h3 className="text-5xl font-gambarino text-center leading-tight ">
                      Frequently Asked Questions
                  </h3>
              </div>
              <FAQ />
          </div>
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
                  {/* <svg
                      className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(40%_80%_at_center,black,transparent)]"
                      aria-hidden="true"
                  >
                      <defs>
                          <pattern
                              id="cta"
                              width="80"
                              height="80"
                              x="50%"
                              y="-1"
                              patternUnits="userSpaceOnUse"
                          >
                              <path d="M.5 200V.5H200" fill="none"></path>
                          </pattern>
                      </defs>
                      <rect width="100%" height="100%" stroke-width="0" fill="url(#cta)"></rect>
                  </svg> */}
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
          <footer className="px-8 w-full">
              <div className="w-full flex flex-col md:items-start items-center  gap-6 border-t py-8">
                  <div className="flex w-full justify-between items-center">
                      <div className="flex items-center gap-2 font-normal text-sm font-bricolage tracking-tight text-stone-300 hover:*:text-stone-400 ">
                          <p>© 2023 VectorShift Inc.</p>
                          <span className="hidden md:block">
                              <a href="/legal/privacy">Privacy Policy</a>
                          </span>
                          <span className="hidden md:block">
                              <a href="/legal/terms">Terms of Use</a>
                          </span>
                      </div>
                      <div className="flex items-center gap-4 *:text-lg *:text-stone-500 hover:*:text-stone-300">
                          <FaXTwitter />
                          <FaFacebook />
                          <FaLinkedin />
                      </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-4 text-base font-bricolage tracking-tight text-stone-300 font-base hover:*:text-stone-400">
                          <p className="text-sm  text-stone-300 ">
                              <a href="/legal/privacy">Docs</a>
                          </p>
                          <p className="text-sm  text-stone-300 ">
                              <a href="/legal/terms">Tutorials</a>
                          </p>
                          <p className="text-sm  text-stone-300 ">
                              <a href="/legal/terms">Blog</a>
                          </p>
                          <p className="text-sm  md:hidden text-stone-300 ">
                              <a href="/legal/terms">Terms of Use</a>
                          </p>
                      </div>
                      <div className="flex items-center gap-4 text-base font-bricolage tracking-tight text-stone-300 font-base hover:*:text-stone-400 ">
                          <p className="text-sm  text-stone-300 ">
                              <a href="/legal/privacy">Discord</a>
                          </p>
                          <p className="text-sm  text-stone-300 ">
                              <a href="/legal/terms">Contact Us</a>
                          </p>
                          <p className="text-sm  md:hidden text-stone-300 ">
                              <a href="/legal/terms">Privacy Policy</a>
                          </p>
                      </div>
                  </div>
              </div>
          </footer>
      </main>
  );
}
