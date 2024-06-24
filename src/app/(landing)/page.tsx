import BlurIn from "@/components/blur-in-text";
import Code from "@/components/codeblock";
import MarqueeDemo from "@/components/marquee/marquee";
import { SparklesCore } from "@/components/sparkles";
import { TextureButton } from "@/components/texture-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dot, Play, PlayCircle } from "lucide-react";
import Image from "next/image";
import FeatureGrid from "./_components/card-grid";
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
          <div className=" mt-48 w-5/6 bg-background">
              <h1 className="text-5xl font-gambarino text-center leading-tight">
                  An ecosystem to build, deploy,
                  <br /> and manage AI applications
              </h1>
              <div className="bg-muted/40  p-10 w-full max-h-lg mt-12 border rounded-3xl">
                  <div className="flex items-base gap-4">
                      <div className="flex flex-col justify-start flex-[0.5] gap-4">
                          <h2 className="font-gesit font-medium text-2xl">
                              Empowering development with no-code and code SDK
                          </h2>
                          <p className="font-geist text-neutral-400 text-base font-light">
                              VectorShift combines a user-friendly No-code interface with a robust
                              Code SDK. Effortlessly create applications using drag-and-drop, or
                              dive into coding with seamless IDE integration. Enjoy flexibility and
                              power, all in one platform.
                          </p>
                      </div>
                      <div className="flex-[0.5] max-h-lg">
                          <MarqueeDemo />
                      </div>
                  </div>
                  <div className="mt-8 w-full h-full gap-0">
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
      </main>
  );
}
