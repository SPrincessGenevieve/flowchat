"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import QuickAccess from "@/components/landing/quickAccess";
import Courses from "@/components/landing/courses";
import { WavyBackground } from "@/components/ui/wavy-background";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/Hero";
import CarouselContent from "@/components/landing/courses-content";
import HeaderMenu from "@/components/header/HeaderMenu";

export default function Page() {
  const carouselWrapper = useRef<HTMLDivElement>(null);
  const carouselTrack = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const zoomTl = gsap.timeline({
      scrollTrigger: {
        trigger: coursesRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    zoomTl
      .to(coursesRef.current, {
        scale: 3,
        ease: "none",
      })
      .to(
        coursesRef.current,
        {
          opacity: 0,
          ease: "none",
        },
        0.5,
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-linear-60 from-primary-blue-600 via-5% via-primary-blue-400 to-primary-blue-500">
      {/* HERO */}
      <HeaderMenu></HeaderMenu>
      <section className="h-screen flex items-center justify-center bg-transparent text-white text-6xl font-bold">
        <Hero></Hero>
      </section>

      {/* QUICK ACCESS */}
      <section className="flex items-center justify-center bg-transparent text-white text-6xl font-bold">
        <QuickAccess></QuickAccess>
      </section>

      {/* COURSES */}
      <section
        ref={coursesRef}
        className="h-screen bg-transparent relative flex items-center justify-center text-white text-6xl font-bold"
      >
        <Courses></Courses>
      </section>

      {/* CAROUSEL STORY */}
      <section ref={carouselWrapper}>
        <div className="fixed mt-70 inset-0 -right-4 -z-10 pointer-events-none">
          <WavyBackground />
        </div>
        <CarouselContent ref={carouselTrack} slides={4}></CarouselContent>
      </section>

      {/* FOOTER */}
      <section className="min-h-50 h-auto flex items-center justify-center bg-white">
        <Footer></Footer>
      </section>
    </div>
  );
}
