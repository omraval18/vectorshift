"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const steps = [
    {
        title: "Start with a template",
        description:
            "Leverage dozens of pre-built templates for end use cases - ranging from research report generators to resume screeners.",
    },
    {
        title: "Connect data",
        description:
            "Allow your AI application to leverage raw data in any format (websites, documents, or CSVs) or directly connect with your database.",
    },
    {
        title: "Intuitive drag and drop builder",
        description:
            "Build and rapidly iterate on your application’s architecture with a large library of drag and drop components. Transfer your work seamlessly between no-code and our python SDK.",
    },
    {
        title: "Customize and deploy to end users",
        description:
            "Export a chatbot or generate an API endpoint instantly. Customize the look and feel of the application.",
    },
   
];

export function StepCarousel() {
    return (
        <Carousel
            className="w-full max-w-5xl"
            opts={{
                align: "center",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnMouseEnter: true,
                    stopOnInteraction:false
                }),
                
            ]}
        >
            <CarouselContent className="-ml-1">
                {steps.map((step, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="bg-muted/30 ">
                                <CardContent className="flex flex-col  aspect-square items-start justify-start px-6 py-8 gap-4">
                                    <span className="text-2xl font-semibold font-bricolage">
                                        {index + 1}
                                    </span>
                                    <div className="flex flex-col gap-4 ">
                                        <h6 className="text-2xl font-medium text-left font-bricolage tracking-tight">
                                            {step.title}
                                        </h6>
                                        <p className="text-sm text-white/40 max-w-sm font-normal tracking-wide font-inter text-left">
                                            {step.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="pointer-events-none absolute z-0 inset-y-0 left-0 md:w-1/3 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute z-0 inset-y-0 right-0 md:w-1/3 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
        </Carousel>
    );
}
