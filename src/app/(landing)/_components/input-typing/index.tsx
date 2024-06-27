"use client";

import { ReactNode } from "react";

import { Typewriter } from "@/components/typing-animation";
import { NeonGradientButton } from "@/components/neon-card";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/shimmer-button";
import { ArrowUpRight } from "lucide-react";

const texts = ["When was this contract started?", "When was this contract last modified?", "What’s the contract ceiling?"];

export function InputTyping() {
    return (
        <div className="ml-auto px-2 flex items-center py-2 border backdrop-blur-3xl -webkit-backdrop-blur-lg mb-2 text-white bg-muted/60 rounded-lg  md:px-4 md:py-3 md:mb-3">
            <div className="flex items-center gap-1 md:gap-2">
                <div className="text-sm md:text-lg flex items-center justify-center w-6 md:w-auto">
                    ✨
                </div>
                <div className="text-xs font-inter  font-base text-base-900 truncate w-48 md:w-96 md:text-base min-h-[2rem] md:min-h-[2rem]">
                    <Typewriter texts={texts} delay={1} baseText="" />
                </div>
                <button className="relative inline-flex h-8 md:h-10 overflow-hidden md:rounded-lg rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex font-bricolage h-full w-full cursor-pointer items-center justify-center md:rounded-lg rounded-sm bg-[conic-gradient(from_90deg_at_50%_50%,#1e1b4b_0%,#2e1065_50%,#1e1b4b_100%)] px-2 md:px-3 tracking-tight py-1 text-xs md:text-sm font-medium text-white backdrop-blur-3xl">
                        <span className="block md:hidden">Ask Me</span>
                        <span className="hidden md:block">Ask Assistant</span>
                    </span>
                </button>
            </div>
        </div>
    );
}


