import { Blocks, FileText } from "lucide-react";
import React from "react";

export default function EnterpriseGrid() {
    return (
        <div className="md:w-5/6 w-full  flex flex-col gap-8 items-center">
            <div className="mx-auto w-full flex flex-col items-center gap-16 mb-24 px-4 md:px-8 max-w-full py-16 lg:py-20 ">
                <div className="text-dark-muted text-sm flex flex-col items-center gap-4 lg:text-lg text-center max-w-[792px] mx-auto">
                    <h3 className="text-lg font-gambarino md:text-5xl leading-[1.2] font-medium mb-3 text-dark-bright">
                        Enterprise Solutions
                    </h3>
                    <div className="text-pretty">
                        <p className="font-inter text-neutral-400 text-base ">
                            We leverage our secure infrastructure and development platform to build
                            and deploy high-ROI AI solutions for your organizations.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="grid gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
                        <div className="rounded-xl border border-dark-border-solid overflow-clip bg-dark-shade flex flex-col items-end justify-between gap-6 pt-6 pl-6">
                            <div className="pr-6 mr-auto">
                                <h3 className="text-lg font-semibold text-balance font-bricolage md:text-3xl">
                                    Report Generation
                                </h3>
                            </div>
                            <img
                                src="https://ik.imagekit.io/omraval18/Spendings_yp1G4QTuK.png?updatedAt=1719488614743"
                                alt="BaseHub typesafe editor"
                                width="1440"
                                height="1128"
                                style={{ aspectRatio: "60/47" }}
                                className="object-cover object-left min-w-full sm:min-w-[initial] w-[360px] rounded-t-sm border border-muted"
                            />
                        </div>
                        <div className="rounded-xl border border-dark-border-solid overflow-clip bg-dark-shade flex flex-col-reverse items-end justify-between gap-6 pb-6 pl-6">
                            <div className="pr-6 mr-auto">
                                <h3 className="text-lg font-semibold text-balance font-bricolage md:text-3xl">
                                    Personalized Emails Outbound
                                </h3>
                            </div>
                            <img
                                src="https://ik.imagekit.io/omraval18/email%20image_vzUEXHQwum.png?updatedAt=1719403839752"
                                alt=""
                                width="1440"
                                height="1128"
                                style={{ aspectRatio: "60/47" }}
                                className="object-cover object-left min-w-full sm:min-w-[initial] w-[360px] rounded-lg"
                            />
                        </div>
                        <div className="rounded-xl border border-dark-border-solid overflow-clip bg-dark-shade flex flex-col items-end justify-between gap-6 pt-6 pl-6 md:col-span-2 lg:col-span-1">
                            <div className="pr-6 mr-auto">
                                <h3 className="text-lg font-semibold text-balance font-bricolage  md:text-3xl">
                                    RFP and Proposal Generators
                                </h3>
                                
                            </div>
                            <img
                                src="https://ik.imagekit.io/omraval18/01o3msbfjkBjbjMADOVLPRvRM_d9zcijruLm.png?updatedAt=1719512917727"
                                alt=""
                                width="1080"
                                height="846"
                                style={{ aspectRatio: "60/47" }}
                                className="object-cover object-left border border-muted rounded-lg min-w-full sm:min-w-[initial] w-[360px]"
                            />
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 mt-10">
                        <div className="rounded-xl border border-dark-border-solid overflow-clip bg-dark-shade flex flex-col items-end justify-between gap-6 pt-6 pl-6 xl:items-start xl:flex-row">
                            <div className="pr-6 mr-auto xl:pr-0">
                                <h3 className="text-lg font-semibold text-balance font-bricolage md:text-3xl leading-relaxed">
                                    High Volume Chatbot
                                </h3>
                                <div className="mt-4 text-sm text-dark-muted text-pretty">
                                    <p>{/* No description provided for this item */}</p>
                                </div>
                            </div>
                            <img
                                src="https://ik.imagekit.io/omraval18/axRwBiy92gHkKFro5BhkJyMv2o_4l_qefwRe.png?updatedAt=1719315944592"
                                alt=""
                                width="846"
                                height="750"
                                style={{ aspectRatio: "141/125" }}
                                className="object-cover grayscale filter object-left min-w-full sm:min-w-[initial] w-[282px]"
                            />
                        </div>
                        <div className="rounded-xl border border-dark-border-solid overflow-clip bg-dark-shade flex flex-col items-end justify-between gap-6 pt-6 pl-6 xl:items-start xl:flex-row">
                            <div className="pr-6 mr-auto xl:pr-0">
                                <h3 className="text-lg font-semibold text-balance font-bricolage md:text-3xl">
                                    Knowledge Search
                                </h3>
                            </div>
                            <div className=" border-t border-l bg-purple-700 h-full rounded-tl-lg rounded-br-lg  md:w-full sm:min-w-[initial] w-[210px] p-4">
                                <div className="bg-background rounded-lg h-full p-4 flex flex-col items-center gap-4">
                                    <h3 className="font-bricolage text-xl tracking-tight font-medium">
                                        Tools
                                    </h3>
                                    <div className="w-full flex items-center justify-center gap-4 flex-wrap">
                                        <img
                                            src="https://ik.imagekit.io/omraval18/airtable_7JoRHOTNV.svg?updatedAt=1719313480309"
                                            alt=""
                                            className="size-16  p-2 border bg-muted/40 rounded-lg"
                                        />
                                        <img
                                            src="https://ik.imagekit.io/omraval18/notion-icon_XBS4k3wdu.svg?updatedAt=1719313480274"
                                            alt=""
                                            className="size-16  p-2 border bg-muted/40 rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full flex items-center justify-center gap-4 flex-wrap">
                                        <div className="size-16 p-2 border bg-muted/40 rounded-lg flex justify-center items-center ">
                                            <Blocks className="size-7 text-neutral-300" />
                                        </div>
                                        <div className="size-16 p-2 border bg-muted/40 rounded-lg flex justify-center items-center font-bricolage">
                                            +64
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
