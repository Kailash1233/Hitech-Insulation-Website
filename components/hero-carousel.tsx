"use client";

import {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight, Pause, Play} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

type Slide = {
    title: string;
    caption: string;
    image: string;
    alt: string;
    ctaHref: string;
    ctaLabel: string;
    badge: string;
};

const SLIDES: Slide[] = [
    {
        title: "Pressboard & Machined Kits",
        caption: "Transformer-grade cellulose pressboard, CNC machined to spec for HV clearances.",
        image: "/products/pressboardsheet-2.jpg",
        alt: "Pressboard sheets and machined pressboard insulation components",
        ctaHref: "/products/pressboard-3mm",
        ctaLabel: "View Pressboard",
        badge: "Transformer Insulation"
    }, {
        title: "Epoxy Laminates (FR4 / G10)",
        caption: "High dielectric strength laminates ready for drilling, milling, and precision parts.",
        image: "/products/epoxy-sheets-1.jpg",
        alt: "Epoxy FR4 G10 fiberglass laminate sheets for electrical insulation",
        ctaHref: "/products/fr4-epoxy-sheet",
        ctaLabel: "View Epoxy Sheets",
        badge: "Epoxy Sheets"
    }, {
        title: "Phenolic & Kraft Paper Systems",
        caption: "Bakelite, paper phenolic, and kraft papers engineered for motors and switchgear.",
        image: "/products/electrical-grade-kraft-paper.jpg",
        alt: "Phenolic bakelite sheets and kraft insulation papers for electrical use",
        ctaHref: "/products/kraft-paper",
        ctaLabel: "View Kraft Paper",
        badge: "Paper & Phenolics"
    },
];

export function HeroCarousel() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const slides = useMemo(() => SLIDES, []);

    useEffect(() => {
        if (paused) 
            return;
        
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return() => clearInterval(id);
    }, [paused, slides.length]);

    const goTo = (i : number) => setIndex(i % slides.length);

    return (
        <div className="relative w-full">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-gray-900">
                {
                slides.map((slide, i) => {
                    const active = i === index;
                    return (
                        <div key={
                                slide.title
                            }
                            className={
                                cn("absolute inset-0 transition-opacity duration-700 ease-out", active ? "opacity-100" : "opacity-0 pointer-events-none")
                            }
                            aria-hidden={
                                ! active
                        }>
                            <Image src={
                                    slide.image
                                }
                                alt={
                                    slide.alt
                                }
                                fill
                                priority={
                                    i === 0
                                }
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"/>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/35"/>
                            <div className="relative z-10 flex flex-col justify-center h-full p-6 sm:p-10 lg:p-14 text-white max-w-3xl">
                                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide w-fit">
                                    {
                                    slide.badge
                                } </div>
                                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                    {
                                    slide.title
                                } </h2>
                                <p className="mt-4 text-base sm:text-lg text-gray-100/90 leading-relaxed">
                                    {
                                    slide.caption
                                } </p>
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25">
                                        <Link href={
                                            slide.ctaHref
                                        }>
                                            {
                                            slide.ctaLabel
                                        }
                                            <ArrowRight className="ml-2 h-4 w-4"/>
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10"
                                        onClick={
                                            () => setPaused((p) => !p)
                                        }
                                        type="button">
                                        {
                                        paused ? (
                                            <>
                                                <Play className="mr-2 h-4 w-4"/>
                                                Resume
                                            </>
                                        ) : (
                                            <>
                                                <Pause className="mr-2 h-4 w-4"/>
                                                Pause
                                            </>
                                        )
                                    } </Button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
                <div className="relative z-20 flex items-center justify-center gap-3 p-4">
                    {
                    slides.map((_, i) => {
                        const active = i === index;
                        return (
                            <button key={i}
                                onClick={
                                    () => goTo(i)
                                }
                                className={
                                    cn("h-2.5 rounded-full transition-all duration-300", active ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80")
                                }
                                aria-label={
                                    `Go to slide ${
                                        i + 1
                                    }`
                                }/>
                        );
                    })
                } </div>
            </div>
        </div>
    );
}
