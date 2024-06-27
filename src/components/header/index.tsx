"use client";
import { ArrowDown, ChevronDown, CircleUser, Menu, Package2 } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import ShimmerButton from "../shimmer-button";
import Image from "next/image";

export default function Header() {
    return (
        <div className="fixed z-40 top-0 left-0 right-0 flex justify-center mt-4 px-4 ">
            <header className="w-full max-w-5xl flex items-center justify-between h-12 rounded-lg backdrop-blur-3xl -webkit-backdrop-blur-lg border-[1px] border-muted/40 bg-muted/20 px-4 md:px-6">
                <nav className="flex items-center md:justify-between w-full md:gap-10 gap-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Image
                            src={
                                "https://ik.imagekit.io/omraval18/download%20(31)_w4GODqvey4.png?updatedAt=1719134003161"
                            }
                            width={24}
                            height={24}
                            alt="logo"
                        />
                        <span className="text-xs md:text-sm font-medium">VectorShift</span>
                    </Link>
                    <div className="hidden md:flex font-bricolage items-center gap-4 text-sm font-normal md:text-sm">
                        <Menubar className="border-none bg-transparent p-0 ">
                            <MenubarMenu>
                                <MenubarTrigger className="border-none p-0 data-[state=open]:bg-transparent">
                                    <span className="text-muted-foreground font-normal flex items-center  transition-colors hover:text-foreground">
                                        <p>Platform</p>
                                        <ChevronDown className="size-4" />
                                    </span>
                                </MenubarTrigger>
                                <MenubarContent className="mt-4 bg-background/70 backdrop-blur-3xl -webkit-backdrop-blur-lg border border-muted">
                                    <MenubarItem>Pipeline</MenubarItem>
                                    <MenubarItem>Marketplace</MenubarItem>
                                    <MenubarItem>Evaluations</MenubarItem>
                                    <MenubarItem>Chat</MenubarItem>
                                    <MenubarItem>Search</MenubarItem>
                                    <MenubarItem>Agents</MenubarItem>
                                    <MenubarItem>Automation</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                        <Link
                            href="#"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Enterprise
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Resources
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Discord
                        </Link>
                    </div>
                    <div className="flex items-center gap-2  md:gap-2 lg:gap-2">
                        <Button
                            variant="outline"
                            size="xs"
                            className="rounded-full bg-muted hover:bg-muted/80 text-xs font-bricolage"
                        >
                            Login
                        </Button>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap font-bricolage text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-xs">
                                Get Started
                            </span>
                        </ShimmerButton>
                    </div>
                </nav>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="iconxs" className="md:hidden">
                            <Menu className="size-3 md:size-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[90%]">
                        <nav className="grid grid-cols-2 gap-6 text-lg font-medium font-bricolage">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-medium col-span-2"
                            >
                                <Image
                                    src={
                                        "https://ik.imagekit.io/omraval18/download%20(31)_w4GODqvey4.png?updatedAt=1719134003161"
                                    }
                                    width={24}
                                    height={24}
                                    alt="logo"
                                />
                                <span className="text-xs md:text-sm font-medium">VectorShift</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Pipeline
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Chat
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Marketplace
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Agents
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Automation
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Search
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Evaluations
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Enterprise
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Pricing
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Resources
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                Discord
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
}
