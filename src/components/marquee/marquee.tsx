import { cn } from "@/lib/utils";
import Marquee from ".";

const reviews = [
    {
        title: "Instruction Text",
        body: "Describe this File to Me",
        url: "https://avatar.vercel.sh/text",
        number: 1,
    },
    {
        title: "File Input",
        body: "JSON, CSV or PDF",
        url: "https://avatar.vercel.sh/input",
        number: 2,
    },
    {
        title: "OpenAI LLM",
        body: "Model: gpt-4.0-turbo (processes input)",
        url: "https://avatar.vercel.sh/llm",
        number: 3,
    },
    {
        title: "File Loader",
        body: "Reads the input file",
        url: "https://avatar.vercel.sh/loader",
        number: 4,
    },
    {
        title: "Result",
        body: "Generates output",
        url: "https://avatar.vercel.sh/result",
        number: 5,
    },
];



const SDKProcessCard = ({
    url,
    title,
    body,
    number,
}: {
    url: string;
    title: string;
    body: string;
    number: number;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-start justify-items-start ",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <div
                    style={{ backgroundImage: `url("${url}")` }}
                    className="w-8 h-8 rounded-full bg-cover bg-center flex items-center justify-center text-white text-lg font-bricolage font-semibold"
                >
                    {number}
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white font-bricolage">{title}</figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-base font-inter tracking-tighter">{body}</blockquote>
        </figure>
    );
};

const PipelineStepMarquee = () => {
    return (
        <div
            className={cn(
                "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                "max-w-lg py-16"
            )}
        >
            <Marquee pauseOnHover className="[--duration:20s]">
                {reviews.map((review) => (
                    <SDKProcessCard
                        key={review.title}
                        url={review.url}
                        title={review.title}
                        body={review.body}
                        number={review.number}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default PipelineStepMarquee;
