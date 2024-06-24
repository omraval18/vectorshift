import { BentoCard, BentoGrid } from "@/components/bento-grid";
import {
    BellIcon,
    CalendarIcon,
    ChatBubbleIcon,
    DashboardIcon,
    FileIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
    MagicWandIcon,
    MixIcon,
} from "@radix-ui/react-icons";
import { BotMessageSquare, Code, FileSearch, Globe, Icon, Keyboard, Store } from "lucide-react";

const features = [
    {
        Icon: Store,
        name: "Marketplace: Pre-built use cases",

        href: "/work/iot",
        cta: "Learn more",
        background: (
            <img
                className="absolute -right-10 -top-10 opacity-60"
                src="https://ik.imagekit.io/omraval18/LP7oL6QWUgs8pSjyRz85IZvI4s_rgjONypAQ.png?updatedAt=1719257827644"
            />
        ),
        className: "col-span-1 ",
    },
    {
        Icon: BotMessageSquare,
        name: "Agents: execute complex tasks",
        href: "/work/vaaksya",
        cta: "Learn more",
        background: (
            <img
                className="absolute -right-10 -top-16 opacity-60"
                src="https://ik.imagekit.io/omraval18/axRwBiy92gHkKFro5BhkJyMv2o_EbL6EgSDx.png?updatedAt=1719257827563"
            />
        ),
        className: "col-span-1 row-span-2",
    },
    {
        Icon: FileSearch,
        name: "Search: use the optimal data retrieval method",
        href: "/work/blackhole",
        cta: "Learn more",
        background: (
            <img
                className="absolute -right-10 -top-0 opacity-60 "
                src="https://ik.imagekit.io/omraval18/6H9pHXcQDiBray7Lx32tmpRaf0_a4R59dPZM.png?updatedAt=1719257827558"
            />
        ),
        className: "col-span-1 ",
    },
];

export default function FeatureGrid() {
    return (

        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
            
        
    );
}
