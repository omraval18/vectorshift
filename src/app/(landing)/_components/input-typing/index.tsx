"use client";

import { ReactNode } from "react";

import { Typewriter } from "@/components/typing-animation";
import { NeonGradientButton } from "@/components/neon-card";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/shimmer-button";

const texts = ["When was this contract started?", "When was this contract last modified?", "What’s the contract ceiling?"];

export function InputTyping() {
    return (
        <div>
            <div className="ml-auto px-4 py-3 border backdrop-blur-3xl -webkit-backdrop-blur-lg mb-3 text-white bg-muted/60 rounded-lg flex items-center gap-2">
                <div className="text-lg">✨</div>
                <div className="text-sm md:text-lg font-geist font-light text-base-900 truncate w-96">
                    <Typewriter texts={texts} delay={1} baseText="" />
                </div>
                <button className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex font-geist h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[conic-gradient(from_90deg_at_50%_50%,#1e1b4b_0%,#2e1065_50%,#1e1b4b_100%)] px-3 tracking-tight py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Ask Assistant
                    </span>
                </button>
            </div>
        </div>
    );
}


