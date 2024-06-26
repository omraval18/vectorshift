import React from "react";
import { Users } from "lucide-react";
import { Tabs,TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const features = [
    {
        id: "outbound",
        title: "Outbound",
        img: "https://ik.imagekit.io/omraval18/Xha8j2Y6dvFuFntJFrvgGEP7xB4_BYDA2KDdK.png?updatedAt=1719381661673",
    },
    {
        id: "copy",
        title: "Copy",
        img: "https://ik.imagekit.io/omraval18/MiKeHyNUkfDDsJzM66k4K2AQ_aIk3PxF1t.png?updatedAt=1719381661427",
    },
    {
        id: "summaries",
        title: "Summaries",
        img: "https://ik.imagekit.io/omraval18/jJtNxB1pSEx7bXpoieyPLT9KdQ_-G9m052Pp.png?updatedAt=1719381661757",
    },
    {
        id: "analytics",
        title: "Analytics",
        img: "https://ik.imagekit.io/omraval18/gyCNZIeQOgofnK64kzriAvaiWc_6Y9at6rhC.png?updatedAt=1719381667613"
    },
];

const WorkflowAutomationTabs = () => {
    return (
        <div className="flex h-full text-white p-8 mb-8 rounded-lg">
            <Tabs
                className="w-full h-full flex flex-wrap md:flex-nowrap items-center justify-between"
                defaultValue="outbound"
                
            >
                <TabsList
                    className="flex flex-col bg-transparent items-start space-y-1 mr-8"
                    aria-label="Features"
                    
                    
                >
                    {features.map((feature) => (
                        <TabsTrigger
                            key={feature.id}
                            className="group px-4 py-2 flex items-center gap-2 text-left text-muted-foreground bg-transparent hover:text-neutral-200 rounded transition data-[state=active]:text-white"
                            value={feature.id}
                        >
                            <span className="h-5 w-1 rounded-full bg-neutral-700 transition-colors group-data-[state=active]:bg-purple-600"></span>
                            <h6 className="text-lg font-base font-geist tracking-tight">
                                {feature.title}
                            </h6>
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className=" w-full p-6 border rounded-lg bg-muted/40 ">
                    {features.map((feature) => (
                        <TabsContent
                            key={feature.id}
                            value={feature.id}
                            className="focus:outline-none"
                        >
                            <React.Suspense fallback={<div className="w-full h-full "></div>}>
                                <img src={feature.img} alt="" className=" w-full" />
                            </React.Suspense>
                        </TabsContent>
                    ))}
                </div>
            </Tabs>
        </div>
    );
};

export default WorkflowAutomationTabs
