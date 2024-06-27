import {  BentoGrid } from "@/components/bento-grid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

const features = [
    {
        Icon: FileTextIcon,
        name: "High Volume Chatbot",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: InputIcon,
        name: "Enterprise Solutions",
        description:
            "We leverage our secure infrastructure and development platform to build and deploy high-ROI AI solutions for your organizations.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-6",
    },
    {
        Icon: GlobeIcon,
        name: "Report Generation",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-6 lg:row-end-8",
    },
    {
        Icon: MailIcon,
        name: "Personalized Emails Outbound",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background: (
            <Image
                src="https://ik.imagekit.io/omraval18/email%20image_vzUEXHQwum.png?updatedAt=1719403839752"
                width={1200}
                height={1200}
                alt="linear demo image"
                className="absolute -right-40 lg:-right-[20%] md:scale-125 scale-50 grayscale filter -top-20 md:top-10 object-contain rounded-2xl"
            />
        ),
        className: "lg:row-start-3 lg:row-end-8 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: CalendarIcon,
        name: "RFP and Proposal Generators",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-6",
    },
    {
        Icon: BellIcon,
        name: "Knowledge Search",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-6 lg:row-end-8",
    },
];


const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description?: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col  justify-between overflow-hidden rounded-xl",
            // light styles
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 mb-6 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 font-bricolage">{name}</h3>
            {description && <p className="max-w-lg text-neutral-400 font-inter tracking-tight">{description}</p>}
        </div>

        <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            )}
        >
            <Button variant="ghost" asChild size="sm" className="pointer-events-auto font-bricolage">
                <a href={href}>
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
export async function EnterpriseGrid() {
    return (
        <BentoGrid className="lg:grid-rows-8 ">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}
