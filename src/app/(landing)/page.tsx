import BlurIn from "@/components/blur-in-text";
import Code from "@/components/codeblock";
import MarqueeDemo from "@/components/marquee/marquee";
import { SparklesCore } from "@/components/sparkles";
import { TextureButton } from "@/components/texture-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowUpRight, Bot, BrainCircuit, ChevronsUpDown, Dot, MessageCircle, MoveUpRight, Play, PlayCircle, Workflow } from "lucide-react";
import Image from "next/image";
import FeatureGrid from "./_components/card-grid";
import { IntegrationsBeam } from "./_components/integrations-beam";
import { BentoCard } from "@/components/bento-grid";
import RandomIconLayout from "./_components/icons-float";
import IconsFloat from "./_components/icons-float";
import { InputTyping } from "./_components/input-typing";
import { WobbleCard } from "@/components/wobble-card";
import WorkflowAutomationTabs from "./_components/workflow-automation-tabs";
import { AnimatedFormatCard } from "@/components/animated-format-card";
import { Orbit } from "next/font/google";
import { OrbitingCirclesDemo } from "./_components/data-format-orbit";
import { StepCarousel } from "./_components/step-carousel";
import { EnterpriseGrid } from "./_components/enterprise-grid";
import AnimatedShinyText from "@/components/shiny-button";
import { cn } from "@/lib/utils";

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
      <main className="p-10 md:p-0 w-full flex flex-col items-center justify-center  ">
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
                  <p className="text-neutral-500 font-light font-geist text-center text-sm md:text-base md:max-w-3xl">
                      An integrated framework of no-code, low-code, and out of the box generative AI
                      solutions to build AI search engines, assistants, chatbots, and automations.{" "}
                  </p>
              </div>
              <div className="relative flex z-10 items-center gap-4 md:w-full justify-center pb-10">
                  <Button
                      variant={"default"}
                      className="rounded-full bg-violet-700 hover:bg-violet-800 text-white font-geist font-base text-normal "
                  >
                      Get Started
                  </Button>
                  <Button
                      variant={"outline"}
                      className="rounded-full bg-muted/40 text-white font-geist font-base text-normal  "
                  >
                      Talk to Us
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
          <div className=" mt-48 md:w-5/6 w-full bg-background">
              <h1 className="text-5xl font-gambarino text-center leading-tight">
                  An ecosystem to build, deploy,
                  <br /> and manage AI applications
              </h1>
              <div className="bg-muted/40 p-5  md:p-10 w-full max-h-lg mt-12 border rounded-3xl">
                  <div className="flex md:items-base gap-4 flex-wrap w-full">
                      <div className="flex flex-col justify-start flex-[0.5] gap-4">
                          <h2 className="font-gesit font-medium text-2xl w-full">
                              Empowering development with no-code and code SDK
                          </h2>
                          <p className="font-geist text-neutral-400 text-base font-light">
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
                                  className="mt-2 text-xs font-geist font-medium text-neutral-200"
                                  variant={"secondary"}
                              >
                                  pipeline_setup.py
                              </Badge>
                          </div>

                          <Code language="python" code={code} />
                      </div>
                  </div>
              </div>
              <div className="max-w-5xl mt-8 flex justify-center mx-auto">
                  <div className=" flex justify-center mx-auto">
                      <FeatureGrid />
                  </div>
              </div>
          </div>
          <div className="w-5/6 mt-48">
              <div className="flex justify-center flex-col items-center gap-4">
                  <h3 className="text-5xl font-gambarino text-center leading-tight">
                      Everything you need.
                      <br /> Nothing you don’t
                  </h3>
                  <p className="font-geist text-neutral-400 text-lg font-light max-w-4xl text-center">
                      Live-sync, set up action based triggers (e.g., receive an email), and automate
                      actions (e.g., send a slack message) across your tool stack
                  </p>
              </div>
              <div className="flex justify-center mt-8 max-w-5xl items-center gap-4 mb-24">
                  <BentoCard
                      name="Integrations and automations"
                      description="Live-sync, set up action based triggers (e.g., receive an email), and automate actions (e.g., send a slack message) across your tool stack"
                      background={
                          <IntegrationsBeam className="absolute opacity-75 right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
                      }
                      href="/"
                      cta="Learn more"
                      Icon={Workflow}
                      className="flex-[0.5]"
                  />
                  <BentoCard
                      name="Large language models"
                      description="Access the latest models through the VectorShift platform"
                      background={<IconsFloat />}
                      href="/work/iot"
                      cta="Learn more"
                      Icon={BrainCircuit}
                      className="flex-[0.5]"
                  />
              </div>
          </div>

          <div className="w-5/6  mt-48">
              <div className="w-full">
                  <div className="flex w-full justify-center ">
                      <h3 className="text-5xl font-gambarino text-center leading-tight">
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
                          <div className="relative w-full p-4 rounded-lg bg-blue-600 z-20">
                              Hey! How Can I Help You?
                          </div>
                      </div>

                      <div className="text-4xl mt-12 sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex flex-col">
                          <InputTyping />
                      </div>
                  </div>
                  <div className="mb-8 w-full px-16 z-20 bg-gradient-to-r from-black/20 via-black/40 to-black/60  rounded-3xl bottom-0 flex flex-col items-start gap-2 ">
                      {/* <Bot className="size-16 font-bold text-neutral-600/90" strokeWidth={1.5} /> */}
                      <h2 className="font-geist font-medium text-3xl">Assistants</h2>
                      <p className="text-md font-geist text-neutral-400 font-light">
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
                          <div className="size-10 text-sm text-center font-medium flex justify-center items-center  p-4 rounded-md font-geist ">
                              +64
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <div className="relative border mb-24 w-5/6 h-[400px] overflow-hidden bg-black">
              <div className="absolute z-10 pointer-events-none  h-full inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>

              <div className="absolute z-0 inset-0 flex items-center justify-center">
                  <div className=" w-[120%] h-[200%] transform rotate-[-12deg] skew-x-6 perspective-2000  ">
                      <img
                          src="https://ik.imagekit.io/omraval18/axRwBiy92gHkKFro5BhkJyMv2o_4l_qefwRe.png?updatedAt=1719315944592"
                          alt="Timeline"
                          className="w-full h-full object-cover mt-16"
                      />
                  </div>
              </div>
              <div className="relative z-20 inset-0 flex flex-col items-start justify-start p-8 text-white">
                  <h2 className="text-2xl font-bold mb-2">Chatbot</h2>
                  <p className="text-sm text-gray-300">
                      Plan, manage, and track all product initiatives with Linear's visual planning
                      tools.
                  </p>
              </div>
          </div> */}

          {/* <div className="w-5/6 mt-48 h-[42rem] mb-24 flex items-center justify-center">
              <div className="flex flex-col gap-4 flex-[0.3]">
                  <MessageCircle className="size-16 text-neutral-700" />
                  <h3 className="text-5xl font-geist tracking-tight text-left leading-tight text-white">
                      Chatbot
                  </h3>
                  <p className="max-w-lg font-geist font-normal text-neutral-400 text-left text-sm md:text-base md:max-w-xl">
                      Prototype, customize, and deploy a customer facing chatbot in minutes. Use
                      cases including customer support, onboarding flow, lead collection, and<br />
                      white-glove advisory.
                  </p>
              </div>
              <div className="w-full flex-[0.7] h-full mt-8 border-2 bg-muted/40  rounded-3xl p-2">
                  <div className="w-full h-full bg-black/20 rounded-3xl border-2 border-muted/40 "></div>
              </div>
          </div> */}
          <div className="w-5/6 mb-24 p-1 border-2 border-muted/60 rounded-3xl bg-violet-900/40">
              <WobbleCard containerClassName="col-span-1 lg:col-span-3 rounded-3xl bg-violet-900 border-2 border-neutral-900/70 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                  <div className="max-w-sm  flex flex-col gap-8">
                      <div className="flex flex-col gap-2">
                          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-3xl font-geist lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                              Chatbot
                          </h2>
                          <p className=" max-w-[26rem] text-left font-geist text-base/6 text-neutral-200">
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
                      className="absolute scale-75 -right-10 md:-right-[40%] lg:-right-[20%] -bottom-20 object-contain rounded-t-lg"
                  />
              </WobbleCard>
          </div>
          <div className="w-5/6 flex flex-col  items-center justify-between gap-4 py-8">
              <h3 className="text-3xl font-geist text-left font-semibold">Workflow Automation</h3>
              <p className="text-lg font-normal text-center font-geist text-neutral-400 max-w-3xl">
                  Automate the creation of marketing copy, personalized outbound emails, call
                  summaries, and graphics at scale.
              </p>
          </div>
          <div className="w-5/6 mb-24 h-[28rem] overflow-hidden flex flex-col gap-8 p-1 rounded-3xl">
              <WorkflowAutomationTabs />
          </div>

          <div className=" w-5/6 mb-24 h-full overflow-hidden flex flex-col items-center justify-center gap-8 p-1 rounded-3xl">
              <div className="flex flex-col gap-2 ">
                  <h3 className="text-5xl font-gambarino text-center leading-tight ">
                      Leverage AI across data of all formats
                  </h3>
                  <p className="text-lg font-light text-center font-geist text-neutral-400 max-w-3xl">
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

          <div className="w-5/6 mb-24 h-screen flex flex-col gap-8 items-center">
              <EnterpriseGrid />
          </div>
          <div className="w-5/6 mb-24 mt-24 h-full flex flex-col gap-8 items-center">
              <WobbleCard
                  containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[300px]"
                  className=""
              >
                  <div className="max-w-xs font-geist flex flex-col gap-8 ">
                      <div className="flex flex-col gap-2">
                          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                              VectorShift Docs
                          </h2>
                          <p className=" text-left font-light  text-base/6 text-neutral-300">
                              Unlock advanced features and detailed guides in our extensive
                              documentation.
                          </p>
                      </div>
                      <Button className="relative mt-2 max-w-52  inline-flex h-10 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                          <span className="inline-flex h-full gap-1 w-full cursor-pointer items-center justify-center rounded-xl bg-black font-geist tracking-tight px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                              <p> Browse Documentation</p>
                              <ArrowUpRight className="size-4" />
                          </span>
                      </Button>
                  </div>

                  <div className="absolute z-20 -right-4 lg:-right-[10%]  -bottom-10 object-contain rounded-2xl">
                      <div className="mt-8 w-full h-full gap-0 hidden md:block">
                          <div className="bg-black rounded-lg  w-full">
                              <div className="flex items-center w-full">
                                  <div className="flex  items-center px-4 gap-1">
                                      <span className="size-3 mt-2 rounded-full bg-muted hover:bg-red-500 ease-in delay-75"></span>
                                      <span className="size-3 mt-2 rounded-full bg-muted hover:bg-yellow-500 ease-in delay-75"></span>
                                      <span className="size-3 mt-2 rounded-full bg-muted hover:bg-green-500 ease-in delay-75"></span>
                                  </div>
                                  <Badge
                                      className="mt-2 text-xs font-geist font-medium text-neutral-200"
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
      </main>
  );
}
