import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqData = [
    {
        question: "Who can use VectorShift?",
        answer: "VectorShift is designed for teams looking to automate tasks with custom generative AI applications or to incorporate generative AI into their products. We work with companies ranging from fortune 500 companies to startups – and hopefully you too!",
    },
    {
        question: "Can I try VectorShift for free?",
        answer: (
            <p>
                Yes –{" "}
                <Link href={"/"} className="text-purple-500">
                    please click here to get started
                </Link>
                . Our free version gives you access to our AI application builder and 50 runs per
                month.
            </p>
        ),
    },
    {
        question: "Is there a monthly plan available?",
        answer: (
            <p>
                Yes –{" "}
                <Link href={"/"} className="text-purple-500">
                    please view our pricing plans here.
                </Link>{" "}
                We offer both monthly subscriptions (can be canceled anytime) or annual
                subscriptions (20% discount).
            </p>
        ),
    },
    {
        question: "Can I use my own LLM API key?",
        answer: "Yes – you can provide your own LLM API key directly in our application builder (when you utilize a LLM component).",
    },
    {
        question: "Is VectorShift secure?",
        answer: "We take data security seriously and built our platform with security in mind. User data is end-to-end encrypted and uploaded files are securely store in encrypted S3 buckets. We have “zero data retention” agreements with our model providers (Open AI) to ensure that data is not stored or used for training purposes.",
    },
    {
        question: "Where can I learn more about how to use VectorShift?",
        answer: (
            <p>
                Visit our{" "}
                <Link href={"/"} className="text-purple-500">
                    knowledge base
                </Link>
                , join our{" "}
                <Link href={"/"} className="text-purple-500">
                    discord
                </Link>
                , watch our tutorials, or{" "}
                <Link href={"/"} className="text-purple-500">
                    Book a demo!
                </Link>
            </p>
        ),
    },
    {
        question: "Can VectorShift integrate with my data?",
        answer: (
            <p>
                Most likely, yes! VectorShift integrates with many common data sources such as
                Notion, Airtable, Google drive, and Onedrive. Can’t find an integration you need?{" "}
                <Link href={"/"} className="text-purple-500">
                    Contact us here.
                </Link>
            </p>
        ),
    },
    {
        question: "Can VectorShift help build a solution for my organization?",
        answer: "Yes – we have developed and implemented turn-key AI applications for companies ranging from fortune 500 to startups. Contact our sales team here for more information.",
    },
];

export function FAQ() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="font-geist tracking-tight text-2xl hover:no-underline font-normal text-stone-200">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                        <span className="font-light text-neutral-400 text-lg font-geist text-left leading-relaxed tracking-tight">
                            {item.answer}
                        </span>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
