"use client";

import { cn } from "@/lib/utils";
import { CSSProperties, ButtonHTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";

interface NeonColorsProps {
    firstColor: string;
    secondColor: string;
}

interface NeonGradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * @default ""
     * @type string
     * @description
     * The className of the button
     */
    className?: string;

    /**
     * @default ""
     * @type ReactNode
     * @description
     * The children of the button
     * */
    children?: ReactNode;

    /**
     * @default 2
     * @type number
     * @description
     * The size of the border in pixels
     * */
    borderSize?: number;

    /**
     * @default 20
     * @type number
     * @description
     * The size of the radius in pixels
     * */
    borderRadius?: number;

    /**
     * @default "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }"
     * @type object
     * @description
     * The colors of the neon gradient
     * */
    neonColors?: NeonColorsProps;
}

const NeonGradientButton: React.FC<NeonGradientButtonProps> = ({
    className,
    children,
    borderSize = 2,
    borderRadius = 4,
    neonColors = {
        firstColor: "#4c1d95",
        secondColor: "#581c87",
    },
    ...props
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (buttonRef.current) {
                const { offsetWidth, offsetHeight } = buttonRef.current;
                setDimensions({ width: offsetWidth, height: offsetHeight });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    useEffect(() => {
        if (buttonRef.current) {
            const { offsetWidth, offsetHeight } = buttonRef.current;
            setDimensions({ width: offsetWidth, height: offsetHeight });
        }
    }, [children]);

    return (
        <button
            ref={buttonRef}
            style={
                {
                    "--border-size": `${borderSize}px`,
                    "--border-radius": `${borderRadius}px`,
                    "--neon-first-color": neonColors.firstColor,
                    "--neon-second-color": neonColors.secondColor,
                    "--button-width": `${dimensions.width}px`,
                    "--button-height": `${dimensions.height}px`,
                    "--button-content-radius": `${borderRadius - borderSize}px`,
                    "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
                    "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
                    "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
                    "--after-blur": `${dimensions.width / 3}px`,
                } as CSSProperties
            }
            className={cn(
                "relative z-10 rounded-[var(--border-radius)] px-6 py-3 font-bold text-white",
                "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
                "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
                "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
                "before:animate-backgroundPositionSpin",
                "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
                "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
                "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
                "after:animate-backgroundPositionSpin",
                "hover:brightness-110 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export { NeonGradientButton };
