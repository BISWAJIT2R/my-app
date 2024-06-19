

import { Grid } from "./ui/Grid";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from 'next/link'
import { GoArrowUpRight } from "react-icons/go";
import Button from "./ui/Button";

const Hero = () => {

  const words = ["React", "NextJs", "Frontend"];

  return (
    <div className=" pb-20 pt-32 relative">
      
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <Grid />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 md:text-xl md:max-w-[50rem]">
          Transforming Ideas into Stunning Digital Experiences
          </h2>
          <TextGenerateEffect
            words="Welcome to a world where creativity meets code. As a dedicated Frontend Developer, I specialize in crafting engaging, responsive, and user-centric websites that bring visions to life."
            className="text-center text-[40px] md:text-4xl lg:text-6xl"
          />

          <p className="text-center text-neutral-600 dark:text-neutral-400 md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl pt-5 md:pt-7">
            Hi! I&apos;m Biswajit, a NextJs Developer based in India.
          </p>
          
          <Link href="#about">
            <Button title="See my works" icons={<GoArrowUpRight />} extraclass="hover:rotate-[45deg]"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
