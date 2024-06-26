import { cn } from "@/lib/utils";

export default function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}: {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
}) {
    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute  z-0 inset-0 h-full w-full"
                >
                    <circle
                        className="stroke-black/10 stroke-1 dark:stroke-white/10"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        strokeDasharray={"4 4"}
                    />
                </svg>
            )}

            <div
                style={
                    {
                        "--duration": duration,
                        "--radius": radius,
                        "--delay": -delay,
                    } as React.CSSProperties
                }
                className={cn(
                    "absolute flex z-20 h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border   [animation-delay:calc(var(--delay)*1000ms)] dark:bg-muted/70 backdrop-blur-3xl -webkit-backdrop-blur-lg",
                    { "[animation-direction:reverse]": reverse },
                    className
                )}
            >
                {children}
            </div>
        </>
    );
}
